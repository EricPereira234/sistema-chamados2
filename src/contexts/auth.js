import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

import {db, auth} from "../services/firebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";



export const AuthContext = createContext({});


function AuthProvider({children}){
    const [user, setUser ] = useState(false);
    const [loadingAuth, setLoadinAuth] = useState(false);


    //função de logar
    function signIn(email, password){
        console.log(email);
        console.log(password);
        alert('logado')
    }

    //função de cadastro
    async function signUp(nome, email, password){
        setLoadinAuth(true);
        await createUserWithEmailAndPassword(auth, email, password)
        .then(async (value)=>{
            let uid = value.user.uid;
            await setDoc(doc(db, "users", uid), {
                nome: nome,
                avatarUrl: null
            })
            .then(()=>{
                
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                    avatarUrl: null
                }

                setUser(data);
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
                loadingAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;