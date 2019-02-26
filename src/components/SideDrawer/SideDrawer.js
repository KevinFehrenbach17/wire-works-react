import React from 'react';
import { Link } from 'react-router-dom';

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = ['side-drawer open'];
    }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to ="/">Home</Link>
        </li>
        <li>
          <a href="#aboutUs">About Us</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <Link to ="/request">Request an Estimate</Link>
        </li>
      </ul>
    </nav>
   );
};

export default sideDrawer;