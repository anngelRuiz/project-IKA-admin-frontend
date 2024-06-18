import React from "react";
import logoImg from "../../images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ isSidebarActive, toggleSidebar }) => {
  return (
    <aside className={isSidebarActive ? "active" : ""}>
      <div className="top">
        <div className="logo">
          <img src={logoImg} alt="" />
          <h2>
            IKA <span className="primary">CLIMBING</span>
          </h2>
        </div>
        {/* <div id="close-btn" className="close" onClick={toggleSidebar}>
                    <span className="material-icons-sharp">close</span>
                </div> */}
        {/* <button className="menu-btn" onClick={toggleSidebar}>
                    <span className="material-icons-sharp">menu</span>
                </button> */}
      </div>

      <div className="sidebar">
        <NavLink reloadDocument className="sidebar-link" to="/dashboard">
          <span className="material-icons-sharp">grid_view</span>
          <h3>Dashboard</h3>
        </NavLink>

        <NavLink reloadDocument className="sidebar-link" to="/clients">
          <span className="material-icons-sharp">hiking</span>
          <h3>Clients</h3>
        </NavLink>
        <NavLink reloadDocument className="sidebar-link" to="/addClient">
          <span className="material-icons-sharp">add</span>
          <h3>Add Client</h3>
        </NavLink>
        <NavLink className="sidebar-link" to="/viewClient">
          <span className="material-icons-sharp">visibility</span>
          <h3>View Client</h3>
        </NavLink>
        <NavLink className="sidebar-link" to="/dashboard">
          <span className="material-icons-sharp">receipt_long</span>
          <h3>Orders</h3>
        </NavLink>
        <NavLink className="sidebar-link" to="/dashboard">
          <span className="material-icons-sharp">insights</span>
          <h3>Analytics</h3>
        </NavLink>
        <NavLink className="sidebar-link" to="/dashboard">
          <span className="material-icons-sharp">mail_outline</span>
          <h3>Messages</h3>
          <span className="message-count">26</span>
        </NavLink>
        <NavLink className="sidebar-link" to="/dashboard">
          <span className="material-icons-sharp">inventory</span>
          <h3>Products</h3>
        </NavLink>
        <NavLink className="sidebar-link" to="/dashboard">
          <span className="material-icons-sharp">report_gmailerrorred</span>
          <h3>Reports</h3>
        </NavLink>
        <NavLink className="sidebar-link" to="/dashboard">
          <span className="material-icons-sharp">settings</span>
          <h3>Settings</h3>
        </NavLink>
        <NavLink className="sidebar-link" to="/dashboard">
          <span className="material-icons-sharp">add</span>
          <h3>Add Products</h3>
        </NavLink>
        <NavLink className="sidebar-link" to="/login">
          <span className="material-icons-sharp">logout</span>
          <h3>Logout</h3>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
