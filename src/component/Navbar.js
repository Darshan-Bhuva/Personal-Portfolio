import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div className='bottom-navigation navigation' >
      <Link to={'/'}>01 <br /> Launchpad</Link>
      <Link to={'/behind-the-code'}>02 <br /> Behind the code</Link>
      <Link to={'/portfolio-showcase'}>03 <br /> Portfolio Showcase</Link>
      <Link to={'/lets-collabrate'}>04 <br /> Let's Collaborate</Link>
    </div>
  )
}

export default Navbar
