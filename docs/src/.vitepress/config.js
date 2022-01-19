module.exports = {
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
        text: 'Introduction',
        link: '/',
      },
      {
        text: 'Components',
        link: '/components/',
        children: [
          { text: 'Navbar', link: '/components/navbar' },
          { text: 'Footer', link: '/components/footer' },
        ],
      },
    ],
  },
};
