/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-black-500': 'var(--color-black-500)',
        'color-black-500-alpha-50': 'var(--color-black-500-alpha-50)',
        'color-white-500': 'var(--color-white-500)',
        'color-green-400': 'var(--color-green-400)',
        'color-green-400-alpha-50': 'var(--color-green-400-alpha-50)',
        'color-green-500': 'var(--color-green-500)',
        'color-green-500-alpha-15': 'var(--color-green-500-alpha-15)',
        'color-cyan-500': 'var(--color-cyan-500)',
        'bg-first-gradient': 'var(--bg-first-gradient)'
      },
      boxShadow: {
        'box-md': 'var(--box-md)',
        'box-lg': 'var(--box-lg)'
      }
    },
    fontSize: {
      // primary font
      'fp-bigger': 'var(--fp-bigger)',
      'fp-xxlarge': 'var(--fp-xxlarge)',
      'fp-xlarge': 'var(--fp-xlarge)',
      'fp-large': 'var(--fp-large)',
      'fp-base': 'var(--fp-base)',
      'fp-small': 'var(--fp-small)',
      'fp-smaller': 'var(--fp-smaller)',
      // secondary font
      'fs-bigger': 'var(--fs-bigger)',
      'fs-big': 'var(--fs-big)',
      'fs-medium': 'var(--fs-medium)',
      'fs-regular': 'var(--fs-regular)',
      'fs-normal': 'var(--fs-normal)',
      'fs-small': 'var(--fs-small)'
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1216px',
      // => @media (min-width: 1216px) { ... }
      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: []
};
