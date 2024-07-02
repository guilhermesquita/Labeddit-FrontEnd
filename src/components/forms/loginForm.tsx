import { Button, CircularProgress, FormControl, TextField } from "@mui/material";
import { Fonts } from '../../fonts';
import { useForm } from 'react-hook-form'
import { useLogin } from "../../hooks/loginUser";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useTokenManager } from "../../hooks/tokenManager";

export const LoginForm = () => {

    const {register, handleSubmit, formState} = useForm();
    const { isSubmitting } = formState;

    const [authData] = useLogin()
    const {getPayload, isTokenValid} = useTokenManager()

    const onSubmit = async (data: any) => {
        const res = await authData(data.email, data.password);

        if (res.status === 404) {
            return toast.error('Email ou senha incorreta');
        }

        const payload = await getPayload(res.token);

        if (payload && isTokenValid) {
            toast.success('Login bem-sucedido');
            alert(isTokenValid);
        } else {
            toast.error('Falha ao validar token');
        }
    };

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
                {...register("email", {required: true})}
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
                {...register("password", {required: true})}
                placeholder='Senha'
                sx={{
                    transition: '0.4s',
                    width: { xs: '100%', sm: '75%', md: '50%', lg: '25%' },
                    m: 1,
                    color: "#323941",
                }}
            />
            <Button variant="contained"
            onClick={() => handleSubmit(onSubmit)()}
            sx={{
                color: 'white',
                width: { xs: '90%', md: '280px', lg:'25%' },
                fontFamily: Fonts ? Fonts.NotoSans : 'sans-serif',
                borderRadius: "50px",
                transition: '0.4s',
            }}>{isSubmitting ? <CircularProgress color="secondary"/> : 'Entrar'}</Button>
            <ToastContainer />
        </FormControl>
    );
}