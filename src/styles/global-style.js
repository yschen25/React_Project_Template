import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
 ${reset}
  * {
    box-sizing: border-box;
  }
  img {
    display: block;
  }
  :focus {
    outline: 0;
  }
  // for mozilla
  ::-moz-focus-inner {
    border: 0 transparent;
    outline : 0;
  }
  html {
    padding-top: env(safe-area-inset-top);
    padding-right: env(safe-area-inset-right);
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
  }
  html, body, input {
    height: auto;
    font-family: 'Noto Sans TC', sans-serif;
    font-display: optional;
    font-size: 16px;
    color: #1d1d1f;
    background-color: #fff;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }
  #app {
    display: flex;
    height: 100%;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: #000
  }
`;

export default GlobalStyle;
