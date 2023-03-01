import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {db, auth} from "../services/firebaseConnection";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";



export const AuthContext = createContext({});


function AuthProvider({children}){
    const [user, setUser ] = useState(false);
    const [loadingAuth, setLoadinAuth] = useState(false);

    const navigate = useNavigate();


    //função de logar
    async  function signIn(email, password){
        setLoadinAuth(true);

        await signInWithEmailAndPassword(auth, email, password)
        .then( async (value)=>{
            let uid = value.user.uid;

            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);

            let data = {
                uid: uid,
                nome: docSnap.data().nome,
                email: value.user.email,
                avatarUrl: docSnap.data().avatarUrl
            }

            setUser(data);
            storageUser(data);
            setLoadinAuth(false);
            toast.success('Bem vindo de volta!');
            navigate('/dashboard');

        })
        .catch((error)=>{
            console.log(error);
            setLoadinAuth(false);
            toast.error('Algo deu errado !')
        })
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
                storageUser(data);
                setLoadinAuth(false);
                toast.success('seja bem vindo!');
                navigate('/dashboard');
            })
        })
        .catch((error)=>{
            console.log(error);
            setLoadinAuth(false);
        })
    }

    function storageUser(data){
        localStorage.setItem('@ticketsPRO', JSON.stringify(data));
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