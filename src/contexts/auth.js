import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext({});


function AuthProvider({children}){
    const [user, setUser ] = useState(false);


    //função de logar
    function signIn(email, password){
        console.log(email);
        console.log(password);
        alert('logado')
    }

    return(
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                signIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;