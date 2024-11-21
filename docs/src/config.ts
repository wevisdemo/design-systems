import { readdirSync } from 'fs';

export const SITE = {
  title: 'WeVis Design System',
  description:
    'WeVis design system documentation and cross-framework UI components',
  defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
  image: {
    src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
    alt: 'WeVis design system documentation and cross-framework UI components',
  },
  twitter: 'wevisdemo',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: 'ltr' | 'rtl';
  ogLocale?: string;
  lang?: string;
};

export type SidebarPage = { text: string; link: string };
export type SidebarGroup = { header: string; pages: SidebarPage[] };
export type Sidebar = (SidebarPage | SidebarGroup)[];

const convertSnakeCaseToSentence = (str: string) =>
  str
    .split('-')
    .map((s) => `${s.charAt(0).toUpperCase()}${s.substring(1)}`)
    .join(' ');

const getSidebarItemFromDir = (dir: string) =>
  readdirSync(`./src/pages/${dir}`).map((file) => {
    const name = file.split('.')[0];

    return {
      text: convertSnakeCaseToSentence(name),
      link: `${dir}/${name}`,
    };
  });

export const SIDEBAR: Sidebar = [
  {
    header: 'Basics',
    pages: [
      { text: 'Getting Started', link: '' },
      { text: 'Typography', link: 'typography' },
    ],
  },
  { header: 'Components', pages: getSidebarItemFromDir('components') },
  { header: 'Cookbook', pages: getSidebarItemFromDir('cookbook') },
];
