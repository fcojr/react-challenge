import React, {useEffect, useState} from "react"
import Logo from "../../assets/logo.svg"
import "./Login.scss"
import {Link, useHistory} from "react-router-dom"
import axios from 'axios';

interface UserLogin {
    username: string;
    password: string;
}

function Login(){
    const [user, setUser] = useState<UserLogin>({
        username: '',
        password: '',
    });

    let history = useHistory();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        axios.post('https://fuerza.test/auth/login', user)
        .then(function (response) {
            localStorage.setItem('token' , response.data.token);
            history.push('/journals');
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    useEffect(() => {
        if(localStorage.getItem('token') !== null) history.push('/journals')
    })

    return (
        <div className="login">
            <div className="page-header">
                <img src={Logo} alt="Nocturnal" />
            </div>

            <div className="page-content">
                <div className="title">
                    <h2>Sign in</h2>
                    <Link to="/signup">Signup</Link>
                </div>

                <form action="#" onSubmit={handleSubmit}>
                    <input name="username" onChange={handleInputChange} type="text" placeholder="Your username"/>
                    <input name="password" onChange={handleInputChange} type="password" placeholder="Your password"/>
                    <Link className="reset-password" to="#">Forgot password?</Link>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login