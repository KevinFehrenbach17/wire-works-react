import React, { Component } from 'react'

import './Service.css';

export class Service extends Component {
  render() {
    return (

      

      
      <div className="row" id = "service">


        
      <div style={card}>
        <h3>Servicing:</h3>
                <div className= "area">
                  <p>- Greater Cincinnati</p>
                  <p>- Middletown</p>
                  <p>- Dayton</p>
                  <p>- North Kentucky</p>
                </div>

          </div>
            
          <div style={card}>
            <h3>Our Services:</h3>
              <div className="serv">
              <p>- Power And lighting</p>
                <p>- Design Build,<br>
                </br> In-House Engineering</p>
                <p>- New And Remodel</p>
                <p>- Trouble Shooting And <br>
                  </br>Hazardous Wiring Repairs</p>
                <p>- Phone And Data, <br>
                </br>Security Cameras,<br>
                  </br> Fire Alarms</p>
              </div>

            </div>
        
            <div  style={card}>
            <h3>Specialization:</h3>
              <div className="spec">
                <p>- Commercial</p>
                <p>- Retail Stores</p>
                <p>- Resturants</p>
                <p>Tenant Finished Offices</p>
                <p>- Energy Effecent Lighting <br>
                  </br>Design and Retro Fit</p>
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
    margin: '1rem',
    padding: '2rem',
}

export default Service
