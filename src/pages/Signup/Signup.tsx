import React, {useState} from "react"
import Logo from "../../assets/logo.svg"
import "./Signup.scss"
import {Link, useHistory} from "react-router-dom"
import axios from 'axios';

interface UserSignup {
    username: string;
    password: string;
    email?: string;
}

function Signup(){
    const [user, setUser] = useState<UserSignup>({
        username: '',
        password: '',
        email: '',
    });

    let history = useHistory();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post('https://fuerza.test/auth/signup', user)
        .then(function (response) {
            console.log('Conta criada. Redirecionando...');
            setTimeout(() => {
                localStorage.setItem('token' , response.data.token);
                
                history.push('/journals');
            }, 500)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    return (
        <div className="signup">
            <div className="page-header">
                <img src={Logo} alt="Nocturnal" />
            </div>

            <div className="page-content">
                <div className="title">
                    <h2>Sign up</h2>
                    <Link to="/login">Already have an account</Link>
                </div>

                <form action="#" onSubmit={handleSubmit}>
                    <input type="text" name="username" onChange={handleInputChange} placeholder="Define a username"/>
                    <input type="password" name="password" onChange={handleInputChange} placeholder="Set your password"/>
                    <input type="e-mail" name="email" onChange={handleInputChange} placeholder="E-mail (optional)"/>
                    <button type="submit">Create account</button>
                </form>
            </div>
        </div>
    )
}

export default Signup