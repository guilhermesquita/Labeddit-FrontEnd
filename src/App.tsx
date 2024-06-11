import { BrowserRouter, Route, Router } from "react-router-dom";
import { Login } from "./pages";
import { GlobalStyles, Switch } from "@mui/material";
import { Register } from "./pages/register/Register";
import { Home } from "./pages/home";
import { AppRouter } from "./routes/Router";

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
        <AppRouter/>
    );
};