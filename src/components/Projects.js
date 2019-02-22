import React, { Component } from 'react'

import './Projects.css';

export class Projects extends Component {
  render() {
    return (
      <div className="container" id = "projects"> 
        <h2>Projects</h2>
        
        <div className="wrapper">

            <div className="projImg">
               <a href="#"><h3>Project One</h3>
               <img src = "http://via.placeholder.com/320x180"></img></a> 
            </div>

            <div className="projImg">
                <a href="#"><h3>Project One</h3>
                <img src = "http://via.placeholder.com/320x180"></img></a> 
            </div>

            <div className="projImg">
                <a href="#"><h3>Project One</h3>
                <img src = "http://via.placeholder.com/320x180"></img></a> 
            </div>
            

         </div>
      </div>
    )
  }
}

export default Projects
