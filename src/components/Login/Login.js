import React, { useState } from'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logingImg from '../../images/login-bg.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGoogle, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faUser, faLock } from '@fortawesome/free-core-svg-icons';
// import { faUser, faLock } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

import './login.css';

const Login = () => {

    return (
        <div className='containerCenter'>                        
            <div className='contiainerLogin'>
                <div class="leftPanel">
                    <img src={logingImg} alt="Campfire"></img>
                </div>
                <div class="rightPanel">
                    <h5>LOGIN</h5>
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
                        <button className='button md primary'>Login</button>
                    </form>

                    <hr></hr>
                    <p>Or continue with:</p>

                    <div className='loginBrandIcons'>
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