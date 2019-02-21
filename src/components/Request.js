import React, { Component } from 'react'

import './Request.css';

export class Request extends Component {
  render() {
    return (
      <div>
        <h2 id = "request">Request an Estimate</h2>
        
        <div className = "wrapperR">
        
        <form action="mailto:kevinfehrenbach17@gmail.com" method="post" enctype="text/plain">
          
            Name:
              <input type="text" name="name" />
            Email:
              <input type="text" name="email" /><br></br>
            Body:
              
                <input type="text" email="body" size="53" />
 
          <div>
            <input type="submit" value="Submit" className = "subButton" />
          </div>
            
        </form>

        </div>

      </div>
    )
  }
}


export default Request
