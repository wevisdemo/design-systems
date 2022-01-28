module.exports = {
  lang: 'en-US',
  base: process.env.VUEPRESS_BASE || '/',
  title: 'WeVis Design System',
  description:
    'WeVis design system documentation and cross-framework UI components',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'stylesheet', href: '/fonts/typography.css' }],
  ],
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
        collapsable: false,
        children: [
          { title: 'Button', path: '/components/button' },
          { title: 'Button Group', path: '/components/button-group' },
          { title: 'Container', path: '/components/container' },
          { title: 'Footer', path: '/components/footer' },
          { title: 'Navbar', path: '/components/navbar' },
          { title: 'Nav Button', path: '/components/nav-button' },
          {
            title: 'Paragraph Group',
            path: '/components/paragraph-group',
          },
        ],
      },
      {
        title: 'Cookbook',
        collapsable: false,
        children: [
          { title: 'Navigation Bar', path: '/cookbook/navigation-bar' },
          { title: 'About Page', path: '/cookbook/about-page' },
        ],
      },
    ],
  },
};
