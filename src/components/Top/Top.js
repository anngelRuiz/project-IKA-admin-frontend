import React from 'react';
import './top.css';
import { Toggle } from './toggle/toggle';
import adminAvatarImg from '../../images/admin-avatar.png';

const Top = ({isSidebarActive, toggleSidebar}) => {
    return(
        <div className="navbarTop">
            <div className={`navLeft ${isSidebarActive ? 'collapsed' : ''}`}>
                <button className="menu-btn" onClick={toggleSidebar}>
                    <span className="material-icons-sharp">menu</span>
                </button>
            </div>

            <div className="navRight">
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
        </div>
    );
};

export default Top;