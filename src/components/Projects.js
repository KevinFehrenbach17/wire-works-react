import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Projects.css';

export class Projects extends Component {
  render() {
    return (
      <div className="container" id = "projects"> 
        <h2>Projects</h2>
        
        <div className="wrapper">

            <div className="projImg">
               <Link to="/ProjectOne"><h3>Project One</h3></Link>
               <img src = "http://via.placeholder.com/260x170"></img>
            </div>

            <div className="projImg">
              <Link to="/ProjectTwo"><h3>Project One</h3></Link>
                <img src = "http://via.placeholder.com/260x170"></img>
            </div>

            <div className="projImg">
              <Link to="/ProjectOne"><h3>Project One</h3></Link>
                <img src = "http://via.placeholder.com/260x170"></img>
            </div>
            

         </div>
      </div>
    )
  }
}

export default Projects
