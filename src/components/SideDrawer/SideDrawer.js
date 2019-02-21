import React from 'react';

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
          <a href="#request">Request an Estimate</a>
        </li>
      </ul>
    </nav>
   );
};

export default sideDrawer;