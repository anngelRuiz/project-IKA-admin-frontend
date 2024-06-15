import React from 'react';
import logoImg from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
    return (        
        <aside>
            <div className="top">
                <div className="logo">
                    <img src={logoImg} alt=""/>
                    <h2>IKA <span className="primary">CLIMBING</span></h2>
                </div>
                <div id="close-btn" className="close">
                    <span className="material-icons-sharp">close</span>
                </div>
            </div>
                

            <div className="sidebar">
                <Link className="sidebar-link active" to="/dashboard">
                    <span className="material-icons-sharp">grid_view</span>
                    <h3>Dashboard</h3>
                </Link>

                <Link className="sidebar-link" to="/dashboard">
                    <span className="material-icons-sharp">hiking</span>
                    <h3>Clients</h3>
                </Link>
                <Link className="sidebar-link" to="/addClient">
                    <span className="material-icons-sharp">add</span>
                    <h3>Add Client</h3>
                </Link>
                <Link className="sidebar-link" to="/dashboard">
                    <span className="material-icons-sharp">receipt_long</span>
                    <h3>Orders</h3>
                </Link>
                <Link className="sidebar-link" to="/dashboard">
                    <span className="material-icons-sharp">insights</span>
                    <h3>Analytics</h3>
                </Link>
                <Link className="sidebar-link" to="/dashboard">
                    <span className="material-icons-sharp">mail_outline</span>
                    <h3>Messages</h3>
                    <span className="message-count">26</span>
                </Link>
                <Link className="sidebar-link" to="/dashboard">
                    <span className="material-icons-sharp">inventory</span>
                    <h3>Products</h3>
                </Link>
                <Link className="sidebar-link" to="/dashboard">
                    <span className="material-icons-sharp">report_gmailerrorred</span>
                    <h3>Reports</h3>
                </Link>
                <Link className="sidebar-link" to="/dashboard">
                    <span className="material-icons-sharp">settings</span>
                    <h3>Settings</h3>
                </Link>
                <Link className="sidebar-link" to="/dashboard">
                    <span className="material-icons-sharp">add</span>
                    <h3>Add Products</h3>
                </Link>
                <Link className="sidebar-link" to="/login">
                    <span className="material-icons-sharp">logout</span>
                    <h3>Logout</h3>
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;