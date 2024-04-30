import { InputText, MainButton } from "../../components"
import Logo from '../../assets/logo/logo.png'
import {Fonts} from '../../fonts'
import { Box, Divider, FormControl } from "@mui/material"

export const Login = () => {
    // const estiloLinha = {
    //     width: '50%',        // Largura da linha
    //     color: 'blue',       // Cor da linha
    //     backgroundColor: 'blue',  // Cor de fundo da linha (pode afetar a aparência em alguns navegadores)
    //     height: '2px',       // Espessura da linha
    // };

    return (
        <main style={{}}>
            <Box component='section' sx={{
                width: '90%',
            }}>
                <Box component='section' sx={{
                    display:"flex",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    marginTop: '120px',	
                    fontFamily: Fonts ? Fonts.NotoSans : 'sans-serif',
                    color: '#373737',
                    fontSize: '20px'
                }}>
                    <img src={Logo}  alt="Descrição da imagem" height='5%'/>
                    <h1>LabEddit</h1>
                </Box>
                {/* <section>
                    <img src={Logo}  alt="Descrição da imagem" height='10%'/>
                    <h1>LabEddit</h1>
                    <p>O projeto de rede social da Labenu</p>
                </section> */}

                <FormControl sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                }}>
                    <InputText content="Email" type="email" color="#323941"
                    width="25%" multiline = {false} variant="outlined"/>
                    {/* <Divider sx={{ height: 28, m: 0.5, backgroundColor: 'red'}} orientation="horizontal" /> */}
                    <InputText content="Senha" type="password" color="#323941"
                    width="25%" multiline = {false} variant="outlined"/>
                    <MainButton content="Continuar" font={
                        Fonts ? Fonts.NotoSans : 'sans-serif' 
                    }
                    radius="50px" width="280px"/>
                </FormControl>
                {/* <hr style={estiloLinha} /> */}
                <Box component='footer' sx={{
                    display:"flex",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    marginTop: '150px',	
                    fontFamily: Fonts ? Fonts.IbmPlexSans : 'sans-serif',
                }}>
                <Box component='a' sx={{
                    textDecoration: 'none',
                    color: 'black',
                }} 
                href="#"><strong>é novo no labeddit? faça o CADASTRO</strong></Box> 
                </Box>
            </Box>

            <Box component='aside' sx={{width: '100%'}}>
                <Box component='section' sx={{width: '100%', backgroundColor: 'orange'}}>
                    d
                </Box>
            </Box>

        </main>
    )
}