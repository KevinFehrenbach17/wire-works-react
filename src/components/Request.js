import React, { Component } from 'react'

import './Request.css';

export class Request extends Component {
  render() {
    return (
      <div>
        
        <div className = "wrapper">
        <h2>Request an Estimate</h2>
        
        <form action="mailto:kevinfehrenbach17@gmail.com" method="post" enctype="text/plain">
          
            Name:
              <input type="text" name="name" />
            Email:
              <input type="text" name="email" /><br></br>
            Body:
              <div className="emailB">
                <input type="text" email="body" size="53" />
              </div>
              

          
          <div className = "subButton">
            <input type="submit" value="Submit" />
          </div>
            
        </form>

        </div>

      </div>
    )
  }
}


export default Request
