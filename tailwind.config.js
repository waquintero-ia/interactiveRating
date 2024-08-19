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
        35: '2.188rem',
      },
      width: {
        327: '20.4375rem',
        42: '42px',
        144: '144px',
        168: '168px',
        412: '412px',
      },
      minHeight: {
        360: '360px',
        49: '49px',
        416: '416px',
      },
      height: {
        42: '42px',
        96: '96px',
        360: '22.5rem',
        416: '26rem',
      },
      spacing: {
        '42': '42px',
      },
      letterSpacing:{
        '1.87': '1.87px'
      },
      fontSize: {
        28: '1.75rem',
        15: '0.938rem',
      },
      margin: {
        46: '46px',
      },
    },
  },
  plugins: [],
}

