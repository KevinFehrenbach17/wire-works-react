import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/About';
import Service  from './components/Service';
import WireWorks from './components/wwlogo.png';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Request from './components/Request';

import ProjectOne from './components/projects-page/ProjectOne';
import ProjectTwo from './components/projects-page/ProjectTwo';



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
      <Router>
        <div style={{height: '100%'}} className="container">
        
        
        <div className="topbar">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backDrop}
        </div>
        
        <Route exact path="/" render={props => (
          <React.Fragment>
            <img src={WireWorks} className="container" style={wwImg}/>
        <div className="cards">

          <About />
        </div>
          <Service />
          <Projects />
          <Contact />
          
          <Link to="/request">
            <h2>Request an Estimate</h2>
          </Link>
          
        
          </React.Fragment>
        )} />

        <Route path="/request" component={Request} />

        <Route path="/ProjectOne" component={ProjectOne} />

        <Route path="/ProjectTwo" component={ProjectTwo} />
        
      
       

      </div>
      </Router>
      
    );
  }
}

const wwImg = {
  
  margin: '0rem',
  height: '75%',
  width: '75%'
}

export default App;
