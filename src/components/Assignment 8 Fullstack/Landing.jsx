import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { NavList } from "./NavList";
import { AddProduct } from "./AddProduct";
import { DisplayProduct } from "./DisplayProduct";
import { DisplayUser } from "./DisplayUser";
import { AddUser } from "./AddUser";

export const Landing=()=>{
    return(
   <BrowserRouter>
   <NavList/>
   <Routes>
    <Route path="/" element={<AddProduct/>}/>
    <Route path="/prod" element={<DisplayProduct/>}/>
    <Route path="/adduser" element={<AddUser/>}/>
    <Route path="/disuse" element={<DisplayUser/>}/>
   </Routes>
   </BrowserRouter>
    )
}