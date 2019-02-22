import React, { Component } from 'react'

import './Contact.css'

export class Contact extends Component {
  render() {
    return (
      <div  id = "contact">
        <h2>Contact Us</h2>
            <div className="paragraph">
            <p>For more information about our services, please either contact or call us!</p>
            </div>
            
            <div className="contact">
                <a href="tel:1-513-560-3040"><i class="fas fa-phone"></i></a> 
                <a href="mailto:kevinfehrenbach17@gmail.com"><i class="fas fa-envelope"></i></a>
            </div>

        
      </div>
    )
  }
}

export default Contact


{/* 
  
 
*/}
