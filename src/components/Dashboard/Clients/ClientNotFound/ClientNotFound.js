import React from 'react';
import './clientNotFound.css';
import clientManImg from '../../../../images/users-profile/client-man-1.png';
import clientManImg2 from '../../../../images/client-not-found.png';

const ClientNotFound = () => {
    return (
        <div className="clientNotFoundContainer">
            <div className="clientNotFoundBox">
                <img src={clientManImg2}/>
                <h5>Climber not Found</h5>
            </div>
        </div>
    );
};

export default ClientNotFound;