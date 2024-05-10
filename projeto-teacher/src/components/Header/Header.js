function Header() {
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
              />
            </button>
          </div>
          <div className='header_button-container'>
            <button className='header_button'>Home</button>
            <button className='header_button'>Sobre Mim</button>
            <button className='header_button'>Sobre as aulas</button>
            <button className='header_button'>Teste seu inglês!</button>
            <button className='header_button'>Entre em contato</button>
          </div>
        </div>
        <div className='header__menu'>
          <div className='header_button-hamburger'>
            <button className='header_button'>Home</button>
            <button className='header_button'>Sobre Mim</button>
            <button className='header_button'>Sobre as aulas</button>
            <button className='header_button'>Teste seu inglês!</button>
            <button className='header_button'>Entre em contato</button>
          </div>
        </div>
        <div className='header__line' />
      </header>
    </>
  );
}

export default Header;
