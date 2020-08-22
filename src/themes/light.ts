import { DefaultTheme } from 'styled-components';
const lightTheme: DefaultTheme = {
  id: 'light',
  palette: {
    primary: 'white',
    secondary: '#e1a87a',
  },
  text: {
    main: '',
    primary: 'rgb(49, 54, 57)',
    secondary: '#f6416c',
  },
  background: {
    profile: 'rgb(24, 44, 109)',
    portfolio: 'rgb(245, 245, 245)',
    about: 'rgb(151, 216, 196)',
    contact: 'rgb(241, 166, 15)',
    footer: 'rgb(49, 54, 57)',
  },
  card: {
    primary: '#f6416c',
    secondary: 'rgb(64, 89, 173)',
  },
};
export default lightTheme;
