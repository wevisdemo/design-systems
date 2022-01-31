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
        title: 'Guide',
        collapsable: false,
        children: [
          { title: 'Introduction', path: '/' },
          { title: 'Getting Started', path: '/guide/getting-started' },
        ],
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
          { title: 'ButtonGroup', path: '/components/button-group' },
          { title: 'Container', path: '/components/container' },
          { title: 'Footer', path: '/components/footer' },
          { title: 'Navbar', path: '/components/navbar' },
          { title: 'NavButton', path: '/components/nav-button' },
          { title: 'NavDropdown', path: '/components/nav-dropdown' },
          { title: 'NavDropdownItem', path: '/components/nav-dropdown-item' },
          {
            title: 'ParagraphGroup',
            path: '/components/paragraph-group',
          },
          { title: 'Sharer', path: '/components/sharer' },
        ],
      },
      {
        title: 'Cookbook',
        collapsable: false,
        children: [
          { title: 'About Page', path: '/cookbook/about-page' },
          { title: 'Navigation Bar', path: '/cookbook/navigation-bar' },
        ],
      },
    ],
  },
};
