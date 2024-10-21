/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './packages/**/*.{js,jsx,ts,tsx,vue}',
    './packages/**/**/**/*.{js,jsx,ts,tsx,vue}',
    './packages/**/**/**/**/*.{js,jsx,ts,tsx,vue}',
    './packages/react-typescript-library/.storybook/preview.ts',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A0C4FF',
        secondary: '#B0B0B0',
        info: '#A7D3F5',
        success: '#B8E3B0',
        warning: '#FFD77A',
        danger: '#FF6F61',
      },
    },
  },
  plugins: [],
}

