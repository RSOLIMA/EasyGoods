/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'ui-background':"#D7DFE9",
        'ui-primary':"#485696",
        'ui-secondary':"#8586E7",
        'ui-accent':"#6A5DDF",
        'text': '#040d16',
        'background': '#d8e0e9',
        'primary': '#495797',
        'secondary': '#8485e7',
        'accent': '#6a5ddf',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    colors:{
      'text': '#040d16',
      'background': '#d8e0e9',
      'primary': '#495797',
      'secondary': '#8485e7',
      'accent': '#6a5ddf',
    },
    themes:{
      light:{
        colors: {
          'text': {
            50: '#e9f2fb',
            100: '#d4e5f7',
            200: '#a9ccef',
            300: '#7eb2e7',
            400: '#5399df',
            500: '#287fd7',
            600: '#2066ac',
            700: '#184c81',
            800: '#103356',
            900: '#08192b',
            950: '#040d16',
          },
          'background': {
            50: '#eff2f6',
            100: '#dee5ed',
            200: '#becbda',
            300: '#9db1c8',
            400: '#7c97b6',
            500: '#5c7da3',
            600: '#496483',
            700: '#374b62',
            800: '#253241',
            900: '#121921',
            950: '#090d10',
          },
          'primary': {
            50: '#eeeff7',
            100: '#dde0ee',
            200: '#bac1de',
            300: '#98a2cd',
            400: '#7582bd',
            500: '#5363ac',
            600: '#424f8a',
            700: '#323c67',
            800: '#212845',
            900: '#111422',
            950: '#080a11',
          },
          'secondary': {
            50: '#eaeafb',
            100: '#d4d5f7',
            200: '#aaabee',
            300: '#7f81e6',
            400: '#5557dd',
            500: '#2a2dd5',
            600: '#2224aa',
            700: '#191b80',
            800: '#111255',
            900: '#08092b',
            950: '#040415',
          },
          'accent': {
            50: '#ebeafb',
            100: '#d8d4f7',
            200: '#b1aaee',
            300: '#897fe6',
            400: '#6255dd',
            500: '#3b2ad5',
            600: '#2f22aa',
            700: '#231980',
            800: '#181155',
            900: '#0c082b',
            950: '#060415',
          },
         },
         
      }
    }
     
  })],
};
