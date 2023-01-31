import "./signin.css";
import { useState } from "react";

//importando arquivos
import logo from "../../assets/logo.png";

export default function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="container-center" >
            <div className="login" >
                <div className="login-area" >
                    <img src={logo} alt="Logo do Sistema" />
                </div>

                <form  >
                    <h1>Entrar</h1>
                    <input
                        type={'text'} placeholder="email@email.com"
                    />
                </form>
            </div>
        </div>
    )
}