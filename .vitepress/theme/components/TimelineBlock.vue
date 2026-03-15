<script setup lang="ts">
import { computed } from 'vue'
import IconApache from '~icons/simple-icons/apache'
import IconCss from '~icons/simple-icons/css'
import IconDocker from '~icons/simple-icons/docker'
import IconGit from '~icons/simple-icons/git'
import IconHtml5 from '~icons/simple-icons/html5'
import IconJavascript from '~icons/simple-icons/javascript'
import IconJquery from '~icons/simple-icons/jquery'
import IconMysql from '~icons/simple-icons/mysql'
import IconNodejs from '~icons/simple-icons/nodedotjs'
import IconNuxt from '~icons/simple-icons/nuxtdotjs'
import IconPhp from '~icons/simple-icons/php'
import IconPlaywright from '~icons/simple-icons/playwright'
import IconPostgresql from '~icons/simple-icons/postgresql'
import IconSass from '~icons/simple-icons/sass'
import IconTypescript from '~icons/simple-icons/typescript'
import IconVite from '~icons/simple-icons/vite'
import IconVitest from '~icons/simple-icons/vitest'
import IconVue from '~icons/simple-icons/vuedotjs'
import { useSiteLocale } from '../useSiteLocale'

const { t } = useSiteLocale()
const items = computed(() => t.value.timeline.items)

const skillIcons = {
  Apache: IconApache,
  CSS: IconCss,
  Docker: IconDocker,
  Git: IconGit,
  HTML5: IconHtml5,
  JavaScript: IconJavascript,
  jQuery: IconJquery,
  MySQL: IconMysql,
  'Node.js': IconNodejs,
  Nuxt: IconNuxt,
  PHP: IconPhp,
  Playwright: IconPlaywright,
  PostgreSQL: IconPostgresql,
  SCSS: IconSass,
  TypeScript: IconTypescript,
  Vite: IconVite,
  Vitest: IconVitest,
  Vue: IconVue
} as const
</script>

<template>
  <section class="site-band site-band-story">
    <div class="site-shell">
      <div class="site-section">
        <div class="site-section-head">
          <div class="site-section-copy">
            <h2>{{ t.timeline.title }}</h2>
            <p class="site-section-intro">{{ t.timeline.intro }}</p>
          </div>
        </div>

        <div class="site-timeline-list">
          <article
            v-for="(item, index) in items"
            :key="item.title"
            class="site-timeline-item"
          >
            <div class="site-timeline-rail" aria-hidden="true">
              <span
                v-if="index > 0"
                class="timeline-segment timeline-segment-before"
              />
              <span class="timeline-marker" />
              <span
                v-if="index < items.length - 1"
                class="timeline-segment timeline-segment-after"
              />
            </div>

            <div class="site-timeline-entry">
              <h3 class="site-timeline-entry-title">
                <a
                  v-if="item.companyHref && item.company"
                  :href="item.companyHref"
                  class="site-timeline-entry-company"
                  target="_blank"
                  rel="noreferrer"
                >
                  {{ item.company }}
                </a>
                <span v-else-if="item.company">{{ item.company }}</span>
                <span v-else>{{ item.title }}</span>
                <span v-if="item.company && item.role" class="site-timeline-entry-separator">
                  ·
                </span>
                <span v-if="item.role" class="site-timeline-entry-role">{{ item.role }}</span>
              </h3>
              <p class="site-timeline-entry-description">{{ item.description }}</p>
              <div v-if="item.skills?.length" class="site-timeline-skill-row">
                <span
                  v-for="skill in item.skills"
                  :key="skill"
                  class="site-tech-chip site-tech-chip-muted"
                >
                  <component
                    :is="skillIcons[skill as keyof typeof skillIcons]"
                    v-if="skillIcons[skill as keyof typeof skillIcons]"
                    class="site-tech-chip-icon"
                  />
                  {{ skill }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
