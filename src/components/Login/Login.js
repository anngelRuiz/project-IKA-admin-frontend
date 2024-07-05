import React from'react';
import { Link } from 'react-router-dom';
import logingImg from '../../images/login-bg.svg';
import logingImg2 from '../../images/login-bg-2.svg';
import logo from '../../images/logo-white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGoogle, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

import './login.css';

const Login = () => {

    return (
        <div className='containerCenter login'>
            <div className="loginTitle">
                <img src={logo}></img>
                <h3>IKA CLIMBING</h3>
            </div>
            <div className='contiainerLogin'>
                <div class="leftPanel">
                    <img src={logingImg2} alt="Campfire"></img>
                </div>
                <div class="rightPanel">
                    <h5 className='mt20'>LOGIN</h5>
                    <form>
                        <div class="input-container">
                            <FontAwesomeIcon icon={faUser} className="fa"/>
                            <input type="text" placeholder='Username' />
                        </div>
                        <div class="input-container">
                            <FontAwesomeIcon icon={faLock} className="fa"/>
                            <input type="password" placeholder='Password' />
                        </div>
                        <span>Recovery password</span>
                        <Link className="button md primary" to="/dashboard">Login</Link>
                    </form>

                    <hr></hr>
                    <p>Or continue with:</p>

                    <div className='loginBrandIcons mb20'>
                        <div className="brandIcon"><FontAwesomeIcon icon={faFacebookSquare} size="2x" title="Facebook"/></div>
                        <div className="brandIcon"><FontAwesomeIcon icon={faGoogle} size="2x" title="Google"/></div>
                        <div className="brandIcon"><FontAwesomeIcon icon={faSquareTwitter} size="2x" title="Twitter"/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;