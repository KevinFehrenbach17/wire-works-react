import React, { Component } from 'react'

import './Service.css';

export class Service extends Component {
  render() {
    return (

      

      <div className="container">
      <div className="row">
        
      <div className="col-sm" style={card}>
        <h2>Servicing</h2>
                <p>- Greater Cincinnati</p>
                <p>- Middletown</p>
                <p>- Dayton</p>
                <p>- North Kentucky</p>
          </div>
            
          <div className="col-sm" style={card}>
            <h2>Our Services</h2>
                <p>- Power And lighting</p>
                <p>- Design Build, In-House Engineering</p>
                <p>- New And Remodel</p>
                <p>- Trouble Shooting And Hazardous Wiring Repairs</p>
                <p>- Phone And Data, Security Cameras, Fire Alarms</p>
            </div>
        
            <div className="col-sm" style={card}>
            <h2>Specialization</h2>
                <p>- Commercial</p>
                <p>- Retail Stores</p>
            </div>
        </div>
      </div>
      
    )
  }
}

const card = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#595959',
    borderRadius: '20px',
    margin: '1rem'
}

export default Service
