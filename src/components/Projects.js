import React, { Component } from 'react'

import './Projects.css';

export class Projects extends Component {
  render() {
    return (
      <div className="container">
        <h2>Projects</h2>
        
        <div className="wrapper">

            <div className="projImg">
                <img src = "http://via.placeholder.com/320x180"></img>
            </div>
            <div className="projImg">
                <img src = "http://via.placeholder.com/320x180"></img>
            </div>
            <div className="projImg">
                <img src = "http://via.placeholder.com/320x180"></img>
            </div>            <div className="projImg">
                <img src = "http://via.placeholder.com/320x180"></img>
            </div>
         </div>
      </div>
    )
  }
}

export default Projects
