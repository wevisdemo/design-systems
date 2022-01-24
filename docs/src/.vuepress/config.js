module.exports = {
  lang: 'en-US',
  title: 'WeVis Design System',
  description:
    'WeVis design system documentation and cross-framework UI components',
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
