---
title: Проекты
outline: deep
---

# Проекты

Эта страница добавляет контекст к публичным репозиториям: зачем нужен каждый проект, где он находится в общей картине и какие инженерные задачи показывает за пределами README.

## Опубликованные npm-пакеты

### @omnicajs/vue-remote

<ProjectMetaLinks
  href="https://github.com/omnicajs/vue-remote"
  label="omnicajs/vue-remote"
  npm-package="@omnicajs/vue-remote"
/>

Это самый явный публичный пример работы вокруг сторонних UI-расширений, границ изоляции и scaffolding для недоверенного или отдельно разрабатываемого интерфейсного кода. Это не просто очередная UI-утилита, а модель интеграции для независимо поставляемых интерфейсных модулей.

Ключевые темы:

- remote rendering и границы изоляции как продуктовая задача
- scaffolding для разработки расширений, а не единичный эксперимент
- документация и tooling как часть ценности самого пакета

### @modulify/validator

<ProjectMetaLinks
  href="https://github.com/modulify/validator"
  label="modulify/validator"
  npm-package="@modulify/validator"
/>

Этот пакет рассматривает валидацию как переиспользуемую прикладную задачу, а не как узкий form-helper. Он построен вокруг правил, композиции и ясности API.

Ключевые темы:

- переиспользуемые validation rules и проверки данных на уровне приложения
- library design с акцентом на поддерживаемость и расширяемость
- практическая польза без сильной привязки к одному фреймворку

### @modulify/morph

<ProjectMetaLinks
  href="https://github.com/modulify/morph"
  label="modulify/morph"
  npm-package="@modulify/morph"
/>

Этот проект хорошо подходит для разговора о преобразовании и reshaping структур данных. Это компактный и понятный пример utility-дизайна с четкой границей абстракции.

Ключевые темы:

- transformation pipelines и преобразование структур
- composable utility design
- стремление к обобщенным абстракциям, которые можно переносить между проектами

### @cmath10/jmask

<ProjectMetaLinks
  href="https://github.com/cmath10/jmask"
  label="cmath10/jmask"
  npm-package="@cmath10/jmask"
/>

Этот пакет посвящен пользовательскому вводу, браузерному поведению и переиспользуемым паттернам работы с формами.

Ключевые темы:

- browser-facing инженерия с понятной продуктовой ценностью
- внимание к UX-деталям в поведении input-элементов
- упаковка практичного frontend-поведения в переиспользуемую единицу

### @modulify/pkg

<ProjectMetaLinks
  href="https://github.com/modulify/pkg"
  label="modulify/pkg"
  npm-package="@modulify/pkg"
/>

Этот пакет посвящен package-oriented tooling и локальным workflow. Он продолжает библиотечную линию в сторону package maintenance и development ergonomics, а не только runtime-кода.

### @modulify/git-toolkit

<ProjectMetaLinks
  href="https://github.com/modulify/git-toolkit"
  label="modulify/git-toolkit"
  npm-package="@modulify/git-toolkit"
/>

Этот пакет посвящен Git automation и tooling для мейнтейнеров, особенно рядом с release- и conventional-commit-направлением.

### modulify/conventional

<ProjectMetaLinks
  href="https://github.com/modulify/conventional"
  label="modulify/conventional"
/>

Эта монорепа — набор release-system инструментов вокруг Conventional Commits. Она объединяет несколько более мелких пакетов для анализа git-истории, рекомендации версии, генерации changelog и оркестрации релиза.

Опубликованные пакеты в этой монорепе:

#### @modulify/conventional-git

<ProjectMetaLinks
  href="https://github.com/modulify/conventional"
  label="@modulify/conventional-git"
  npm-package="@modulify/conventional-git"
/>

Тонкая обертка над git с разбором conventional commits и вспомогательными утилитами для semantic tags.

#### @modulify/conventional-bump

<ProjectMetaLinks
  href="https://github.com/modulify/conventional"
  label="@modulify/conventional-bump"
  npm-package="@modulify/conventional-bump"
/>

Пакет для рекомендации следующей semantic version на основе истории git.

#### @modulify/conventional-changelog

<ProjectMetaLinks
  href="https://github.com/modulify/conventional"
  label="@modulify/conventional-changelog"
  npm-package="@modulify/conventional-changelog"
/>

Пакет для генерации changelog по git-истории и настраиваемым шаблонам.

#### @modulify/conventional-release

<ProjectMetaLinks
  href="https://github.com/modulify/conventional"
  label="@modulify/conventional-release"
  npm-package="@modulify/conventional-release"
/>

Более высокоуровневый пакет оркестрации релиза, который связывает versioning, обновление changelog и release-коммиты в единый поток.

### modulify/m3-web

<ProjectMetaLinks
  href="https://github.com/modulify/m3-web"
  label="modulify/m3-web"
/>

Библиотека компонентов Material Design 3 для React и Vue с общими стилями, дизайн-токенами и утилитами. Первые релизы всех трех пакетов уже доступны на npm.

В проекте я работаю над согласованностью API и поведения компонентов в разных фреймворках, опираясь на общую UI-основу. Это направление компонентных библиотек внутри modulify, дополняющее утилиты и инструменты разработки.

Опубликованные пакеты в этой монорепе:

#### @modulify/m3-foundation

<ProjectMetaLinks
  href="https://github.com/modulify/m3-web/tree/main/m3-foundation"
  label="@modulify/m3-foundation"
  npm-package="@modulify/m3-foundation"
/>

Общие стили Material Design 3, дизайн-токены и базовые утилиты для реализаций на React и Vue.

#### @modulify/m3-react

<ProjectMetaLinks
  href="https://github.com/modulify/m3-web/tree/main/m3-react"
  label="@modulify/m3-react"
  npm-package="@modulify/m3-react"
/>

Компоненты Material Design 3 для React, построенные на общей основе.

#### @modulify/m3-vue

<ProjectMetaLinks
  href="https://github.com/modulify/m3-web/tree/main/m3-vue"
  label="@modulify/m3-vue"
  npm-package="@modulify/m3-vue"
/>

Компоненты Material Design 3 для Vue, использующие ту же основу, что и реализация на React.

## Контекст организаций

### <img src="/modulify-logo.svg" alt="Логотип modulify" class="project-org-heading-icon" /> modulify

<ProjectMetaLinks
  href="https://github.com/modulify"
  label="github.com/modulify"
/>

modulify — это мой собственный зонтичный проект. Я развиваю его в основном сам, иногда с небольшой помощью коллег в нерабочее время, если им интересно поучаствовать в каком-то из направлений. Под этим именем я собираю библиотеки самого разного назначения: general-purpose пакеты, tooling, UI-системы вроде `m3-web`, а со временем и backend-направления. Текущий JavaScript- и TypeScript-слой для меня только первая оформленная часть этой более широкой идеи. Логотип для него нарисовала моя сестра — 2D-художница, работающая под именем `JackHook`.

### omnicajs

<ProjectMetaLinks
  href="https://github.com/omnicajs"
  label="github.com/omnicajs"
/>

omnicajs связан с моим текущим местом работы, но не завязан на один конкретный CRM-продукт. Это место, куда мы выносим библиотеки и tooling для разработки web-интерфейсов, когда они действительно кросспродуктовые и должны оставаться пригодными не только внутри одного приложения. Поэтому именно там логично держать переиспользуемую extension infrastructure, примитивы UI-композиции и инструменты разработки, которые хочется применять где угодно, где они окажутся полезны.
