import React, { FunctionComponent } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROOT } from "./config/general";
import { rAuth, rHome } from "./config/routes";
import Header from "./src/components/Header";
import Home from "./src/pages/Home";
import Auth from "./src/pages/Auth";


const App: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={ rHome } element={ <Home/> }/>
                <Route path={ rAuth } element={ <Auth/> }/>
            </Routes>
        </BrowserRouter>
    )
}

const __container = document.getElementById(ROOT);
const __root = createRoot(__container);
__root.render(<App/>);