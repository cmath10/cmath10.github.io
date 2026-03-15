<script setup lang="ts">
import { computed } from 'vue'
import { useSiteLocale } from '../useSiteLocale'

const { t } = useSiteLocale()
const areas = computed(() => t.value.focusAreas.items)
</script>

<template>
  <section class="site-band site-band-focus">
    <div class="site-shell">
      <div class="site-section">
        <div class="site-section-head">
          <div class="site-section-copy">
            <h2>{{ t.focusAreas.title }}</h2>
            <p class="site-section-intro">{{ t.focusAreas.intro }}</p>
          </div>
        </div>

        <div class="site-grid cards-3">
          <PCard
            v-for="area in areas"
            :key="area.title"
            class="site-panel-card"
          >
            <template #title>{{ area.title }}</template>
            <template #content>
              <p>{{ area.text }}</p>
              <div class="site-badge-row">
                <PTag
                  v-for="tag in area.tags"
                  :key="tag"
                  :value="tag"
                  rounded
                />
              </div>
            </template>
          </PCard>
        </div>
      </div>
    </div>
  </section>
</template>
