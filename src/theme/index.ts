import { DefaultTheme } from 'styled-components';
import breakpoints from './breakpoints';

const theme: DefaultTheme = {
  fontFamily: {
    primary: 'FONT',
  },
  fontWeight: {
    primary: {
      light: 300,
      medium: 500,
      bold: 700,
    },
  },
  colors: {
    primary: '#000',
    primarySubtle: '#000',
    primaryAccent: '#000',
    light: '#000',
    black: '#000',
    gray: '#000',
    red: '#000',
    green: '#000',
  },
  breakpoints,
};

export default theme;
