---
title: Getting started
layout: ../layouts/MainLayout.astro
---

## 1. Install the package

with **NPM**

```shell
npm i @wevisdemo/ui
```

or with **Yarn**

```shell
yarn add @wevisdemo/ui
```

## 2. Import the stylesheet

Import `@wevisdemo/ui/styles/index.css` as a global according to your framework.

For example, with **NuxtJS**

```js
// nuxt.config.js
{
  css: ['@wevisdemo/ui/styles/index.css'],
}
```

Most framework can be imported to main JavaScript or template file directly

```js
import '@wevisdemo/ui/styles/index.css';
```

## 4. Use the components

Components are available for **Vue2**, **React**, and **Svelte** which separated in package sub-directoy. Recommends to import with `Wv` name prefix to avoid duplicated component name. For example:

```jsx
import WvButton from '@wevisdemo/ui/{react,vue2,svelte}/button';

<WvButton>Hello</WvButton>;
```

### NOTE

#### Vue2

According to [Mitosis bug with Vue props type](https://github.com/BuilderIO/mitosis/issues/847), no declaration files in the package until the bug is solve. Use `@ts-ignore` over import statement in Typescript project.

```ts
/* @ts-ignore */
import WvNavbar from '@wevisdemo/ui/vue2/navbar';
```

#### Nuxt 2

Nuxt 2 don't support ESModule out of the box. Need to add the library into `build.transpile` in `nuxt.config.js`

```js
// nuxt.config.js
build: {
  transpile: ['@wevisdemo/ui/vue2'],
}
```
