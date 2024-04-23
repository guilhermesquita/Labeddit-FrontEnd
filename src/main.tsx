import React from 'react'
import ReactDOM from 'react-dom/client'
import {theme} from './theme'
import { App } from './App'
import { ThemeProvider } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
