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
//nuxt.config.js
export default {
  ...otherConfig,
  css: [
    '@wevisdemo/ui/styles/index.css',
  ],
};
```

Most framwork can be imported to main JavaScript or template file directly

```js
import '@wevisdemo/ui/styles/index.css';
```

## 4. Use the components

Components are available for **Vue2**, **React**, and **Svelte** which separated in package sub-directoy. Recommends to import with `Wv` name prefix to avoid duplicated component name. For example:

```jsx
import WvButton from '@wevisdemo/ui/{react,vue2,svelte}/button';

<WvButton>Hello</WvButton>;
```
