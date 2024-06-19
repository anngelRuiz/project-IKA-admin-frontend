import React, { Component } from 'react'
import clientManImg from '../../../../images/users-profile/client-man.png';
import './viewClient.css'

export default class ViewClient extends Component {
  render() {
    return (
      <div className="containerCenterY viewClients">
        <div className="card">
          <div className="card-header">
            <div className="header-box">
              <div className="avatar">
                <img src={clientManImg} alt="Client Avatar" />              
              </div>
              <div className="header-info">
                <div className="name">John Doe</div>
                <div className="email">johndoe@example.com</div>
              </div>
            </div>
            <div className="status good">
              <span>Active</span>              
            </div>
          </div>
          <div className="card-content">
            <div className="content-row">
              <div className="content-item">
                <div className="label">First Name</div>
                <div className="detailValue">John</div>
              </div>
              <div className="content-item">
                <div className="label">Last Name</div>
                <div className="detailValue">Doe</div>
              </div>
            </div>            
            <div className="content-row">
              <div className="content-item">
                <div className="label">Age</div>
                <div className="detailValue">35</div>
              </div>
              <div className="content-item">
                <div className="label">Gender</div>
                <div className="detailValue">Male</div>
              </div>
            </div>
            
            <div className="content-row">
              <div className="content-item">
                <div className="label">Birthday</div>
                <div className="detailValue">January 1, 1988</div>
              </div>
            </div>

            <div className="content-row">
              <div className="content-item">
                <div className="label">Membership Type</div>
                <div className="detailValue">Montly</div>
              </div>
              <div className="content-item">
                <div className="label">Membership Start Date</div>
                <div className="detailValue">20/01/2024</div>
              </div>
            </div>

            {/* OPTIONAL */}
            <div className="content-row">
              <div className="content-item">
                <div className="label">Email</div>
                <div className="detailValue">johndoe@example.com</div>
              </div>
              <div className="content-item">
                <div className="label">Phone</div>
                <div className="detailValue">+1 (555) 555-5555</div>
              </div>
            </div>

            <div className="content-row">
              <div className="content-item">
                <div className="label">Emergency Contact</div>
                <div className="detailValue">636 105 03 33</div>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    );
  }
}
