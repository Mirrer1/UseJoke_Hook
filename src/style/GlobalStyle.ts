import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};  
  
  html, body {
    min-height: 100%;
    margin: 0;
  }

  body {
    padding: 30px;
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
