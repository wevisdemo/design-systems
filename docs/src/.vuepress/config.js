module.exports = {
  lang: 'en-US',
  base: process.env.VUEPRESS_BASE || '/',
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
          {
            title: 'About Page',
            path: '/components/about/',
            children: [
              { title: 'Container', path: '/components/about/container' },
              {
                title: 'Paragraph Group',
                path: '/components/about/paragraph-group',
              },
            ],
          },
          { title: 'Button', path: '/components/button' },
          { title: 'Footer', path: '/components/footer' },
          {
            title: 'Navigation Group',
            path: '/components/navigation/',
            children: [
              { title: 'Navbar', path: '/components/navigation/navbar' },
              { title: 'NavButton', path: '/components/navigation/nav-button' },
            ],
          },
        ],
      },
    ],
  },
};
