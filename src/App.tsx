import { AppRouter } from "./routes/router";
import { AuthProvider } from "./store/AuthContext/AuthContext";

export const App = () => {
    return (
        // <Router>
        //     <Switch>
        //         <Route path="/" Component={Login}/>
        //     </Switch>
        // <Login />
        // <Register /> 
        // <Home/>
        // </Router>
        // <BrowserRouter>
        //     <GlobalStyles>

        //     </GlobalStyles>
        // </BrowserRouter>
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    );
};