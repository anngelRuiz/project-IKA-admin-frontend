import React from 'react';
import './recentUpdates.css';
import clientManImg from '../../../../images/users-profile/client-man.png';

const RecentUpdates = () => {
    return(
        <div className="recent-updates">
                <h2>Recent Updates</h2>
                <div className="updates">
                    <div className="update">
                        <div className="profile-photo">
                            <img src={clientManImg} alt=""/>
                        </div>

                        <div className="message">
                            <p><b>Myke Tyson</b> new cliber added</p>
                            <small className="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                    <div className="update">
                        <div className="profile-photo">
                            <img src={clientManImg} alt=""/>
                        </div>

                        <div className="message">
                            <p><b>Myke Tyson</b>just pay membership</p>
                            <small className="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                    <div className="update">
                        <div className="profile-photo">
                            <img src={clientManImg} alt=""/>
                        </div>

                        <div className="message">
                            <p><b>Myke Tyson</b> received his order of NIhg lion tech</p>
                            <small className="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default RecentUpdates;