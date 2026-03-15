---
title: Проекты
outline: deep
---

# Проекты

Эта страница должна работать как кураторский слой поверх GitHub, где у каждого репозитория появляется контекст, который трудно уместить в обычный README.

## Опубликованные npm-пакеты

### @omnicajs/vue-remote

<ProjectMetaLinks
  href="https://github.com/omnicajs/vue-remote"
  label="omnicajs/vue-remote"
  npm-package="@omnicajs/vue-remote"
/>

Это самый явный публичный пример работы вокруг сторонних UI-расширений, границ изоляции и scaffolding для недоверенного или отдельно разрабатываемого интерфейсного кода. Этот пакет хорошо показывает архитектурную сторону профиля, потому что речь идет не просто об очередной UI-утилите, а о целой модели интеграции.

Что здесь особенно важно:

- remote rendering и границы изоляции как продуктовая задача
- scaffolding для разработки расширений, а не единичный эксперимент
- документация и tooling как часть истории самого пакета

### @modulify/validator

<ProjectMetaLinks
  href="https://github.com/modulify/validator"
  label="modulify/validator"
  npm-package="@modulify/validator"
/>

Этот пакет показывает валидацию как переиспользуемую прикладную задачу, а не как узкий form-helper. Он хорошо поддерживает историю про проектирование библиотек вокруг правил, композиции и ясности API.

Что здесь особенно важно:

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

Что здесь особенно важно:

- transformation pipelines и преобразование структур
- composable utility design
- стремление к обобщенным абстракциям, которые можно переносить между проектами

### @cmath10/jmask

<ProjectMetaLinks
  href="https://github.com/cmath10/jmask"
  label="cmath10/jmask"
  npm-package="@cmath10/jmask"
/>

Это самый явно UI-ориентированный пакет в наборе. Он полезен для демонстрации практичной frontend-инженерии вокруг пользовательского ввода, браузерного поведения и переиспользуемых паттернов работы с формами.

Что здесь особенно важно:

- browser-facing инженерия с понятной продуктовой ценностью
- внимание к UX-деталям в поведении input-элементов
- упаковка практичного frontend-поведения в переиспользуемую единицу

### @modulify/pkg

<ProjectMetaLinks
  href="https://github.com/modulify/pkg"
  label="modulify/pkg"
  npm-package="@modulify/pkg"
/>

Этот пакет показывает интерес к package-oriented tooling и локальным workflow. Он помогает показать, что интерес к библиотекам продолжается и в package maintenance, а не ограничивается только runtime-кодом.

### @modulify/git-toolkit

<ProjectMetaLinks
  href="https://github.com/modulify/git-toolkit"
  label="modulify/git-toolkit"
  npm-package="@modulify/git-toolkit"
/>

Этот пакет хорошо показывает интерес к Git automation и tooling для мейнтейнеров, особенно если читать его рядом с release- и conventional-commit-направлением.

## Публичная ecosystem-work, которая еще не оформлена как основной пакетный акцент

### modulify/conventional

<ProjectMetaLinks
  href="https://github.com/modulify/conventional"
  label="modulify/conventional"
/>

Этот репозиторий поддерживает release-системную сторону профиля. Даже без большого количества текста вокруг него он усиливает тему автоматизации changelog, правил версионирования и повторяемого workflow мейнтейнера.

### modulify/m3-web

<ProjectMetaLinks
  href="https://github.com/modulify/m3-web"
  label="modulify/m3-web"
/>

Это полезный supporting piece для UI-system work внутри более широкой экосистемы modulify. Он добавляет к Projects еще один сигнал, что публичная работа не ограничивается только pure utility libraries.

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

## Что эти проекты должны сообщать

- опыт создания переиспользуемых библиотек, а не только продуктовых фич
- уверенность в проектировании API, документации и долгой поддержке
- интерес к повторяющимся инженерным задачам и практичным абстракциям
- умение балансировать между элегантностью решения и ограничениями реальной разработки

## Хорошая структура описания для каждого проекта

- какую проблему проект решает
- почему вообще захотелось его построить
- какие ограничения были по пути
- какие компромиссы пришлось принять
- что бы ты изменил в нем сегодня
