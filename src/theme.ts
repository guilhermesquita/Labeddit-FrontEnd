import { blueGrey, green, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: "#FE7E02"
        },
        secondary: {
            main: "#fffff"
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    background: 'linear-gradient(to right, #FF6489, #F9B24E)', // Gradiente de ouro para laranja
                    '&:hover': {
                        background: 'linear-gradient(to right, #F9B24E, #FF6489)', // Inverta as cores no hover
                    },
                    textTransform: 'none'
                },
            },
        },
    }
});