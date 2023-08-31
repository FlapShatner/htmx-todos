/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
 content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
 theme: {
  colors: {
   transparent: 'transparent',
   current: 'currentColor',
   black: colors.black,
   white: colors.white,
   gray: colors.slate,
   sky: colors.sky,
   red: colors.red,
   border: {
    DEFAULT: colors.sky['200'],
   },
  },
  extend: {
   fontFamily: {
    sans: ['"Cabin Variable"', ...defaultTheme.fontFamily.sans],
   },
  },
 },
 plugins: [],
}
