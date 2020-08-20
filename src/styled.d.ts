// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    id: string;
    palette: {
      primary: string;
      secondary: string;
    };
    text: {
      main: string;
      primary: string;
      secondary: string;
      warning?: string;
    };
    background: {
      profile: string;
      portfolio: string;
      about: string;
      contact: string;
      footer: string;
    };
    card: {
      primary: string;
      secondary: string;
    };
    toggleTheme?: function;
  }
}
