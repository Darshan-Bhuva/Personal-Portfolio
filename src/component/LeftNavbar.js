// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../css/menuIcon.css';

// const LeftNavbar = () => {
//     const [isMenuOpened, setMenuOpened] = useState(false);

//     useEffect(() => {
//         document.querySelectorAll('.left-navigation a').forEach(link => {
//             const text = link.textContent;
//             link.textContent = '';

//             text.split('').forEach(char => {
//                 const span = document.createElement('span');
//                 span.setAttribute("align", "center");
//                 span.textContent = char;
//                 link.appendChild(span);
//             });
//         });
//     }, []);

//     return (
//         <div className='left-navigation navigation'>
//             <div className="icon">
//                 <div className="nav" onClick={() => setMenuOpened(!isMenuOpened)}>
//                     <input type="checkbox" />
//                     <svg>
//                         <use xlinkHref="#menu" />
//                         <use xlinkHref="#menu" />
//                     </svg>
//                 </div>

//                 {/* <!-- SVG --> */}
//                 <svg xmlns="http://www.w3.org/2000/svg" className='svgIcon'>
//                     <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 56" id="menu">
//                         <path d="M48.33,45.6H18a14.17,14.17,0,0,1,0-28.34H78.86a17.37,17.37,0,0,1,0,34.74H42.33l-21-21.26L47.75,4" />
//                     </symbol>
//                 </svg>
//             </div>
//             <div className="menuItemContainer">

//             <div className="menuItem" style={{ transform: isMenuOpened ? "translateY(0%)" : "translateY(-100%)" }}>
//                 <Link to={'/'}>Start</Link>
//                 <Link to={'/behind-the-code'}>Bio</Link>
//                 <Link to={'/portfolio-showcase'}>Show</Link>
//                 <Link to={'/lets-collabrate'}>Join</Link>
//             </div>
//             </div>
//         </div>
//     );
// };

// export default LeftNavbar;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/menuIcon.css';

const LeftNavbar = () => {
    const [isMenuOpened, setMenuOpened] = useState(false);

    useEffect(() => {
        document.querySelectorAll('.left-navigation a').forEach(link => {
            const text = link.textContent;
            link.textContent = '';

            text.split('').forEach(char => {
                const span = document.createElement('span');
                span.setAttribute("align", "center");
                span.textContent = char;
                link.appendChild(span);
            });
        });

        const cursor = document.querySelector(".customeCursor");

        const handleMouseEnter = () => {
            cursor.classList.add('hover');
        };

        const handleMouseLeave = () => {
            cursor.classList.remove('hover');
        };

        document.querySelectorAll('.icon').forEach(nav => {
            nav.addEventListener('mouseenter', handleMouseEnter);
            nav.addEventListener('mouseleave', handleMouseLeave);
        });


    }, []);

    return (
        <div className='left-navigation navigation'>
            <div className="icon">
                <div className="nav" onClick={() => setMenuOpened(!isMenuOpened)}>
                    <input type="checkbox" />
                    <svg>
                        <use xlinkHref="#menu" />
                        <use xlinkHref="#menu" />
                    </svg>
                </div>

                {/* <!-- SVG --> */}
                <svg xmlns="http://www.w3.org/2000/svg" className='svgIcon'>
                    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 56" id="menu">
                        <path d="M48.33,45.6H18a14.17,14.17,0,0,1,0-28.34H78.86a17.37,17.37,0,0,1,0,34.74H42.33l-21-21.26L47.75,4" />
                    </symbol>
                </svg>
            </div>
            <div className="menuItemContainer">

                <div className={`menuItem ${isMenuOpened ? 'bouncy' : 'bouncy-out'}`}>
                    <Link to={'/'}>Start</Link>
                    <Link to={'/behind-the-code'}>Bio</Link>
                    <Link to={'/portfolio-showcase'}>Show</Link>
                    <Link to={'/lets-collabrate'}>Join</Link>
                </div>
            </div>
        </div>
    );
};

export default LeftNavbar;
