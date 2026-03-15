<script setup lang="ts">
import IconGmail from '~icons/simple-icons/gmail'
import IconLinkedin from '~icons/simple-icons/linkedin'
import IconTelegram from '~icons/simple-icons/telegram'
import { useSiteLocale } from '../useSiteLocale'

const { t } = useSiteLocale()

const contactIcons = {
  Email: IconGmail,
  LinkedIn: IconLinkedin,
  Telegram: IconTelegram
} as const
</script>

<template>
  <section class="site-band site-band-contact">
    <div class="site-shell">
      <footer class="site-footer">
        <div class="site-footer-copy">
          <h2>{{ t.contact.title }}</h2>
          <p class="site-section-intro">{{ t.contact.intro }}</p>
        </div>

        <div class="site-footer-links">
          <a
            v-for="item in t.contact.items"
            :key="item.label"
            :href="item.href"
            class="site-footer-link"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noreferrer' : undefined"
          >
            <component
              :is="contactIcons[item.label as keyof typeof contactIcons]"
              class="site-footer-link-icon"
            />
            <span class="site-footer-link-value">{{ item.value }}</span>
          </a>
        </div>
      </footer>
    </div>
  </section>
</template>
