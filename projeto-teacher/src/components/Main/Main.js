import { Link } from 'react-router-dom';
function Main() {
  return (
    <section className='main'>
      <div className='main__container'>
        {' '}
        <div className='main__title-container'>
          <h1 className='main__title'>
            Desbloqueie seu potencial e aprenda inglês de forma personalizada
          </h1>
          <h2>
            In labore nulla et quis non qui non fugiat sunt do quis laborum
            tempor. Sit do sint aliquip cillum exercitation. Irure id proident
            reprehenderit duis laborum voluptate ut incididunt est cillum in
            mollit ad ad.
          </h2>
        </div>
        <img
          src={require('../../images/teste de imagem.png')}
          alt='Teste'
          className='main__image'
        />
      </div>
      <Link to='/sobremim' className='main__link'>
        Sobre mim
      </Link>
    </section>
  );
}

export default Main;
