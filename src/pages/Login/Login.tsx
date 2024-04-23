import { Input, MainButton } from "../../components"
import Logo from '../../assets/logo/logo.png'
import {Fonts} from '../../fonts'

export const Login = () => {
    // const estiloLinha = {
    //     width: '50%',        // Largura da linha
    //     color: 'blue',       // Cor da linha
    //     backgroundColor: 'blue',  // Cor de fundo da linha (pode afetar a aparência em alguns navegadores)
    //     height: '2px',       // Espessura da linha
    // };

    return (
        <main>
            <section>
                <img src={Logo}  alt="Descrição da imagem" height='10%'/>
                <h1>LabEddit</h1>
                <p>O projeto de rede social da Labenu</p>
            </section>

            <form action="/" method="post">
                <Input content="email" type="email" />
                <Input content="senha" type="password" />
                <MainButton content="Continuar" font={
                    Fonts ? Fonts.NotoSans : 'sans-serif' 
                }
                radius="50px" width="280px"/>
            </form>
            {/* <hr style={estiloLinha} /> */}
        </main>
    )
}