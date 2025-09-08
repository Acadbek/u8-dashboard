import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

import NunitoSansRegular from './assets/fonts/nunito-sans-v18-latin-regular.woff2'
import NunitoSansSemiBold from './assets/fonts/nunito-sans-v18-latin-600.woff2'
import NunitoSansBold from './assets/fonts/nunito-sans-v18-latin-700.woff2'

const myCustomFont = {
  fontFamily: 'Nunito Sans',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('MyCustomFont'),
    local('MyCustomFont-Regular'),
    url(${NunitoSansRegular}) format('woff2')
  `,
};

const myCustomFontBold = {
  fontFamily: 'Nunito Sans Bold',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
    local('MyCustomFont Bold'),
    local('MyCustomFont-Bold'),
    url(${NunitoSansSemiBold}) format('woff2')
  `,
};


const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito Sans',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Nunito Sans'), local('MyCustomFont-Regular'), url(${myCustomFont}) format('woff2');
        }
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('Nunito Sans Bold'), local('MyCustomFont-Bold'), url(${myCustomFontBold}) format('woff2');
        }
      `,
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
