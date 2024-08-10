import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import ProjectPage from './ProjectPage';

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/behind-the-code' element={<AboutPage />}></Route>
            <Route path='/portfolio-showcase' element={<ProjectPage />}></Route>
            <Route path='/lets-collabrate' element={<ContactPage />}></Route>
        </Routes>
    )
}

export default AnimatedRoutes
