// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    id: string;
    palette: {
      text: {
        primary: string;
        secondary: string;
        accent: string;
        highlight: string;
      };

      background: {
        header: string;
        profile: string;
        portfolio: string;
        about: string;
        contact: string;
        footer: string;
      };
    };
    toggleTheme?: function;
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  }
}
