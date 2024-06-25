import { Box } from "@mui/material";
import { MainLogo } from "../../components/mainLogo/MainLogo";
import { LoginForm } from "../../components/login-form/loginForm";
import { Footer } from '../../components/footer/Footer';

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
            <Footer content='É novo no LabEddit? Faça o' 
            contentStrong='Cadastro' link="users/register"/>
        </Box>
    );
};
