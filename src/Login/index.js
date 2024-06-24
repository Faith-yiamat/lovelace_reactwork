import './index.css'
import { useState } from 'react';
import { login } from './utils';
import { useNavigate } from 'react-router-dom';

function Login (){
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    console.log(userName);
    const history = useNavigate();

    const handleLogin = async e =>{
        e.preventDefault();
        const result = await login({username:userName,password});
        console.log(result);

        history.push('/users')

    }
    return(
        <form onSubmit={handleLogin}>
                  <h1>Login</h1>

            <input placeholder="Enter username" type="text" onChange={(e) => setUserName(e.target.value)}/>
            <br/>
            <input placeholder="Enter password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <button type="submit">Login</button>

        </form>
    );
};
export default Login;