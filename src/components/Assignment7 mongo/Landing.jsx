import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Nav } from "./Nav";
import { Customers } from "./Customers";
import { Employe } from "./Employe";
import { Students } from "./students";
import { Teachers } from "./Teachers";
export const Landing=()=>{
    return(
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path="/" element={<Customers/>}/>
    <Route path="/emp" element={<Employe/>}/>
    <Route path="/stud" element={<Students/>}/>
    <Route path="/teach" element={<Teachers/>}/>
   </Routes>
   </BrowserRouter>
    )
}