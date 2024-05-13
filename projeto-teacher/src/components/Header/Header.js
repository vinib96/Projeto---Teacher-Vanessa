import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [currentPage, setCurrentPage] = useState('');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  function menuOpen() {
    const menu = document.querySelector('.header__menu');
    menu.classList.toggle('header__menu_open');
  }
  return (
    <>
      <header className='header'>
        <div className='header_content'>
          {' '}
          <div className='header_logo'>
            <img
              src={require('../../images/header-logo.png')}
              alt='Logo da
            Teacher Vanessa'
              className='header_image'
            />
            <span className='header_logo-text'>Teacher Vanessa</span>
          </div>
          <div className='header__hamburguer'>
            <button className='header__hamburguer_icon' onClick={menuOpen}>
              <img
                className='header__hamburger_image'
                src={require('../../images/hamburger.png')}
                alt='Menu hamburger'
              />
            </button>
          </div>
          <nav>
            <ul className='header_button-container'>
              <li>
                <Link
                  to='/'
                  onClick={() => handlePageChange('home')}
                  className={
                    currentPage === 'home'
                      ? 'header__button_active'
                      : 'header__button'
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/sobremim'
                  onClick={() => handlePageChange('sobremim')}
                  className={
                    currentPage === 'sobremim'
                      ? 'header__button_active'
                      : 'header__button'
                  }
                >
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link
                  to='/sobreasaulas'
                  onClick={() => handlePageChange('sobreasaulas')}
                  className={
                    currentPage === 'sobreasaulas'
                      ? 'header__button_active'
                      : 'header__button'
                  }
                >
                  Sobre as Aulas
                </Link>
              </li>
              <li>
                <Link
                  to='/quiz'
                  onClick={() => handlePageChange('quiz')}
                  className={
                    currentPage === 'quiz'
                      ? 'header__button_active'
                      : 'header__button'
                  }
                >
                  Teste seu inglês!
                </Link>
              </li>
              <li>
                <Link
                  to='/contato'
                  onClick={() => handlePageChange('contato')}
                  className={
                    currentPage === 'contato'
                      ? 'header__button_active'
                      : 'header__button'
                  }
                >
                  Contate-me
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='header__menu'>
          <nav>
            <ul className='header__button-hamburger'>
              <li>
                <Link
                  to='/'
                  onClick={() => handlePageChange('home')}
                  className={
                    currentPage === 'home'
                      ? 'header__button_active'
                      : 'header__button'
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/sobremim'
                  onClick={() => handlePageChange('sobremim')}
                  className={
                    currentPage === 'sobremim'
                      ? 'header__button_active'
                      : 'header__button'
                  }
                >
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link
                  to='/sobreasaulas'
                  onClick={() => handlePageChange('sobreasaulas')}
                  className={
                    currentPage === 'sobreasaulas'
                      ? 'header__button_active'
                      : 'header__button'
                  }
                >
                  Sobre as Aulas
                </Link>
              </li>
              <li>
                <Link
                  to='/quiz'
                  onClick={() => handlePageChange('quiz')}
                  className={
                    currentPage === 'quiz'
                      ? 'header__button_active'
                      : 'header__button'
                  }
                >
                  Teste seu inglês!
                </Link>
              </li>
              <li>
                <Link
                  to='/contato'
                  onClick={() => handlePageChange('contato')}
                  className={
                    currentPage === 'contato'
                      ? 'header__button_active'
                      : 'header__button'
                  }
                >
                  Contate-me
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='header__line' />
      </header>
    </>
  );
}

export default Header;
