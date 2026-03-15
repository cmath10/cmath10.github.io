import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'
import { test } from '@playwright/test'

function readInteger(name: string, fallback: number) {
  const value = process.env[name]

  if (!value) {
    return fallback
  }

  const parsed = Number.parseInt(value, 10)

  return Number.isFinite(parsed) ? parsed : fallback
}

function readSelectors() {
  const raw = process.env.PLAYWRIGHT_GEOM_SELECTORS ?? 'body'

  return raw
    .split('\n')
    .flatMap((chunk) => chunk.split(','))
    .map((item) => item.trim())
    .filter(Boolean)
}

function readRelations() {
  const raw = process.env.PLAYWRIGHT_GEOM_RELATIONS ?? ''

  return raw
    .split('\n')
    .flatMap((item) => item.split(';'))
    .map((item) => item.trim())
    .filter(Boolean)
    .map((line) => {
      const [name, fromSelector, fromAnchor, toSelector, toAnchor, offset = '0'] = line
        .split('|')
        .map((item) => item.trim())

      return {
        name,
        fromSelector,
        fromAnchor,
        toSelector,
        toAnchor,
        offset: Number.parseInt(offset, 10) || 0
      }
    })
}

const geomUrl = process.env.PLAYWRIGHT_GEOM_URL ?? '/'
const geomFile = process.env.PLAYWRIGHT_GEOM_FILE ?? '/artifacts/geometry.json'
const geomTheme = process.env.PLAYWRIGHT_GEOM_THEME === 'dark' ? 'dark' : 'light'
const geomWaitUntil = process.env.PLAYWRIGHT_GEOM_WAIT_UNTIL ?? 'networkidle'
const geomOverlayFile = process.env.PLAYWRIGHT_GEOM_OVERLAY_FILE ?? ''

test('capture geometry report', async ({ page }) => {
  await page.setViewportSize({
    width: readInteger('PLAYWRIGHT_GEOM_WIDTH', 1440),
    height: readInteger('PLAYWRIGHT_GEOM_HEIGHT', 1024)
  })

  await page.emulateMedia({
    colorScheme: geomTheme,
    reducedMotion: 'reduce'
  })

  await page.goto(geomUrl, {
    waitUntil: geomWaitUntil as 'domcontentloaded' | 'load' | 'networkidle'
  })

  const selectors = readSelectors()
  const relations = readRelations()

  const report = await page.evaluate(({ selectorList, relationList }) => {
    function getRectPayload(node: Element) {
      const rect = node.getBoundingClientRect()
      const text = (node.textContent ?? '').replace(/\s+/g, ' ').trim()

      return {
        tagName: node.tagName.toLowerCase(),
        text: text.slice(0, 140),
        rect: {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height,
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom,
          left: rect.left
        },
        anchors: {
          top: rect.top,
          bottom: rect.bottom,
          left: rect.left,
          right: rect.right,
          'center-x': rect.left + rect.width / 2,
          'center-y': rect.top + rect.height / 2
        }
      }
    }

    const selectorEntries = selectorList.map((selector) => {
      const nodes = Array.from(document.querySelectorAll(selector))

      return {
        selector,
        count: nodes.length,
        nodes: nodes.map((node, index) => ({
          index,
          ...getRectPayload(node)
        }))
      }
    })

    const selectorMap = Object.fromEntries(
      selectorEntries.map((entry) => [entry.selector, entry.nodes])
    )

    const relationEntries = relationList.map((relation) => {
      const fromNodes = selectorMap[relation.fromSelector] ?? []
      const toNodes = selectorMap[relation.toSelector] ?? []

      const pairs = fromNodes.flatMap((fromNode, index) => {
        const targetIndex = index + relation.offset
        const toNode = toNodes[targetIndex]

        if (!toNode) {
          return []
        }

        const fromValue = fromNode.anchors[relation.fromAnchor as keyof typeof fromNode.anchors]
        const toValue = toNode.anchors[relation.toAnchor as keyof typeof toNode.anchors]

        return [{
          index,
          fromIndex: index,
          toIndex: targetIndex,
          fromValue,
          toValue,
          delta: toValue - fromValue,
          fromText: fromNode.text,
          toText: toNode.text
        }]
      })

      return {
        ...relation,
        count: pairs.length,
        pairs
      }
    })

    return {
      selectors: selectorEntries,
      relations: relationEntries
    }
  }, { selectorList: selectors, relationList: relations })

  if (geomOverlayFile) {
    await page.evaluate((selectorList) => {
      const existing = document.getElementById('playwright-geometry-overlay')

      if (existing) {
        existing.remove()
      }

      const style = document.createElement('style')
      style.id = 'playwright-geometry-overlay'
      style.textContent = `
        .pw-geom-target {
          outline: 1px dashed rgba(255, 0, 102, 0.9) !important;
          outline-offset: 1px !important;
        }
        .pw-geom-center {
          position: absolute;
          width: 8px;
          height: 8px;
          margin-left: -4px;
          margin-top: -4px;
          border-radius: 999px;
          background: rgba(0, 200, 255, 0.95);
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.9);
          pointer-events: none;
          z-index: 999999;
        }
      `
      document.head.append(style)

      const fragment = document.createDocumentFragment()

      selectorList.forEach((selector) => {
        document.querySelectorAll(selector).forEach((node) => {
          node.classList.add('pw-geom-target')
          const rect = node.getBoundingClientRect()
          const dot = document.createElement('span')
          dot.className = 'pw-geom-center'
          dot.style.left = `${window.scrollX + rect.left + rect.width / 2}px`
          dot.style.top = `${window.scrollY + rect.top + rect.height / 2}px`
          fragment.append(dot)
        })
      })

      document.body.append(fragment)
    }, selectors)

    mkdirSync(dirname(geomOverlayFile), { recursive: true })
    await page.screenshot({
      path: geomOverlayFile,
      fullPage: true,
      animations: 'disabled'
    })
  }

  mkdirSync(dirname(geomFile), { recursive: true })
  writeFileSync(geomFile, JSON.stringify(report, null, 2))
})
