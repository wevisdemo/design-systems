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

## 2. Load fonts

Fonts and coresponded css is hosted on WeVis server. Just include the `typography.css` in the html head.

```html
<link
  rel="stylesheet"
  href="https://design-systems.wevis.info/typography.css"
/>
```

## 3. Import the stylesheets

Make sure to import the following files:

- Typography utility classes stylesheet `@wevisdemo/ui/styles/typography.css`
- Components stylesheet `@wevisdemo/ui/styles/components.css`

with **NuxtJS**, add these 2 files in the `css` array of `nuxt.config.js`

```jsx
//nuxt.config.js
export default {
  ...otherConfig,
  css: [
    '@wevisdemo/ui/styles/typography.css',
    '@wevisdemo/ui/styles/components.css',
  ],
};
```

## 4. Use the components

Components are available for **Vue**, **React**, and **Svelte** which coresponded file (`.vue`, `.js` and `.svelte`) can be import with `Wv` name prefix. For example:

```jsx
import WvButton from '@wevisdemo/ui/components/button.{vue,js,svelte}';

<WvButton>Hello</WvButton>;
```
