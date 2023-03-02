import {  useContext } from "react";
import { Navigate } from "react-router-dom";

//importando arquivos
import { AuthContext } from "../contexts/auth";


export default function Private({Children}){
    const {signed, loading} = useContext(AuthContext);

    if(loading){
        return <div></div>
    }

    if(!signed){
        return <Navigate to={'/'} />
    }

    return Children;
}