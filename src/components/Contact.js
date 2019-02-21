import React, { Component } from 'react'

import './Contact.css'

export class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact Us</h2>
            <div className="paragraph">
            <p>For more information about our services, please either contact or call us!</p>
            </div>
            
            <div className="contact">
                <i class="fas fa-envelope"></i>
                <i class="fas fa-phone"></i>
            </div>

        
      </div>
    )
  }
}

export default Contact
