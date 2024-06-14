import MainAbout from '../MainAbout/MainAboutMe';
import MainClass from '../MainClass/MainClass';
import MainQuiz from '../MainQuiz/MainQuiz';
function Main() {
  return (
    <>
      {' '}
      <section className='main'>
        <div className='main__container'>
          {' '}
          <div className='main__title-container'>
            <h1 className='main__title'>
              Desbloqueie seu{' '}
              <span className='main__span'>
                potencial
                <img
                  src={require('../../images/Vector 6.png')}
                  alt='vetor amarelo'
                />
              </span>{' '}
              e aprenda inglês de forma personalizada
            </h1>
            <h2>
              Com a ajuda da Teacher Vanessa, você vai perceber que aprender um
              novo idioma pode ser divertido!
            </h2>
          </div>
          <div className=' main__highlights'>
            <img
              src={require('../../images/main.png')}
              alt='Imagem da Teacher Vanessa'
              className='main__image'
            />
            <div className='main__highlights-info'>
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
                <span className='main__highlights-text_wrap'>
                  <span className='main__highlights-text_span'>15</span>{' '}
                  <span>anos de experiência</span>
                </span>
              </p>
              <p className='main__highlights-text'>
                <span className='main__highlights-icon'>+</span>{' '}
                <span className='main__highlights-text_wrap'>
                  <span className='main__highlights-text_span'>100</span>{' '}
                  <span>alunos</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <MainAbout />
      <MainClass />
      <MainQuiz />
    </>
  );
}

export default Main;
