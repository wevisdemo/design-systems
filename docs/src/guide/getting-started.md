# Getting Started

## 1. Install the package

with **NPM**

```shell
npm i @wevisdemo/ui
```

or with **Yarn**

```shell
yarn add @wevisdemo/ui
```

## 2. Setup fonts

- Download fonts from [Typography package](https://github.com/wevisdemo/design-systems/tree/main/packages/typography/src)
- Put downloaded files in `static/fonts` or `public/fonts` folder, depends in the framework. Make sure `/fonts/typography.css` is static served.
- Include `typography.css` in html head

```html
<link rel="stylesheet" href="/fonts/typography.css" />
```

## 3. Import the stylesheets

Make sure to import the following files:

- Typography Stylesheets `@wevisdemo/ui/styles/typography.css`
- Component Stylesheet `@wevisdemo/ui/styles/components.css`

with **NuxtJS**, added these 2 files in the `css` array of `nuxt.config.js`

```js
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

Components are available for **Vue**, **React**, and **Svelte** which coresponded file (`.vue`, `.jsx` and `.svelte`) can be import with `Wv` name prefix. For example:

```jsx
import WvButton from '@wevisdemo/ui/components/button.{vue,jsx,svelte}';

<WvButton>Hello</WvButton>;
```
