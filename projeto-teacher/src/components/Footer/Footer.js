import { React, useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [currentPage, setCurrentPage] = useState('');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <footer className='footer'>
      <div className='footer__columns'>
        <div className='footer__column footer__column_content_copyright'>
          <img
            className='logo logo_place_footer'
            src=''
            alt='Logo da Practium'
          />
          <h3 className='footer__author'>(c) 2024 Vinícius Bueno</h3>
        </div>
        <div className='footer__column footer__column_content_about'>
          <h3 className='footer__column-heading'>Sobre a Teacher Vanessa</h3>
          <ul className='footer__list'>
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
        </div>
        <div className='footer__column footer__column_content_social'>
          <h3 className='footer__column-heading'>Mídia social</h3>
          <ul className='footer__list'>
            <li>
              <a className='footer__column-link' href='#'>
                <img
                  className='footer__social-icons'
                  src='./images/facebook_white.svg'
                  alt='ícone do Facebook'
                />
                Facebook
              </a>
            </li>
            <li>
              <a className='footer__column-link' href='#'>
                <img
                  className='footer__social-icons'
                  src='./images/instagram_white.svg'
                  alt='ícone do Instagram'
                />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
