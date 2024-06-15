import React from 'react';
import './dashboard.css';
import Clients from './Clients/Clients';
import Rightside from './Rightside/Righside';
import RecentUpdates from './Rightside/RecentUpdates/RecentUpdates';

const Dashboard = () => {
    return (
        <>  
        <main>
          <Clients/>
        </main>
        <Rightside/>
        </>
    );
};


export default Dashboard;