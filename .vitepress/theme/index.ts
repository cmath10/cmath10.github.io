import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import PrimeVue from 'primevue/config'
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'
import 'primeicons/primeicons.css'
import './theme.css'
import { cMathPreset } from './prime-preset'
import ContactStrip from './components/ContactStrip.vue'
import FeaturedProjects from './components/FeaturedProjects.vue'
import FocusAreas from './components/FocusAreas.vue'
import HomeHero from './components/HomeHero.vue'
import NavHomeLabel from './components/NavHomeLabel.vue'
import ProjectMetaLinks from './components/ProjectMetaLinks.vue'
import TimelineBlock from './components/TimelineBlock.vue'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'nav-bar-title-after': () => h(NavHomeLabel)
    }),
  enhanceApp({ app }) {
    app.use(PrimeVue, {
      theme: {
        preset: cMathPreset,
        options: {
          prefix: 'p',
          darkModeSelector: '.dark',
          cssLayer: false
        }
      }
    })

    app.component('PCard', Card)
    app.component('PDivider', Divider)
    app.component('PTag', Tag)
    app.component('ContactStrip', ContactStrip)
    app.component('FeaturedProjects', FeaturedProjects)
    app.component('FocusAreas', FocusAreas)
    app.component('HomeHero', HomeHero)
    app.component('ProjectMetaLinks', ProjectMetaLinks)
    app.component('TimelineBlock', TimelineBlock)
  }
} satisfies Theme
