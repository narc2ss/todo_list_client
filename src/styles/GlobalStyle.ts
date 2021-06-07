import { createGlobalStyle } from 'styled-components';
import { Palette } from './palette';

const GlobalStyle = createGlobalStyle`
  body {
    min-width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    color: ${Palette.primaryTextColor};
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  * {
    box-sizing: inherit;
    outline: none;
    list-style: none;
    text-decoration: none;
  }

  input, button, textarea {
    font-family: inherit;
  }
`;

export default GlobalStyle;
