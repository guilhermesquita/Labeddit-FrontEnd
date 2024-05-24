import { Box, FormControl } from "@mui/material";
import { MainLogo } from "../../components/mainLogo/MainLogo";
import { InputText, MainButton } from "../../components";
import { Fonts } from "../../fonts";
import { Politic } from "../../components/politic/Politic";

export const Register = () => {
    return (
        <Box 
            component="div" 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
            }}
        >
            <MainLogo margintop="20px" />

            <FormControl 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    gap: '50px',
                    alignItems: 'center',
                    px: { xs: 2, md: 0 },
                }}
            >
                <Box 
                    component="article" 
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        width: '100%',
                        gap: '50px',
                    }}
                >
                    <Box 
                        component="article" 
                        sx={{
                            width: '25%',
                            display: "flex",
                            gap: '10px',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <InputText 
                            content="Email" 
                            type="email" 
                            color="#323941"
                            width={{ lg: '100%' }} 
                            multiline={false} 
                            variant="outlined" 
                        />

                        <InputText 
                            content="Apelido" 
                            type="text" 
                            color="#323941"
                            width={{ lg: '100%' }} 
                            multiline={false} 
                            variant="outlined" 
                        />
                    </Box>

                    <Box 
                        component="article" 
                        sx={{
                            width: '25%',
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <InputText 
                            content="Senha" 
                            type="password" 
                            color="#323941"
                            width={{ lg: '100%' }} 
                            multiline={false} 
                            variant="outlined" 
                        />
                    </Box>
                </Box>

                <Politic />

                <MainButton 
                    content="Continuar" 
                    font={Fonts ? Fonts.NotoSans : 'sans-serif'}
                    radius="50px" 
                    width={{ xs: '90%', md: '280px', lg: '25%' }} 
                />
            </FormControl>

            <a 
                href="#" 
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20px',
                    fontFamily: Fonts ? Fonts.NotoSans : 'sans-serif',
                    color: '#373737',
                    fontSize: '15px',
                    textDecoration: 'none',
                    marginBottom: '30px',
                }}
            >
                Já tem uma conta? Faça o seu LOGIN
            </a>
        </Box>
    );
}
