/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans Thai', ...defaultTheme.fontFamily.sans],
      serif: ['Kondolar Thai', ...defaultTheme.fontFamily.serif],
      mono: [
        'Jetbrains Mono',
        ...defaultTheme.fontFamily.mono,
        'IBM Plex Sans Thai',
      ],
      kondolar: ['Kondolar Thai', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      gridTemplateColumns: {
        content: '1fr 4fr 1fr',
      },
      colors: {
        ultramarine: '#3904E9'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
