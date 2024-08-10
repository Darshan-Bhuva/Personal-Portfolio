import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './component/Navbar';
import React, { useEffect } from 'react';
import AnimatedRoutes from './component/AnimatedRoutes';
import LeftNavbar from './component/LeftNavbar';

function App() {

  useEffect(() => {
    const cursor = document.querySelector(".customeCursor");
    
    const handleMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseLeave = () => {
      cursor.style.display = `none`;
    }

    const handleMouseOver = () => {
      cursor.style.display = `block`;
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("mouseover", handleMouseOver);


    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <div className="customeCursor" ></div>
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
