import React, { Component } from 'react'

import WireWorks from './wwlogo.png';

import './Request.css';

export class Request extends Component {
  render() {
    return (
      <div  id = "request">
      <img src={WireWorks} className="container" style={wwImg}/>
        <h2>Request an Estimate</h2>
        
        <div className = "wrapperR">
          
        
        <form action="mailto:kevinfehrenbach17@gmail.com" method="post" enctype="text/plain">
          
            Name:
              <input type="text" name="name" />
            Email:
              <input type="text" name="email" /><br></br>
            Body:
              
                <input type="text" name="body" size="30" className="eBody"/>
 
          <div>
            <input type="submit" value="Submit" className = "subButton" />
          </div>

            
        </form>

        </div>

      </div>
    )
  }
}

const wwImg = {
  
  marginBottom: '3rem',
  height: '50%',
  width: '50%'
}


export default Request
