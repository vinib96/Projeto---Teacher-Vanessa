import { Link } from 'react-router-dom';
function Main() {
  return (
    <section className='main'>
      <div className='main__container'>
        {' '}
        <div className='main__title-container'>
          <h1 className='main__title'>
            Desbloqueie seu{' '}
            <span className='main__span'>
              potencial
              <img src={require('../../images/Vector 6.png')}></img>
            </span>{' '}
            e aprenda inglês de forma personalizada
          </h1>
          <h2>
            In labore nulla et quis non qui non fugiat sunt do quis laborum
            tempor. Sit do sint aliquip cillum exercitation. Irure id proident
            reprehenderit duis laborum voluptate ut incididunt est cillum in
            mollit ad ad.
          </h2>
          <Link to='/sobremim' className='main__link'>
            Saiba mais!
          </Link>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
