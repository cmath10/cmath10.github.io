import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vitepress'

function resolveBase() {
  const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]

  if (!repository || repository.endsWith('.github.io')) {
    return '/'
  }

  return `/${repository}/`
}

export default defineConfig({
  title: 'Kirill Zaitsev',
  description: 'Personal website about Vue, TypeScript, tooling and library design.',
  srcDir: 'src',
  base: resolveBase(),
  cleanUrls: true,
  lastUpdated: true,
  lang: 'en-US',
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'Kirill Zaitsev',
      description: 'Personal website about Vue, TypeScript, tooling and library design.',
      themeConfig: {
        outlineTitle: 'On this page',
        nav: [
          { text: 'About', link: '/about' },
          { text: 'Philosophy', link: '/philosophy' },
          { text: 'Glossary', link: '/glossary' },
          { text: 'Projects', link: '/projects' },
          { text: 'Notes', link: '/notes' }
        ]
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      link: '/ru/',
      title: 'Кирилл Зайцев',
      description: 'Личный сайт о Vue, TypeScript, tooling и проектировании библиотек.',
      themeConfig: {
        outlineTitle: 'На этой странице',
        nav: [
          { text: 'Обо мне', link: '/ru/about' },
          { text: 'Подход', link: '/ru/philosophy' },
          { text: 'Глоссарий', link: '/ru/glossary' },
          { text: 'Проекты', link: '/ru/projects' },
          { text: 'Заметки', link: '/ru/notes' }
        ]
      }
    }
  },
  vite: {
    server: {
      allowedHosts: ['cmath10.local', 'cmath10.test']
    },
    plugins: [
      Icons({
        compiler: 'vue3'
      })
    ]
  },
  themeConfig: {
    logo: '/navbar-logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cmath10' }
    ]
  }
})
