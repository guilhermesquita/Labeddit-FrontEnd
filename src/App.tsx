import { BrowserRouter, Route, Router } from "react-router-dom";
import { Login } from "./pages";
import { GlobalStyles, Switch } from "@mui/material";

export const App = () => {
    return (
        // <Router>
        //     <Switch>
        //         <Route path="/" Component={Login}/>
        //     </Switch>
        <Login /> 
        // </Router>
        // <BrowserRouter>
        //     <GlobalStyles>

        //     </GlobalStyles>
        // </BrowserRouter>
    );
};