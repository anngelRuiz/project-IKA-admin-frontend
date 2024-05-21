import React, { useState } from'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logoWhiteImg from '../../images/logo-white.svg';
import logingImg from '../../images/login-bg.svg';
import './login.css';

const Login = () => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        try{
            const response = await axios.post('http://localhost:8080/login', {
                email,
                password
            });

            if(response.status === 200){
                const data = response.data;

                localStorage.setItem('token', data.token);
            }
        }catch(error){
            console.error('Error during login:', error);
        }
    }

    return (
        <>
            <div className="container login">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="" className="formBase sign-in-form">
                            <h2 className="title">Login</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username"/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password"/>
                            </div>
                                                                                    
                            <Link className="btn solid" to="/dashboard">Login</Link>
                        </form>

                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <div className="right-title"><img src={logoWhiteImg} alt="" className="right-image"/><h3>IKA CLIMBING</h3></div>
                            <p>GYM Dashboard clients</p>                            
                        </div>

                        <img src={logingImg} className="image" alt="login bg"/>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Login;