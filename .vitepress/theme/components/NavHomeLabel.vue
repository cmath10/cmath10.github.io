<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { useSiteLocale } from '../useSiteLocale'

const route = useRoute()
const { localeKey, localePath } = useSiteLocale()

function normalizePath(path: string) {
  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1)
  }

  return path
}

const homePath = computed(() => normalizePath(localePath('/')))
const currentPath = computed(() => normalizePath(route.path))
const isHome = computed(() => currentPath.value === homePath.value)
const label = computed(() => (localeKey.value === 'ru' ? 'Главная' : 'Home'))
</script>

<template>
  <span v-if="!isHome" class="site-nav-home-label">{{ label }}</span>
</template>
