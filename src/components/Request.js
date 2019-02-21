import React, { Component } from 'react'

import './Request.css';

export class Request extends Component {
  render() {
    return (
      <div>
        
        <h2>Request an Estimate</h2>
        <form>
          <label>
            Name:
              <input type="text" name="name" />
          </label>

            <label>
            Email:
              <input type="text" name="name" />
          </label>
        <input type="submit" value="Submit" />
        </form>

      </div>
    )
  }
}


export default Request
