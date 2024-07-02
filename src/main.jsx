import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Input } from './components/Input';
import theme from './styles/theme.js';
import GlobalStyles from './styles/global.js';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Input placeholder="E-mail" type="email" icon={FiMail} />
    </ThemeProvider>
  </React.StrictMode>,
);
