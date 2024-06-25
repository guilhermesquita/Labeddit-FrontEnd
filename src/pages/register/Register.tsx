import { Box } from "@mui/material";
import { MainLogo } from "../../components/mainLogo/MainLogo";
import { Footer } from "../../components/footer/Footer";
import { RegisterForm } from "../../components/forms/registerForm";

export const Register = () => {
    return (
        <Box 
            component="div" sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                width: '100%',
            }}
        >
            <MainLogo margintop="20px" />
            <RegisterForm/>
            <Footer content='Já tem uma conta? Faça o seu' 
            contentStrong='Login' link="/"/>
        </Box>
    );
}
