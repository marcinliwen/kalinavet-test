import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding:{
        DEFAULT: '1rem',
        sm: '2rem',
      }
    },
      extend: {
        fontFamily: {
          sans: ['Montserrat', 'sans-serif'],
        },
        colors: {
          green: {
            DEFAULT: '#56FBB1',
          },
          blue: {
            DEFAULT: '#0A3149',
  
            100: '#f0fafe',
            // 500: '#8ee7ff',
            500: '#6be0ff',
          },
          gray: {
            400: '#605C5C',
          },
          ui: {
            light: '#F7F7FA',
            DEFAULT: '#EEF0F5',
            medium: '#D9DFE8',
            dark: '#89959C',
            //red: '#F24C3D',
            red: '#e22a18',
            black: '#242424',
          },
        },
        typography: {
          DEFAULT: {
            css: {
              color: '#333',
            },
          },
        },
        boxShadow: {
          'solid-focus': 'inset 0px 0px 0px 2px #54daff',
        },
      },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
