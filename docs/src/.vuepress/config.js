module.exports = {
  lang: 'en-US',
  title: 'WeVis Design System',
  description:
    'WeVis design system documentation and cross-framework UI components',
  head: [['link', { rel: 'stylesheet', href: '/typography.css' }]],
  themeConfig: {
    nav: [
      {
        text: 'WeVis',
        link: 'https://wevis.info/',
      },
      {
        text: 'Github',
        link: 'https://github.com/wevisdemo/design-systems',
      },
    ],
    sidebar: [
      {
        title: 'Introduction',
        path: '/',
      },
      {
        title: 'Typography',
        path: '/typography',
      },
      {
        title: 'Components',
        path: '/components/',
        collapsable: false,
        children: [
          { title: 'Navbar', path: '/components/navbar' },
          { title: 'Footer', path: '/components/footer' },
        ],
      },
    ],
  },
};
