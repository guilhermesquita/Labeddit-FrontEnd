import ReactDOM from 'react-dom';
import { theme } from './theme';
import { App } from './App';
import { ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* <RouterProvider/> */}
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);