import { Routes, Route } from "react-router-dom";

//importando arquivos 
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";


export default function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/register"  element={<SignUp/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="*" element={<h1>Erro</h1>} />
        </Routes>
    )
}