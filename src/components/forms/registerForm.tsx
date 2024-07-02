import { Box, CircularProgress, FormControl, TextField } from "@mui/material";
import { MainButton } from "../buttons/MainButton";
import { Politic } from "../politic/Politic";
import { Fonts } from "../../fonts";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useTokenManager } from "../../hooks/tokenManager";
import { useRegister } from "../../hooks/registerUser";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {

    const { register, handleSubmit, formState } = useForm();
    const { isSubmitting } = formState;

    const navigate = useNavigate()

    const [authData] = useRegister()
    const { getPayload } = useTokenManager()

    const onSubmit = async (data: any) => {

        if(data.password !== data.confirmPassword){
            return toast.error('As Senhas não conferem!')
        }

        const res = await authData(data.email, data.password, data.name)
        if (res.status === 400) {
            return toast.error('Email já cadastrado')
        }
        await getPayload(res.token)

        navigate('/')
    }

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
                        {...register("email", {required: true})}
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
                        {...register("password", {required: true})}
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
                        {...register("name", {required: true})}
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
                        {...register("confirmPassword", {required: true})}
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
                onClick={() => handleSubmit(onSubmit)()}
                content={isSubmitting ? <CircularProgress color="secondary"/> : 'Continuar'}
                font={Fonts ? Fonts.NotoSans : 'sans-serif'}
                radius="50px"
                width={{ xs: '90%', md: '280px', lg: '25%' }}
            />
            <ToastContainer />
        </FormControl>
    )
}
