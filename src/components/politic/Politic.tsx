import { Box, Checkbox } from "@mui/material"

export const Politic = () => {
    return (
        <Box component='section' sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            fontFamily: 'Noto Sans, sans-serif',
            fontSize: '15px',
        }}>
            <Box component='article'>
                <p>Ao continuar, você concorda com o nosso <a href="#" style={{textDecoration: 'none', color: '#4088CB'}}>Contrato de usuário</a> e nossa <a href="#" style={{textDecoration: 'none', color: '#4088CB'}}>Política de Privacidade</a></p>
            </Box>
            <Box component='article' sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Checkbox />
                <p>Eu concordo em receber emails sobre coisas legais no Labeddit</p>
            </Box>
        </Box>
    )
}