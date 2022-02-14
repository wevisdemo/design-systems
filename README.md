# Wevis's Design Systems

Monorepo for WeVis design system documentation and cross-framework UI components

**[Documentation](https://wevisdemo.github.io/design-systems/)**

## Project structure

Monorepo is managed by [Turborepo](https://turborepo.org/)

- `/docs`: Documentation site with [Vuepress](https://vuepress.vuejs.org/)
- `/packages`
  - `/typography`: Fonts and CSS with font-family definition
  - `/ui`: Cross-library components with [Mitosis](https://mitosis.builder.io/) (build to Vue, Svelte and React) and CSS stylesheets for components and typography system with [TailwindCSS](https://tailwindcss.com/)

## Commands

Run development server, enable re-compile and hot-reload on changes

```sh
npm run dev
```

Build packages and documentation site

```sh
npm run build
```
