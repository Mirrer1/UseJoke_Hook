import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};  
  
  html, body {
    box-sizing: border-box;
    width: 100%;
    height: 100vh;    
    margin: 0;
  } 

  body {    
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);    
    display: flex;
    justify-content: center;
    align-items: center;    
  }
`;

export default GlobalStyles;
