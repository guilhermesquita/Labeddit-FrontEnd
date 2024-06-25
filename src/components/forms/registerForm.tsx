import { Box, FormControl, TextField } from "@mui/material";
import { MainButton } from "../buttons/MainButton";
import { Politic } from "../politic/Politic";
import { Fonts } from "../../fonts";

export const RegisterForm = () => {
    return (
        <FormControl
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                flexGrow: 1,
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
                    }}>

                    <TextField type='email' multiline={false} variant="outlined"
                        size="medium" label='Email'
                        placeholder='Email'
                        sx={{
                            transition: '0.4s',
                            width: { lg: '100%' },
                            m: 1,
                            color: "#323941",
                        }}
                    />

                    <TextField type='password' multiline={false} variant="outlined"
                        size="medium" label='Senha'
                        placeholder='Senha'
                        sx={{
                            transition: '0.4s',
                            width: { lg: '100%' },
                            m: 1,
                            color: "#323941",
                        }}
                    />
                </Box>

                <Box
                    component="article"
                    sx={{
                        width: '25%',
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '10px'
                    }}
                >

                    <TextField type='text' multiline={false} variant="outlined"
                        size="medium" label='Apelido'
                        placeholder='Apelido'
                        sx={{
                            transition: '0.4s',
                            width: { lg: '100%' },
                            m: 1,
                            color: "#323941",
                        }}
                    />

                    <TextField type='password' multiline={false} variant="outlined"
                        size="medium" label='Confirme sua Senha'
                        placeholder='Confirme sua Senha'
                        sx={{
                            transition: '0.4s',
                            width: { lg: '100%' },
                            m: 1,
                            color: "#323941",
                        }}
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
    )
}
