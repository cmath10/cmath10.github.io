<script setup lang="ts">
import { computed } from 'vue'
import IconGithub from '~icons/simple-icons/github'

const props = defineProps<{
  href: string
  label: string
  npmPackage?: string
}>()

const npmHref = computed(() =>
  props.npmPackage ? `https://www.npmjs.com/package/${props.npmPackage}` : undefined
)

const npmBadgeSrc = computed(() =>
  props.npmPackage
    ? `https://img.shields.io/npm/v/${encodeURIComponent(props.npmPackage)}?label=npm&color=475569`
    : undefined
)
</script>

<template>
  <div class="project-meta-links">
    <a :href="href" class="project-meta-link" target="_blank" rel="noreferrer">
      <IconGithub class="project-meta-link-icon" />
      <span>{{ label }}</span>
    </a>

    <a
      v-if="npmHref && npmBadgeSrc"
      :href="npmHref"
      class="project-meta-badge-link"
      target="_blank"
      rel="noreferrer"
    >
      <img :src="npmBadgeSrc" :alt="`${npmPackage} npm version`" class="project-meta-badge" />
    </a>
  </div>
</template>
