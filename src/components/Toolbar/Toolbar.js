import React from 'react';

import DrawerToggleButton from'../SideDrawer/DrawerToggleButton';

import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
          <div>
             <DrawerToggleButton click={props.drawerClickHandler}/>
          </div>
          <div className="toolbar__logo"><a href="#">WireWorks</a></div>
          <div className="spacer" />
            <div className="toolbar__navigation-items">

            </div>  
        </nav>
    </header>
);

export default toolbar;