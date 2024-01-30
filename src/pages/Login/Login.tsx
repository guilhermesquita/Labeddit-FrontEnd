import { Input, RoudedButton, RoudedButtonColorized } from "../../components"

export const Login = () => {
    const estiloLinha = {
        width: '50%',        // Largura da linha
        color: 'blue',       // Cor da linha
        backgroundColor: 'blue',  // Cor de fundo da linha (pode afetar a aparência em alguns navegadores)
        height: '2px',       // Espessura da linha
      };
    return (
        <div>
            <h1>teste</h1>
            <form action="/" method="post">
                <Input content="email" type="email" />
                <Input content="senha" type="password" />
                <RoudedButtonColorized content="continuar"/>
            </form>
            <hr style={estiloLinha}/>
            <form action="/" method="post">
                <RoudedButton content="Crie uma conta!" />
            </form>
        </div>
    )
}