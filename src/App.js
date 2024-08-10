import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './component/Navbar';
import React from 'react';
import AnimatedRoutes from './component/AnimatedRoutes';
import LeftNavbar from './component/LeftNavbar';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="mainContainer">
          <div className="leftSide">
            <LeftNavbar/>
          </div>
          <div className="rightSide">
            <AnimatedRoutes />
            <Navbar />
          </div>

        </div>
      </Router>
    </div>
  );
}

export default App;
