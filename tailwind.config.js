/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#0f0e0c',
        primary: {
          DEFAULT: '#caa45e',
          active: '#b08e48',
          hover: '#d9be75',
          disabled: '#5a4c32',
          subtle: '#2d2416',
        },
        surface: {
          sidebar: '#14120f',
          card: '#191612',
          'card-hover': '#221e18',
          'card-active': '#2a241c',
          soft: '#1f1b16',
          overlay: '#161411',
        },
        hairline: {
          DEFAULT: '#2a241b',
          soft: '#1e1a14',
        },
        border: {
          strong: '#3d3322',
          gold: '#caa45e',
          'gold-subtle': '#463b27',
        },
        ink: {
          display: '#f5f2eb',
          primary: '#ede8de',
        },
        gold: {
          DEFAULT: '#caa45e',
          light: '#d9be75',
        },
        body: '#bfb8aa',
        muted: {
          DEFAULT: '#827867',
          soft: '#574f43',
        },
        tag: '#231f18',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cinzel', 'Georgia', 'serif'],
        royal: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
