import React, { Component } from 'react';
import About from './components/About';
import Service  from './components/Service';
import WireWorks from './components/wwlogo.png';
import Projects from './components/Projects';
import Contact from './components/Contact';



import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

import './App.css';


class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    
    let backDrop;

    if(this.state.sideDrawerOpen) {
      
      backDrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div style={{height: '100%'}} className="container">
        
        
        <div className="topbar">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backDrop}
        </div>
        
        <img src={WireWorks} className="container" style={wwImg}/>
        <div className="cards">

          <About />
          <Service />
          <Projects />
          <Contact />
        
        </div>
      
        

      </div>
    );
  }
}

const wwImg = {
  height: '75%',
  width: '75%'
}

export default App;
