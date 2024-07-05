import React from 'react';
import './clientNotFound.css';
import clientManImg from '../../../../images/client-not-found.svg';

const ClientNotFound = () => {
    return (
        <div className="clientNotFoundContainer">
            <div className="clientNotFoundBox">
                <img src={clientManImg}/>
                <h5>Climber not Found</h5>
            </div>
        </div>
    );
};

export default ClientNotFound;