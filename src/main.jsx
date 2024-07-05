import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { SignIn } from './pages/Sigin';
import theme from './styles/theme.js';
import GlobalStyles from './styles/global.js';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>,
);
