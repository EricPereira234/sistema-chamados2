import { Routes, Route } from "react-router-dom";

//importando arquivos 
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Profile from "../pages/Profile";
import Private from "./Private";


export default function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/register"  element={<SignUp/>} />
            <Route path="/dashboard" element={<Private><Dashboard/></Private>} />
            <Route path="/profile" element={<Private><Profile/></Private>} />
            <Route path="/customers" element={<Private><Customers/></Private>} />
            <Route path="*" element={<h1>Erro</h1>} />
        </Routes>
    )
}