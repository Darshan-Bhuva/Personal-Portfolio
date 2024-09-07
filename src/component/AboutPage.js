import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import '../css/about.css';
import VanillaTilt from 'vanilla-tilt';
import TechnologyList from './subComponent/technologyList';

const AboutPage = () => {
  const bioCard1 = useRef(null);
  const bioCard2 = useRef(null);
  const bioCard3 = useRef(null);
  const bioCard4 = useRef(null);
  const bioCard5 = useRef(null);
  const bioCard6 = useRef(null);

  useEffect(() => {
    if (bioCard1.current) {
      VanillaTilt.init(bioCard1.current, {
        max: 15,
        speed: 400,
        glare: true,
        perspective: 1000,
        'max-glare': 0.2,
      });
    }

    if (bioCard2.current) {
      VanillaTilt.init(bioCard2.current, {
        max: 25,
        speed: 400,
        glare: true,
        perspective: 1000,
        'max-glare': 0.2,
      });
    }
    if (bioCard3.current) {
      VanillaTilt.init(bioCard1.current, {
        max: 15,
        speed: 400,
        glare: true,
        perspective: 1000,
        'max-glare': 0.2,
      });
    }

    if (bioCard4.current) {
      VanillaTilt.init(bioCard2.current, {
        max: 25,
        speed: 400,
        glare: true,
        perspective: 1000,
        'max-glare': 0.2,
      });
    }
    if (bioCard5.current) {
      VanillaTilt.init(bioCard1.current, {
        max: 15,
        speed: 400,
        glare: true,
        perspective: 1000,
        'max-glare': 0.2,
      });
    }

    if (bioCard6.current) {
      VanillaTilt.init(bioCard2.current, {
        max: 25,
        speed: 400,
        glare: true,
        perspective: 1000,
        'max-glare': 0.2,
      });
    }

    let sections = document.querySelectorAll(".bioCards");
    let button = document.querySelectorAll("button");

    sections.forEach((item, index) => {
      item.style = `transform: translateY(${index * 2 * 100}%); transition: 1s ease-in-out;`;
    });

    button.forEach((btn, index) => {
      btn.addEventListener('click', () => slide(index));
    });

    function slide(btnindex) {
      sections.forEach((item, index) => {
        item.style = `scale : 0.5`

        setTimeout(() => {
          let transformValue;
          if (btnindex == index) {
            transformValue = `translateY(-${0}%);`;
            // scale = "1"
          } else if (index < btnindex) {
            transformValue = `translateY(-${(btnindex - index) * 100}%);`;
          } else if (index > btnindex) {
            transformValue = `translateY(${(index - btnindex) * 100}%);`;
          }
          item.style = `transform: ${transformValue}; transition: 1s ease-in-out; scale:1;`;
        }, 1000);
      });
    }


    return () => {
      if (bioCard1.current) bioCard1.current.vanillaTilt.destroy();
      if (bioCard2.current) bioCard2.current.vanillaTilt.destroy();
    };
  }, []);

  const educationDetails = [
    {
      degree: "Bachelor of Engineering - BE, Data Science",
      institution: "VGEC - Ahmedabad",
      year: "2023 - 2026"
    },
    {
      degree: "Diploma Engineering, Information Technology",
      institution: "Tapi Diploma - Surat",
      year: "2020 - 2023"
    },
    {
      degree: "Higher Education",
      institution: "Ashadeep Vidhyalaya - Surat",
      year: "2020"
    }
  ];

  return (
    <div className="about sections">
      <p className='bioHeading'>About The <span>Behind The Code</span></p>
      <div className="bioCardContainer">
        <div className="bioCards">

          <div className="bioCard b1" ref={bioCard1}>
            <div className="cardhHeader">
              <p className='cardHeadig'>Welcome! i’m Darshan</p>
              <p className='cardSubHeadig'>Innovation Architect</p>
            </div>
            <div className="cardDetail">
              <p>Hey There! I’m Darshan Bhuva, a creative digital visionary
                with a passion for transforming ideas into
                cutting-edge digital experiences.</p>
            </div>
          </div>
          <div className="bioCard b2" ref={bioCard2}>
            <div className="cardhHeader">
              <p className='cardHeadig'>Education</p>
            </div>
            <div className="cardDetail">
              {
                educationDetails.map((education, index) => (
                  <div key={index}>
                    <p className="bioStudyHeading">{education.degree}</p>
                    <p className="bioStudySubHeading">{education.institution} <span>({education.year})</span> </p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="bioCards">

          <div className="bioCard b1" ref={bioCard3}>
            <div className="cardhHeader">
              <p className='cardHeadig'>Welcome! i’m Darshan</p>
              <p className='cardSubHeadig'>Innovation Architect</p>
            </div>
            <div className="cardDetail">
              <TechnologyList></TechnologyList>
            </div>
          </div>
          <div className="bioCard b2" ref={bioCard4}>
            <div className="cardhHeader">
              <p className='cardHeadig'>Education</p>
            </div>
            <div className="cardDetail">
              {
                educationDetails.map((education, index) => (
                  <div key={index}>
                    <p className="bioStudyHeading">{education.degree}</p>
                    <p className="bioStudySubHeading">{education.institution} <span>({education.year})</span> </p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="bioCards">

          <div className="bioCard b1" ref={bioCard5}>
            <div className="cardhHeader">
              <p className='cardHeadig'>Welcome! i’m Darshan</p>
              <p className='cardSubHeadig'>Innovation Architect</p>
            </div>
            <div className="cardDetail">
              <p>Hey There! I’m Darshan Bhuva, a creative digital visionary
                with a passion for transforming ideas into
                cutting-edge digital experiences.</p>
            </div>
          </div>
          <div className="bioCard b2" ref={bioCard6}>
            <div className="cardhHeader">
              <p className='cardHeadig'>Education</p>
            </div>
            <div className="cardDetail">
              {
                educationDetails.map((education, index) => (
                  <div key={index}>
                    <p className="bioStudyHeading">{education.degree}</p>
                    <p className="bioStudySubHeading">{education.institution} <span>({education.year})</span> </p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
        <div className="bioButton">
          <button onclick="slide(1)">1</button><button onclick="slide(1)">2</button><button
            onclick="slide(2)">3</button>
        </div>
    </div>
  );
};

export default AboutPage;