import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  id: 'light',

  palette: {
    text: {
      primary: '#151515',
      secondary: '#fff',
      accent: '#e1a87a',
      highlight: '#f6416c',
    },

    background: {
      header: 'rgba(255,255,255,.7)',
      profile: '#f0f0f0',
      portfolio: '#0d0d0d',
      about: '#f0f0f0',
      contact: '#fff',
      footer: '#0d0d0d',
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
export default lightTheme;
