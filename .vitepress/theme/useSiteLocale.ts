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
      intro: 'The recurring themes in my work are reusable interface infrastructure, typed tooling and release discipline.',
      items: [
        {
          title: 'Vue Infrastructure',
          text: 'Interface platforms, extension boundaries and remote rendering patterns for products that need UI code to stay modular.',
          tags: ['Vue 3', 'Composition API', 'Rendering']
        },
        {
          title: 'TypeScript Tooling',
          text: 'Developer-facing packages that make shared code easier to author, validate and evolve across projects.',
          tags: ['TypeScript', 'Monorepos', 'DX']
        },
        {
          title: 'Release Systems',
          text: 'Versioning, changelog generation and automation around the maintenance work that keeps libraries predictable.',
          tags: ['Git', 'Release', 'Automation']
        }
      ]
    },
    featuredProjects: {
      title: 'Selected Projects',
      intro: 'A few public repositories that show how I approach reusable libraries, integration boundaries and maintenance tooling.',
      cta: 'See project notes',
      items: [
        {
          name: 'vue-remote',
          href: 'https://github.com/omnicajs/vue-remote',
          summary: 'A scaffolding and integration tool for isolated sandbox-like UI extensions and remote rendering boundaries.',
          note: 'The project sits close to platform work: isolation, delivery contracts and the ergonomics of building extensions safely.',
          tags: ['Remote UI', 'Architecture', 'Vue']
        },
        {
          name: 'modulify/validator',
          href: 'https://github.com/modulify/validator',
          summary: 'A general-purpose validation library shaped around reusable rule systems and application-level data checks.',
          note: 'Its focus is not form decoration, but a small rules model that can be carried through application and integration code.',
          tags: ['Validation', 'Library', 'Data']
        },
        {
          name: 'modulify/morph',
          href: 'https://github.com/modulify/morph',
          summary: 'A utility for reshaping data structures, reflecting interest in transformations, composability and API clarity.',
          note: 'This is the compact utility side of the same library work: clear boundaries around data shape conversion.',
          tags: ['Utilities', 'Transformations', 'OSS']
        },
        {
          name: 'jmask',
          href: 'https://github.com/cmath10/jmask',
          summary: 'A masking library for HTML inputs that reflects practical UI engineering and reusable form behavior.',
          note: 'The package is deliberately close to product detail: input behavior, browser constraints and reusable UX primitives.',
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
      intro: 'В моей работе чаще всего повторяются три темы: интерфейсная инфраструктура, типизированный tooling и дисциплина релизов.',
      items: [
        {
          title: 'Vue Infrastructure',
          text: 'Интерфейсные платформы, границы расширений и remote rendering для продуктов, где UI-код должен оставаться модульным.',
          tags: ['Vue 3', 'Composition API', 'Rendering']
        },
        {
          title: 'TypeScript Tooling',
          text: 'Инструменты для разработчиков, которые помогают писать, проверять и развивать общий код между проектами.',
          tags: ['TypeScript', 'Monorepos', 'DX']
        },
        {
          title: 'Release Systems',
          text: 'Версионирование, changelog и автоматизация вокруг той части сопровождения, от которой зависит предсказуемость библиотек.',
          tags: ['Git', 'Release', 'Automation']
        }
      ]
    },
    featuredProjects: {
      title: 'Избранные проекты',
      intro: 'Несколько публичных репозиториев, через которые видно мой подход к библиотекам, интеграционным границам и maintenance tooling.',
      cta: 'Открыть заметки о проектах',
      items: [
        {
          name: 'vue-remote',
          href: 'https://github.com/omnicajs/vue-remote',
          summary: 'Инструмент для scaffolding и интеграции изолированных UI-расширений с sandbox-подобной моделью и remote rendering boundaries.',
          note: 'Проект находится близко к платформенной работе: изоляция, контракты поставки и удобство безопасной разработки расширений.',
          tags: ['Remote UI', 'Architecture', 'Vue']
        },
        {
          name: 'modulify/validator',
          href: 'https://github.com/modulify/validator',
          summary: 'Библиотека общего назначения для валидации, построенная вокруг переиспользуемых наборов правил и проверок данных на уровне приложения.',
          note: 'Здесь важен не декор форм, а небольшая модель правил, которую можно переносить через прикладной и интеграционный код.',
          tags: ['Validation', 'Library', 'Data']
        },
        {
          name: 'modulify/morph',
          href: 'https://github.com/modulify/morph',
          summary: 'Утилита для преобразования структур данных, хорошо отражающая интерес к трансформациям, композиции и ясности API.',
          note: 'Это компактная utility-часть той же библиотечной линии: ясная граница вокруг преобразования формы данных.',
          tags: ['Utilities', 'Transformations', 'OSS']
        },
        {
          name: 'jmask',
          href: 'https://github.com/cmath10/jmask',
          summary: 'Библиотека масок для HTML input-элементов, которая показывает практичную frontend-инженерию и переиспользуемое поведение форм.',
          note: 'Пакет намеренно близок к продуктовым деталям: поведение input, ограничения браузера и переиспользуемые UX-примитивы.',
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
