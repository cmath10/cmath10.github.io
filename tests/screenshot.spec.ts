import { expect, test } from '@playwright/test'

function readInteger(name: string, fallback: number) {
  const value = process.env[name]

  if (!value) {
    return fallback
  }

  const parsed = Number.parseInt(value, 10)

  return Number.isFinite(parsed) ? parsed : fallback
}

function readBoolean(name: string, fallback: boolean) {
  const value = process.env[name]

  if (!value) {
    return fallback
  }

  return ['1', 'true', 'yes', 'on'].includes(value.toLowerCase())
}

const shotUrl = process.env.PLAYWRIGHT_SHOT_URL ?? '/'
const shotFile = process.env.PLAYWRIGHT_SHOT_FILE ?? 'artifacts/playwright/home.png'
const shotTheme = process.env.PLAYWRIGHT_SHOT_THEME === 'dark' ? 'dark' : 'light'
const shotWaitUntil = process.env.PLAYWRIGHT_SHOT_WAIT_UNTIL ?? 'networkidle'

test('capture a page screenshot', async ({ page }) => {
  await page.setViewportSize({
    width: readInteger('PLAYWRIGHT_SHOT_WIDTH', 1440),
    height: readInteger('PLAYWRIGHT_SHOT_HEIGHT', 1024)
  })

  await page.emulateMedia({
    colorScheme: shotTheme,
    reducedMotion: 'reduce'
  })

  await page.goto(shotUrl, {
    waitUntil: shotWaitUntil as 'domcontentloaded' | 'load' | 'networkidle'
  })

  await expect(page.locator('body')).toBeVisible()

  await page.screenshot({
    path: shotFile,
    fullPage: readBoolean('PLAYWRIGHT_SHOT_FULL_PAGE', true),
    animations: 'disabled'
  })
})
