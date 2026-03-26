import { computed } from 'vue'
import { useData } from 'vitepress'

const messages = {
  en: {
    homeHero: {
      title: 'Kirill Zaitsev',
      subtitle: 'Software engineer specializing in web applications and library development',
      lead:
        'I build web applications and write both frontend and backend code. I am interested in library design and have extensive experience building libraries. I value practical architecture and comfortable engineering environments that help teams move faster without losing sight of the connection between technical decisions and real business needs.',
      github: 'GitHub profile',
      directionTitle: 'Current direction',
      directionItems: [
        'Designing ecosystems for third-party extensions, their isolation, and the tooling needed to develop and validate them',
        'Designing libraries that solve reusable product and integration problems',
        'Building applications with Vue, React, PHP and modern testing stacks'
      ]
    },
    focusAreas: {
      title: 'Focus Areas',
      intro: 'This first draft is anchored in the themes that already show up across your public repos.',
      items: [
        {
          title: 'Vue Infrastructure',
          text: 'Reusable building blocks, remote rendering, flow-style UIs and integration patterns that fit real products.',
          tags: ['Vue 3', 'Composition API', 'Rendering']
        },
        {
          title: 'TypeScript Tooling',
          text: 'Packages that improve authoring, type-safety and release confidence for maintainers and frontend teams.',
          tags: ['TypeScript', 'Monorepos', 'DX']
        },
        {
          title: 'Release Systems',
          text: 'Conventional commits, changelog automation, version strategy and the boring plumbing that keeps teams moving.',
          tags: ['Git', 'Release', 'Automation']
        }
      ]
    },
    featuredProjects: {
      title: 'Selected Projects',
      intro: 'Starter highlights pulled from your public work and nearby ecosystem repos.',
      cta: 'See project notes',
      note: 'These are good anchors for the public story because they show reusable engineering work rather than one-off product features.',
      items: [
        {
          name: 'vue-remote',
          href: 'https://github.com/omnicajs/vue-remote',
          summary: 'A scaffolding and integration tool for isolated sandbox-like UI extensions and remote rendering boundaries.',
          tags: ['Remote UI', 'Architecture', 'Vue']
        },
        {
          name: 'modulify/validator',
          href: 'https://github.com/modulify/validator',
          summary: 'A general-purpose validation library shaped around reusable rule systems and application-level data checks.',
          tags: ['Validation', 'Library', 'Data']
        },
        {
          name: 'modulify/morph',
          href: 'https://github.com/modulify/morph',
          summary: 'A utility for reshaping data structures, reflecting interest in transformations, composability and API clarity.',
          tags: ['Utilities', 'Transformations', 'OSS']
        },
        {
          name: 'jmask',
          href: 'https://github.com/cmath10/jmask',
          summary: 'A masking library for HTML inputs that reflects practical UI engineering and reusable form behavior.',
          tags: ['Inputs', 'UX', 'OSS']
        }
      ]
    },
    timeline: {
      title: 'Career track',
      intro:
        'A compact timeline of roles that shaped my current focus on frontend systems, testing, platform work and extension tooling.',
      items: [
        {
          title: 'Simla.com Latinoamérica · Frontend Tech Lead',
          company: 'Simla.com Latinoamérica',
          companyHref: 'https://simla.com/',
          role: 'Frontend Tech Lead',
          description:
            'Review interface architecture, participate in frontend implementation, improve UI testing quality, support migration to a new stack, and develop isolated third-party UI extensions together with context layers and component documentation.',
          skills: ['TypeScript', 'Vue', 'Vite', 'Vitest', 'Playwright', 'JavaScript', 'HTML5', 'CSS', 'Node.js', 'Git']
        },
        {
          title: '12Go Asia · Frontend Developer',
          company: '12Go Asia',
          companyHref: 'https://12go.asia/',
          role: 'Frontend Developer',
          description:
            'Worked on interface development and frontend testing within the Travelier group, adding a short but useful product-oriented step before returning to deeper systems work.',
          skills: ['TypeScript', 'Vue', 'Nuxt', 'Docker', 'JavaScript', 'HTML5', 'CSS', 'Node.js', 'Git']
        },
        {
          title: 'Independent work · Software Engineer',
          description:
            'A short independent period focused on frontend development while looking for the next long-term role during a forced professional transition.',
          skills: ['TypeScript', 'Vue', 'Nuxt', 'Docker', 'JavaScript', 'HTML5', 'CSS', 'Node.js', 'Git']
        },
        {
          title: 'RetailCRM · Frontend Tech Lead',
          company: 'RetailCRM',
          companyHref: 'https://www.retailcrm.ru/',
          role: 'Frontend Tech Lead',
          description:
            'Stepped into a lead role during a demanding modernization phase: reviewed frontend architecture, improved testing and monitoring, supported junior developers, and helped move a large codebase toward TypeScript, modular delivery and a newer technical stack.',
          skills: [
            'PHP',
            'HTML5',
            'CSS',
            'JavaScript',
            'Git',
            'Node.js',
            'Vue',
            'TypeScript',
            'PostgreSQL',
            'jQuery',
            'OOP'
          ]
        },
        {
          title: 'RetailCRM · Software Engineer',
          company: 'RetailCRM',
          companyHref: 'https://www.retailcrm.ru/',
          role: 'Software Engineer',
          description:
            'Worked on the company’s commerce product across frontend and backend, supporting the main product, modernizing form and validation infrastructure, and building internal developer tooling around internationalization and code transformation.',
          skills: [
            'PHP',
            'HTML5',
            'CSS',
            'JavaScript',
            'Git',
            'Node.js',
            'Vue',
            'TypeScript',
            'PostgreSQL',
            'jQuery',
            'OOP'
          ]
        },
        {
          title: 'YarShinTorg · Software Engineer',
          company: 'YarShinTorg',
          companyHref: 'https://yst.ru/',
          role: 'Software Engineer',
          description:
            'Worked on the YST Group corporate portal across Vue and Symfony, adding portal functionality, introducing automated tests and Docker-based development environments, and improving code quality standards across a significant part of the codebase.',
          skills: [
            'PHP',
            'HTML5',
            'CSS',
            'JavaScript',
            'Git',
            'Node.js',
            'Vue',
            'SCSS',
            'TypeScript',
            'PostgreSQL',
            'jQuery',
            'OOP'
          ]
        },
        {
          title: 'Bukva "A" · Software Engineer',
          company: 'Bukva "A"',
          role: 'Software Engineer',
          description:
            'Moved into a subsidiary company created through the reorganization of Present, then worked on the company’s main website and internal automation tools, modernizing legacy frontend code, introducing build tooling, expanding adaptive interface support and setting up internal package distribution.',
          skills: [
            'PHP',
            'MySQL',
            'HTML5',
            'CSS',
            'JavaScript',
            'Apache',
            'Git',
            'Node.js',
            'Vue',
            'SCSS',
            'TypeScript',
            'jQuery',
            'OOP'
          ]
        },
        {
          title: 'Present · Software Engineer',
          company: 'Present',
          companyHref: 'https://present-dv.ru/',
          role: 'Software Engineer',
          description:
            'The starting point of my web engineering career: supported the company website, worked with static-grid frontend pages and Yii-based backend code, and built the foundation for later full-stack and frontend systems work.',
          skills: ['PHP', 'MySQL', 'HTML5', 'CSS', 'JavaScript', 'Git', 'jQuery', 'OOP']
        }
      ]
    },
    contact: {
      title: 'Contacts',
      intro: 'Professional contact details are listed below.',
      items: [
        {
          label: 'LinkedIn',
          value: 'kirill-zaitsev-217883233',
          href: 'https://www.linkedin.com/in/kirill-zaitsev-217883233',
          external: true
        },
        {
          label: 'Telegram',
          value: '@cmath10',
          href: 'https://t.me/cmath10',
          external: true
        },
        {
          label: 'Email',
          value: 'zaytsev.cmath10@gmail.com',
          href: 'mailto:zaytsev.cmath10@gmail.com',
          external: false
        }
      ]
    }
  },
  ru: {
    homeHero: {
      title: 'Кирилл Зайцев',
      subtitle: 'Инженер программист, специализирующийся на web-приложениях и разработке библиотек',
      lead:
        'Я разрабатываю web-приложения - пишу как frontend, так и backend код. Интересуюсь проектированием библиотек и имею большой опыт их разработки. Нравится практичная архитектура и удобная инженерная среда, которая помогает командам двигаться быстрее и при этом не терять связь между техническими решениями и реальными задачами бизнеса.',
      github: 'Профиль GitHub',
      directionTitle: 'Текущий фокус',
      directionItems: [
        'Проектирование экосистем для сторонних расширений, их изоляции и инструментов для разработки и проверки качества',
        'Проектирование библиотек, которые решают повторяющиеся продуктовые и интеграционные задачи',
        'Разработка приложений на Vue, React, PHP и современных тестовых стеках'
      ]
    },
    focusAreas: {
      title: 'Основные направления',
      intro: 'Этот первый набросок опирается на темы, которые уже хорошо видны по публичным репозиториям.',
      items: [
        {
          title: 'Vue Infrastructure',
          text: 'Переиспользуемые строительные блоки, remote rendering, flow-style интерфейсы и интеграционные паттерны, которые хорошо ложатся на реальные продукты.',
          tags: ['Vue 3', 'Composition API', 'Rendering']
        },
        {
          title: 'TypeScript Tooling',
          text: 'Пакеты, которые улучшают опыт разработки, типовую надежность и предсказуемость релизов для мейнтейнеров и frontend-команд.',
          tags: ['TypeScript', 'Monorepos', 'DX']
        },
        {
          title: 'Release Systems',
          text: 'Conventional commits, автоматизация changelog, стратегия версионирования и та самая скучная, но важная инженерная обвязка, которая удерживает процесс в порядке.',
          tags: ['Git', 'Release', 'Automation']
        }
      ]
    },
    featuredProjects: {
      title: 'Избранные проекты',
      intro: 'Стартовый набор акцентов, собранный из твоей публичной работы и ближайшей экосистемы репозиториев.',
      cta: 'Открыть заметки о проектах',
      note: 'Это хорошие опорные точки для публичной истории, потому что они показывают именно переиспользуемую инженерную работу, а не разовые продуктовые фичи.',
      items: [
        {
          name: 'vue-remote',
          href: 'https://github.com/omnicajs/vue-remote',
          summary: 'Инструмент для scaffolding и интеграции изолированных UI-расширений с sandbox-подобной моделью и remote rendering boundaries.',
          tags: ['Remote UI', 'Architecture', 'Vue']
        },
        {
          name: 'modulify/validator',
          href: 'https://github.com/modulify/validator',
          summary: 'Библиотека общего назначения для валидации, построенная вокруг переиспользуемых наборов правил и проверок данных на уровне приложения.',
          tags: ['Validation', 'Library', 'Data']
        },
        {
          name: 'modulify/morph',
          href: 'https://github.com/modulify/morph',
          summary: 'Утилита для преобразования структур данных, хорошо отражающая интерес к трансформациям, композиции и ясности API.',
          tags: ['Utilities', 'Transformations', 'OSS']
        },
        {
          name: 'jmask',
          href: 'https://github.com/cmath10/jmask',
          summary: 'Библиотека масок для HTML input-элементов, которая показывает практичную frontend-инженерию и переиспользуемое поведение форм.',
          tags: ['Inputs', 'UX', 'OSS']
        }
      ]
    },
    timeline: {
      title: 'Карьерный трек',
      intro:
        'Короткая шкала ролей, из которых сложился мой текущий фокус на frontend-системах, тестировании, платформенной работе и tooling для расширений.',
      items: [
        {
          title: 'Simla.com Latinoamérica · Frontend Tech Lead',
          company: 'Simla.com Latinoamérica',
          companyHref: 'https://simla.com/',
          role: 'Frontend Tech Lead',
          description:
            'Проектирую интерфейсные решения, участвую в разработке frontend-части, развиваю качество UI-тестов, помогаю миграции на новый стек и занимаюсь изолированными сторонними UI-расширениями вместе с контекстным слоем и документацией компонентов.',
          skills: ['TypeScript', 'Vue', 'Vite', 'Vitest', 'Playwright', 'JavaScript', 'HTML5', 'CSS', 'Node.js', 'Git']
        },
        {
          title: '12Go Asia · Frontend Developer',
          company: '12Go Asia',
          companyHref: 'https://12go.asia/',
          role: 'Frontend Developer',
          description:
            'Занимался разработкой интерфейсов и frontend-тестов внутри группы Travelier. Короткий, но полезный продуктовый этап перед возвращением к более глубоким системным задачам.',
          skills: ['TypeScript', 'Vue', 'Nuxt', 'Docker', 'JavaScript', 'HTML5', 'CSS', 'Node.js', 'Git']
        },
        {
          title: 'Независимая работа · Software Engineer',
          description:
            'Короткий самостоятельный этап, сфокусированный на frontend-разработке, пока я искал следующую долгосрочную роль в период вынужденного профессионального перехода.',
          skills: ['TypeScript', 'Vue', 'Nuxt', 'Docker', 'JavaScript', 'HTML5', 'CSS', 'Node.js', 'Git']
        },
        {
          title: 'RetailCRM · Frontend Tech Lead',
          company: 'RetailCRM',
          companyHref: 'https://www.retailcrm.ru/',
          role: 'Frontend Tech Lead',
          description:
            'Перешел в lead-роль на сложном этапе модернизации: участвовал в review frontend-архитектуры, улучшал тестирование и мониторинг, помогал росту младших разработчиков и сопровождал движение большой кодовой базы в сторону TypeScript, модульной поставки и нового технического стека.',
          skills: [
            'PHP',
            'HTML5',
            'CSS',
            'JavaScript',
            'Git',
            'Node.js',
            'Vue',
            'TypeScript',
            'PostgreSQL',
            'jQuery',
            'OOP'
          ]
        },
        {
          title: 'RetailCRM · Software Engineer',
          company: 'RetailCRM',
          companyHref: 'https://www.retailcrm.ru/',
          role: 'Software Engineer',
          description:
            'Работал над основным продуктом компании на frontend и backend, поддерживал развитие платформы, модернизировал инфраструктуру форм и валидации и создавал внутренние инструменты разработки вокруг интернационализации и преобразования кода.',
          skills: [
            'PHP',
            'HTML5',
            'CSS',
            'JavaScript',
            'Git',
            'Node.js',
            'Vue',
            'TypeScript',
            'PostgreSQL',
            'jQuery',
            'OOP'
          ]
        },
        {
          title: 'ЯрШинТорг · Software Engineer',
          company: 'ЯрШинТорг',
          companyHref: 'https://yst.ru/',
          role: 'Software Engineer',
          description:
            'Работал над корпоративным порталом группы YST на Vue и Symfony, добавлял новую функциональность, внедрял автотесты и Docker-окружение для разработки, а также подтягивал качество кода и инженерные стандарты в заметной части кодовой базы.',
          skills: [
            'PHP',
            'HTML5',
            'CSS',
            'JavaScript',
            'Git',
            'Node.js',
            'Vue',
            'SCSS',
            'TypeScript',
            'PostgreSQL',
            'jQuery',
            'OOP'
          ]
        },
        {
          title: 'Буква "А" · Software Engineer',
          company: 'Буква "А"',
          role: 'Software Engineer',
          description:
            'Перешел в дочернюю компанию, появившуюся в результате реорганизации "Презента", и там работал над основным сайтом и внутренними инструментами автоматизации, модернизировал legacy frontend-код, внедрял сборку интерфейса, расширял адаптивную верстку и настраивал внутреннюю поставку пакетов.',
          skills: [
            'PHP',
            'MySQL',
            'HTML5',
            'CSS',
            'JavaScript',
            'Apache',
            'Git',
            'Node.js',
            'Vue',
            'SCSS',
            'TypeScript',
            'jQuery',
            'OOP'
          ]
        },
        {
          title: 'Компания "Презент" · Software Engineer',
          company: 'Компания "Презент"',
          companyHref: 'https://present-dv.ru/',
          role: 'Software Engineer',
          description:
            'Стартовая точка моей карьеры в web-разработке: поддерживал основной сайт компании, работал со статичной сеткой на frontend и backend-кодом на Yii, закладывая базу для дальнейшего движения в full-stack и frontend-системы.',
          skills: ['PHP', 'MySQL', 'HTML5', 'CSS', 'JavaScript', 'Git', 'jQuery', 'OOP']
        }
      ]
    },
    contact: {
      title: 'Контакты',
      intro: 'Ниже приведены каналы для профессиональной связи.',
      items: [
        {
          label: 'LinkedIn',
          value: 'kirill-zaitsev-217883233',
          href: 'https://www.linkedin.com/in/kirill-zaitsev-217883233',
          external: true
        },
        {
          label: 'Telegram',
          value: '@cmath10',
          href: 'https://t.me/cmath10',
          external: true
        },
        {
          label: 'Email',
          value: 'zaytsev.cmath10@gmail.com',
          href: 'mailto:zaytsev.cmath10@gmail.com',
          external: false
        }
      ]
    }
  }
} as const

export function useSiteLocale() {
  const { lang } = useData()

  const localeKey = computed(() => (lang.value.startsWith('ru') ? 'ru' : 'en'))
  const localePath = (path: string) => (localeKey.value === 'ru' ? `/ru${path}` : path)
  const t = computed(() => messages[localeKey.value])

  return {
    localeKey,
    localePath,
    t
  }
}
