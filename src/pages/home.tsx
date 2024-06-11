import { Login } from "./Login/Login"

export const Home = () => {
    let login = false

    return (
        <main>
            {login ? <Login/> : <Login/>}
        </main>
    )
}