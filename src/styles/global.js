import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 100%;
  }

  body{
    color: ${theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    -webkit-font-smoothing: antialiased;

    display: flex;
    flex-direction: column;
    flex: 1;
  }

  a {
    text-decoration: none;
  }

  button, a {
    outline: none;
    cursor: pointer;
  }

  button, a, input {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    outline: none;
  }

  button:hover{
    filter: brightness(0.8);
  }

`;
