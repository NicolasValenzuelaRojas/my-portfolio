import React from "react";
import { Home } from "../Components/Home";
import { Routes as ReacRoutes, Route, BrowserRouter, NavLink} from "react-router-dom";

export const Routes = () =>{
    return (
        <BrowserRouter>
                {/*<HeaderNav /> Rutes of the page*/} 
            <ReacRoutes>
                {/*Rutes of the page*/} 
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
            </ReacRoutes>
        </BrowserRouter>
    )
}