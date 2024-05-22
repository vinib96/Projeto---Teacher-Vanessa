import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // function menuOpen() {
  //   const menu = document.querySelector('.header__menu');
  //   menu.classList.toggle('header__menu_open');
  // }

  return (
    <>
      <header className='header'>
        <div className='header__content'>
          {' '}
          <div className='header__logo'>
            <img
              src={require('../../images/header-logo.png')}
              alt='Logo da
            Teacher Vanessa'
              className='header__image'
            />
            <span className='header__logo-text'>Teacher Vanessa</span>
          </div>
          <Navigation />
          <div className='header__hamburguer'>
            <button className='header__hamburguer_icon' onClick={toggleMenu}>
              <img
                className='header__hamburger_image'
                src={require('../../images/hamburger.png')}
                alt='Menu hamburger'
              />
            </button>
          </div>
        </div>
        <div className={menuOpen ? 'header__menu_open' : 'header__menu'}>
          <Navigation menuOpen={menuOpen} />
        </div>
        <div className='header__line' />
      </header>
    </>
  );
}

export default Header;
