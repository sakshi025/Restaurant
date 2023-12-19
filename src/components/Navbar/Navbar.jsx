import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';
import images from '../../constants/images';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='app_navbar'>
      <div className='app_navbar-logo'>
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className='app_navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contacts">Contact</a></li>
      </ul>
      <div className='app_navbar-login'>
        <a href='#login' className='p__opensans'>Log In/Register</a>
        <div />
        <a href='/' className='p__opensans'>Book Table</a>
      </div>
      <div className="app_navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => { setToggleMenu(true) }} />
        {toggleMenu && (
          <div className="app_navbar-smallscreen_overlay flex__center slide_bottom">
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => { setToggleMenu(false) }}></MdOutlineRestaurantMenu>
            <ul className='app_navbar-smallscreen-links'>
              <li className='p__opensans'><a href="#home">Home</a></li>
              <li className='p__opensans'><a href="#about">About</a></li>
              <li className='p__opensans'><a href="#menu">Menu</a></li>
              <li className='p__opensans'><a href="#awards">Awards</a></li>
              <li className='p__opensans'><a href="#contacts">Contact</a></li>
            </ul>
          </div>
        )}
      </div>

    </nav>
  )
};

export default Navbar;
