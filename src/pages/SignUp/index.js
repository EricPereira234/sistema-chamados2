
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

//importando arquivos
import logo from "../../assets/logo.png";
import { AuthContext } from "../../contexts/auth";

export default function SignUp(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const { signUp } = useContext(AuthContext);


    function handleSubmit(e){
        e.preventDefault();

        if(nome !== '' && email !== '' && password !== ''){
            signUp(nome, email, password);
        }

    }


    return(
        <div className="container-center" >
            <div className="login" >
                <div className="login-area" >
                    <img src={logo} alt="Logo do Sistema" />
                </div>

                <form  onSubmit={handleSubmit} >
                    <h1>Criar nova conta</h1>
                    <input
                        type={'text'} placeholder="seu nome"
                        value={nome}
                        onChange={(e)=>setNome(e.target.value)}
                    />

                    <input
                        type={'text'} placeholder="email@email.com"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />

                    <input
                        type={'password'} placeholder="********"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                    <button type={'submit'} > Criar conta </button>
                </form>

                    <Link to={'/'} >já tem uma conta? Faça login</Link>

            </div>
        </div>
    )
}