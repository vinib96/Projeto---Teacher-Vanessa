import { React } from 'react';

import Maps from '../Maps/Maps';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__columns'>
        <div className='footer__column footer__column_content_logo'>
          <img
            src={require('../../images/footer-logo.png')}
            alt='Logo da
            Teacher Vanessa'
            className='logo logo_place_footer'
          />
          <span className='footer__logo-text'>Teacher Vanessa</span>
        </div>

        <div className='footer__column footer__column_content_adress'>
          <h3 className='footer__column-heading'>Localização</h3>
          <Maps />
        </div>
        <div className='footer__column footer__column_content_copyright'>
          <h3 className='footer__author'>(c) 2024 Vinícius Bueno</h3>
        </div>
        <div className='footer__column footer__column_content_about'>
          <h3 className='footer__column-heading'>Horário das aulas*:</h3>
          <p className='footer__column-text'>
            De segunda a quinta, das 06h30 às 21h00
          </p>
          <p className='footer__column-text'>Sexta-feira, das 07h00 às 15h00</p>
          <p className='footer__column-text'>
            *Mediante disponibilidade de horário
          </p>
        </div>
        <div className='footer__column footer__column_content_social'>
          <h3 className='footer__column-heading'>Mídia social</h3>
          <ul className='footer__list'>
            <li>
              <a
                className='footer__column-link'
                href='https://www.facebook.com/vancsbueno'
              >
                <img
                  className='footer__social-icons'
                  src={require('../../images/facebook_white.png')}
                  alt='ícone do Facebook'
                />
                Facebook
              </a>
            </li>
            <li>
              <a
                className='footer__column-link'
                href='https://www.instagram.com/vancsbueno'
              >
                <img
                  className='footer__social-icons'
                  src={require('../../images/instagram_white.png')}
                  alt='ícone do Instagram'
                />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className='footer__columns'>
        <div className='footer__column footer__column_content_copyright'>
          <img
            className='logo logo_place_footer'
            src={require('../../images/footer-logo.png')}
            alt='Logo da Teacher Vanessa'
          />
          <h3 className='footer__author'>(c) 2024 Vinícius Bueno</h3>
          <div className='footer__column footer__column_content_adress'>
            <h3 className='footer__column-heading'>Localização</h3>
            <Maps />
          </div>
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
              <a
                className='footer__column-link'
                href='https://www.facebook.com/vancsbueno'
              >
                <img
                  className='footer__social-icons'
                  src={require('../../images/facebook_white.png')}
                  alt='ícone do Facebook'
                />
                Facebook
              </a>
            </li>
            <li>
              <a className='footer__column-link' href='#'>
                <img
                  className='footer__social-icons'
                  src={require('../../images/instagram_white.png')}
                  alt='ícone do Instagram'
                />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
