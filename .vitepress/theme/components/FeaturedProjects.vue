<script setup lang="ts">
import { computed } from 'vue'
import { useSiteLocale } from '../useSiteLocale'

const { t, localePath } = useSiteLocale()
const projects = computed(() => t.value.featuredProjects.items)
</script>

<template>
  <section class="site-band site-band-projects">
    <div class="site-shell">
      <div class="site-section">
        <div class="site-section-head">
          <div class="site-section-copy">
            <h2>{{ t.featuredProjects.title }}</h2>
            <p class="site-section-intro">{{ t.featuredProjects.intro }}</p>
          </div>
          <a class="site-link-pill secondary" :href="localePath('/projects')">{{ t.featuredProjects.cta }}</a>
        </div>

        <div class="site-grid cards-2">
          <PCard
            v-for="project in projects"
            :key="project.name"
            class="site-project-card"
          >
            <template #title>
              <a :href="project.href" target="_blank" rel="noreferrer">{{ project.name }}</a>
            </template>
            <template #content>
              <p>{{ project.summary }}</p>
              <div class="site-project-meta">
                <PTag
                  v-for="tag in project.tags"
                  :key="tag"
                  :value="tag"
                  severity="secondary"
                  rounded
                />
              </div>
              <div class="site-inline-note">{{ t.featuredProjects.note }}</div>
            </template>
          </PCard>
        </div>
      </div>
    </div>
  </section>
</template>
