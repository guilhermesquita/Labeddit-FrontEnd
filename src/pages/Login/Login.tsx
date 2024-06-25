import { Fonts } from '../../fonts';
import { Box } from "@mui/material";
import { MainLogo } from "../../components/mainLogo/MainLogo";
import { LoginForm } from "../../components/login-form/loginForm";

export const Login = () => {
    return (
        <Box component='div' sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            width: '100%',
        }}>
            <MainLogo margintop="100px" />
            <LoginForm />
            <Box component='footer' sx={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                padding: '20px 0',
                backgroundColor: '#f9f9f9',
                fontFamily: Fonts ? Fonts.IbmPlexSans : 'sans-serif',
                fontSize: { xs: '14px', md: '16px' },
                color: '#000',
                borderTop: '1px solid #ddd'
            }}>
                <Box component='a' sx={{
                    textDecoration: 'none',
                    fontFamily: Fonts ? Fonts.NotoSans : 'sans-serif',
                    color: 'black',
                    '&:hover': {
                        textDecoration: 'underline'
                    }
                }} href='users/register'>É novo no LabEddit? Faça o <strong>Cadastro</strong></Box>
            </Box>
        </Box>
    );
};
