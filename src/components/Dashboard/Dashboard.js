import React from 'react';
import './dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import Clients from './Clients/Clients';
import Rightside from './Rightside/Righside';
import AddClient from './Clients/AddClient/AddClient'

// const Dashboard = () => {
//     return (
//         // <div className="container" data-theme="light">
//         //     {/* <Sidebar></Sidebar> */}

//         //     <main>
//         //         {/* <h1>Dashboard</h1> */}
//         //         <Clients/>
//         //         {/* <AddClient/> */}
//         //     </main>

//         //     <Rightside/>
//         // </div>
//         <></>
//     );
// };

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