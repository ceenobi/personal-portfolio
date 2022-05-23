import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import '@fontsource/overpass'
import '@fontsource/dosis'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import customTheme from './theme/theme'

import './index.css';
import App from './App';
import {AppError} from './errorBoundary'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <Router>
        <AppError>
          <App />
        </AppError>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
)
