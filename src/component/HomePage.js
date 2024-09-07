import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
// import {View, Image, StyleSheet} from 'react-native';
import '../css/homepage.css';

const HomePage = () => {
    const tiltRef = useRef(null);

    // useEffect(() => {
    //   if (tiltRef.current) {
    //     VanillaTilt.init(tiltRef.current, {
    //       max: 25,
    //       speed: 400,
    //       glare: true,
    //       'max-glare': 0.5,
    //     });
    //   }
      
    //   return () => tiltRef.current?.vanillaTilt.destroy();
    // }, []);

  return (
    <div className='homepage sections'>
      {/* <Image ></Image> */}
      <div className="introContainer" ref={tiltRef}>
        <p>Darshan Bhuva</p>
        <p>Crafting the digital future,<br /> one revolutionary line <br />of code at a time</p>
      </div>
      <span>01</span>
    </div>
  );
}

export default HomePage;
