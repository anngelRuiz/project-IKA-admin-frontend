import React from 'react';
import './error.css';

const Error = ({ message }) => {
  return (
    <div className="containerCenterY">
        <div className="error-container">
            <div className="error-header">
                <div className="error-icon"><span className="material-icons-sharp">warning</span></div>
            </div>
            <div className="error-body">
                <div className="error-message">{message}</div>
            </div>    
        </div>
    </div>
  );
};

export default Error;
