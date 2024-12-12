/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundColor: {
        default: '#FFF9F5',
        section: '#FFFFFF',
        other: '#D9D9D9'
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          high: '#1B0C40',
          normal: '#27115B',
          low: '#D4C3FF'
        },
        secondary: {
          high: '#F85956',
          normal: '#F85956',
          low: '#FFC5C4'
        },
        tersier: {
          high: '#E7B002',
          normal: '#F8CD46',
          low: '#FFEEB7'
        },
        default: '#222222',
        body: '#777777',
        line: '#EEEEEE'
      },
      fontSize: {
        big: '1.125rem',
        normal: '1rem',
        small: '0.75rem'
      }
    }
  },
  plugins: []
};
