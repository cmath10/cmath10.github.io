<script setup lang="ts">
import IconPhp from '~icons/simple-icons/php'
import IconReact from '~icons/simple-icons/react'
import IconTypescript from '~icons/simple-icons/typescript'
import IconVitest from '~icons/simple-icons/vitest'
import IconVue from '~icons/simple-icons/vuedotjs'
import { useSiteLocale } from '../useSiteLocale'

const { t } = useSiteLocale()

const stack = [
  { label: 'Vue', icon: IconVue },
  { label: 'React', icon: IconReact },
  { label: 'PHP', icon: IconPhp },
  { label: 'Vitest', icon: IconVitest },
  { label: 'TypeScript', icon: IconTypescript }
]
</script>

<template>
  <section class="site-band site-band-hero">
    <div class="site-shell">
      <div class="site-hero">
        <div class="site-hero-copy">
          <h1 class="site-title">{{ t.homeHero.title }}</h1>
          <p class="site-subtitle">{{ t.homeHero.subtitle }}</p>

          <div class="site-hero-intro">
            <p class="site-lead">{{ t.homeHero.lead }}</p>

            <div class="site-badge-row">
              <span v-for="item in stack" :key="item.label" class="site-tech-chip">
                <component :is="item.icon" class="site-tech-chip-icon" />
                <span>{{ item.label }}</span>
              </span>
            </div>

            <div class="site-link-row">
              <a class="site-link-pill secondary" href="https://github.com/cmath10" target="_blank" rel="noreferrer">
                <span class="pi pi-github" />
                {{ t.homeHero.github }}
              </a>
            </div>
          </div>

          <div class="site-hero-notes">
            <p class="site-hero-kicker">{{ t.homeHero.directionTitle }}</p>
            <ul class="site-hero-list">
              <li v-for="item in t.homeHero.directionItems" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>

        <div class="site-hero-mark-frame">
          <img class="site-hero-mark" src="/logo.svg" :alt="`${t.homeHero.title} logo`" />
        </div>
      </div>
    </div>
  </section>
</template>
