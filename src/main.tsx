import ReactDOM from 'react-dom';
import { theme } from './theme';
import { App } from './App';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, RouterProvider } from 'react-router-dom';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);