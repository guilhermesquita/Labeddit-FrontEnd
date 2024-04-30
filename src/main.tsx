import ReactDOM from 'react-dom';
import { theme } from './theme';
import { App } from './App';
import { ThemeProvider } from '@mui/material';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);