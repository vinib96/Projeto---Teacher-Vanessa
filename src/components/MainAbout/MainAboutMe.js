import { Link } from 'react-router-dom';
function MainAbout() {
  return (
    <section className='main__about'>
      <div className='main__container'>
        {' '}
        <div className=' main__about-highlights'>
          <img
            src={require('../../images/sobremim main.png')}
            alt='chapeu de formatura sobre livros'
            className='main__about-image'
          />
          {/* <div className='main__highlights-info'>
            <div className='main__highlights-toeic'>
              <img
                src={require('../../images/toeic.png')}
                className='main__toeic-logo'
                alt='Logo do TOEIC'
              />
              <p className='main__highlights-text'>Treinamento autorizado</p>
            </div>

            <p className='main__highlights-text'>
              <span className='main__highlights-icon'>+</span>{' '}
              <div className='main__highlights-text_wrap'>
                <span className='main__highlights-text_span'>15</span>{' '}
                <span>anos de experiência</span>
              </div>
            </p>
            <p className='main__highlights-text'>
              <span className='main__highlights-icon'>+</span>{' '}
              <div className='main__highlights-text_wrap'>
                <span className='main__highlights-text_span'>100</span>{' '}
                <span>alunos</span>
              </div>
            </p>
          </div> */}
        </div>
        <div className='main__about-title-container'>
          <h1 className='main__about-title'>
            Veja como minha experiência pode ajudar você a dominar o inglês.
          </h1>
          <h2>Conheça mais sobre minha formação academica e certificações:</h2>
          <Link
            to='/sobremim'
            className='main__about-button main__about-custom '
          >
            <span>Saiba mais!</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MainAbout;
