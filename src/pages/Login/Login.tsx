import { InputText, MainButton } from "../../components";
import Logo from '../../assets/logo/logo.png';
import { Fonts } from '../../fonts';
import { Box, FormControl } from "@mui/material";

export const Login = () => {
    return (
        <Box component='div' sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            width: '100%',
        }}>
            <Box component='section' sx={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                mt: { xs: '50px', md: '100px' },
                flexGrow: 0,
                fontFamily: Fonts ? Fonts.NotoSans : 'sans-serif',
                color: '#373737',
                fontSize: { xs: '16px', md: '20px' }
            }}>
                <img src={Logo} alt="LabEddit Logo" style={{ height: '5%' }} />
                <h1 style={{cursor: "pointer"}}>LabEddit</h1>
            </Box>

            <FormControl sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexGrow: 1,
                width: '100%',
                height: '100%',
                px: { xs: 2, md: 0 }
            }}>
                <InputText content="Email" type="email" color="#323941"
                    width={{ xs: '100%', sm: '75%', md: '50%', lg: '25%' }} multiline={false} variant="outlined" />
                <InputText content="Senha" type="password" color="#323941"
                    width={{ xs: '100%', sm: '75%', md: '50%', lg: '25%' }} multiline={false} variant="outlined" />
                <MainButton content="Continuar" font={Fonts ? Fonts.NotoSans : 'sans-serif'}
                    radius="50px" width={{ xs: '90%', md: '280px', lg:'25%' }} />
            </FormControl>

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
                    color: 'black',
                    '&:hover': {
                        textDecoration: 'underline'
                    }
                }} href="#">É novo no LabEddit? Faça o <strong>Cadastro</strong></Box>
            </Box>
        </Box>
    );
};
