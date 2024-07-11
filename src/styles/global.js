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
    flex-grow: 1;
    min-height: 100%;
  }

  body{
    color: ${theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  a {
    text-decoration: none;
  }

  button, a {
    outline: none;
    cursor: pointer;
  }

  button, a, input {

    font-size: 16px;
    outline: none;
  }

  button:hover{
    filter: brightness(0.8);
  }

`;
