import React, { useState } from 'react';
import './top.css';
import { Toggle } from './toggle/toggle';
import adminAvatarImg from '../../../../images/admin-avatar.png';

const Top = () => {

    return(
        <div className="top">
            <button id="menu-btn">
                <span className="material-icons-sharp">menu</span>
            </button>

            <Toggle />

            <div className="profile">
                <div className="info">
                    <p>Hey, <b>Angel</b></p>
                    <small className="text-muted">Admin</small>
                </div>

                <div className="profile-photo">
                    <img src={adminAvatarImg} alt="Admin Avatar"/>
                </div>
            </div>
        </div>
    );
};

export default Top;