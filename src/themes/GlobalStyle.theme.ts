import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  font-size: 62.5%;

  @media only screen and (min-width: ${(p) =>
    p.theme.breakpoints.xs + 'px'}) and (max-width: ${(p) =>
  p.theme.breakpoints.sm - 1 + 'px'}) {
    font-size: 75%; /* 16px => 12px */
  }
  @media only screen and (min-width: ${(p) =>
    p.theme.breakpoints.sm + 'px'}) and (max-width: ${(p) =>
  p.theme.breakpoints.md - 1 + 'px'}){
    font-size: 81.25%; /* 16px => 13px */
  }
  @media only screen and (min-width: ${(p) =>
    p.theme.breakpoints.md + 'px'}) and (max-width: ${(p) =>
  p.theme.breakpoints.lg - 1 + 'px'}){
    font-size: 87.5%; /* 16px => 14px */
  }
  @media only screen and (min-width: ${(p) =>
    p.theme.breakpoints.lg + 'px'}) and (max-width: ${(p) =>
  p.theme.breakpoints.xl - 1 + 'px'}){
    font-size: 93.75%; /* 16px => 15px */
  }
  @media only screen and (min-width: ${(p) => p.theme.breakpoints.xl + 'px'}) {
    font-size: 100%; /* 16px => 16px */
  }
}

html, body {
    min-height: 100% !important;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    color: ${(p) => p.theme.palette.text.primary};
  }

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Montserrat', sans-serif;
}

p {    
  line-height: 1.6;
}
  /* //! theme must end with 'mode' for ease of removing */
  /* .dark-mode {
    --accent-color: #43b7ff;
    --acent-color-rgb: 84, 150, 255;
    --primary-color:   #000;
    --primary-color-rgb: 0, 0, 0;
    --primary-color-light: #1c1c1c;
    --primary-color-light-rgb: 28, 28, 28;
    --secondary-color: #1c1c1c;
    --secondary-color-rgb: 28, 28, 28;
    --text-color: #fff;
    --text-color-rgb: 255, 255, 255;
    --text-color-light: #5a6072;
    --text-color-light-rgb: 90, 96, 114;
  } */

*, *::before, *::after {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  font-family: inherit;
}

`;
