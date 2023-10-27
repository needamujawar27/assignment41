import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Nav } from "./Nav";
import { Samsung } from "./Samsung";
import { Oneplus } from "./Oneplus";
import { Vivo } from "./Vivo";
import { Redmies } from "./Redmies";

export const Landing=()=>{
    return(
        <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<Samsung/>}/>
            <Route path="/one" element={<Oneplus/>}/>
            <Route path="/vivo" element={<Vivo/>}/>
            <Route path="/red" element={<Redmies/>}/>
        </Routes>
        </BrowserRouter>
    )
}