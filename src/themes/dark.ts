import { DefaultTheme } from 'styled-components';

const darkTheme: DefaultTheme = {
  id: 'dark',

  palette: {
    text: {
      primary: '#fff',
      secondary: '#14ffec',
      accent: '#e1a87a',
      highlight: 'rgb(151, 216, 196)',
    },

    background: {
      header: '#0d0d0d',
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
