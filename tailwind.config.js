/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'cairo': ['var(--font-cairo)', 'Cairo', 'sans-serif'],
      },
      colors: {
        primary: {
          green: '#04623E',
          yellow: '#F8B707',
        },
        light: {
          green: '#EAF5F0',
          yellow: '#FFF9E6',
          gray: '#F9FAFB',
        },
        text: {
          dark: '#1A1A1A',
          gray: '#6B7280',
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
}
