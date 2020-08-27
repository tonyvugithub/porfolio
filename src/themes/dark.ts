import { DefaultTheme } from 'styled-components';

const darkTheme: DefaultTheme = {
  id: 'dark',

  palette: {
    text: {
      primary: '#fff',
      secondary: '#14ffec',
      accent: '#14ffec',
      highlight: '#fff',
    },

    background: {
      header: 'rgba(18,18,18,.7)',
      profile: 'rgb(56, 56, 56)',
      portfolio: '#121212',
      about: 'rgb(56, 56, 56)',
      contact: 'rgb(82, 82, 82)',
      footer: '#121212',
    },
  },

  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

export default darkTheme;
