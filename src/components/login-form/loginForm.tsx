import { Button, FormControl, TextField } from "@mui/material";
import { Fonts } from '../../fonts';

export const LoginForm = () => {
    return (
        <FormControl sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexGrow: 1,
            width: '100%',
            height: '100%',
            px: { xs: 2, md: 0 }
        }}>
            <TextField type='email' multiline={false} variant="outlined"
                size="medium" label='Email'
                placeholder='Email'
                sx={{
                    transition: '0.4s',
                    width: { xs: '100%', sm: '75%', md: '50%', lg: '25%' },
                    m: 1,
                    color: "#323941",
                }}
            />

            <TextField type='password' multiline={false} variant="outlined"
                size="medium" label='Senha'
                placeholder='Senha'
                sx={{
                    transition: '0.4s',
                    width: { xs: '100%', sm: '75%', md: '50%', lg: '25%' },
                    m: 1,
                    color: "#323941",
                }}
            />
            <Button variant="contained" sx={{
                color: 'white',
                width: { xs: '90%', md: '280px', lg:'25%' },
                fontFamily: Fonts ? Fonts.NotoSans : 'sans-serif',
                borderRadius: "50px",
                transition: '0.4s',
            }}>Entrar</Button>
        </FormControl>
    );
}