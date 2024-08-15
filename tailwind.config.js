/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Overpass: ['Overpass', 'sans-serif'],
      },
      colors: {
        'dark-blue': '#262E38',
        'light-grey': '#969FAD',
        'orange': '#FC7614',
        'pure-white': '#FFFFFF',
        'very-dark-blue': '#131518',
        'custom-start': '#232A34',
        'custom-end': '#181E27',
      },
      lineHeight: {
        'extra-tight': '1.1',
        'tight': '1.25',
        'normal': '1.5',
        'loose': '1.6',
        37: '2.313rem',
        22: '1.375rem',
        24: '1.5rem',
        18: '1.125rem',
      },
      width: {
        327: '327px',
        42: '42px',
        144: '144px'
      },
      minHeight: {
        360: '360px',
        49: '49px',
      },
      height: {
        42: '42px',
        96: '96px',
      },
      spacing: {
        '42': '42px',
      },
      letterSpacing:{
        '1.87': '1.87px'
      },
      fontSize: {
        
      },
    },
  },
  plugins: [],
}

