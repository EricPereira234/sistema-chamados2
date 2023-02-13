import { useState, useEffect, createContext } from "react";

import {db, auth} from "../services/firebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { async } from "@firebase/util";


export const AuthContext = createContext({});


function AuthProvider({children}){
    const [user, setUser ] = useState(false);
    const {loadingAuth, setLoadinAuth} = useState(false);


    //função de logar
    function signIn(email, password){
        console.log(email);
        console.log(password);
        alert('logado')
    }

    //função de cadastro
    async function signUp(email, password, nome){
        setLoadinAuth(true);
        await createUserWithEmailAndPassword(auth, email, password)
        .then(async (value)=>{
            let uid = value.user.uid;
            await setDoc(doc(db, "users", uid), {
                nome: nome,
                avatarUrl: null
            })
            .then(()=>{
                alert('Cadastrado com sucesso');
                setLoadinAuth(false);
            })
        })
        .catch((error)=>{
            console.log(error);
            setLoadinAuth(false);
        })
    }

    return(
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                signIn,
                signUp,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;