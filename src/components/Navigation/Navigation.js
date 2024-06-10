import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation({ menuOpen }) {
  const [currentPage, setCurrentPage] = useState('');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <nav>
        <ul
          className={
            menuOpen ? 'header__button-hamburger' : 'nav__button-container'
          }
        >
          <li>
            <Link
              to='/'
              onClick={() => handlePageChange('home')}
              className={
                currentPage === 'home' ? 'nav__button_active' : 'nav__button'
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
                  ? 'nav__button_active'
                  : 'nav__button'
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
                  ? 'nav__button_active'
                  : 'nav__button'
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
                currentPage === 'quiz' ? 'nav__button_active' : 'nav__button'
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
                currentPage === 'contato' ? 'nav__button_active' : 'nav__button'
              }
            >
              Contate-me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
