import { Link } from 'react-router-dom';
function Class() {
  return (
    <section className='class'>
      {' '}
      <div className='class__figure'>
        {' '}
        <h1 className='class__title'>Sobre as aulas:</h1>
      </div>
      <div className='class__main'>
        <img
          className='class__image'
          src={require('../../images/teste de imagem.png')}
        />
        <p className='class__text'>
          Ex velit duis nostrud fugiat irure minim irure Lorem. Irure aute culpa
          ad laborum sunt veniam. Occaecat ullamco commodo sit labore est irure.
          Eu aliquip commodo consectetur dolore ipsum est eu veniam ea labore.
          Id qui labore ea ex veniam aute voluptate esse consequat amet duis
          occaecat amet sint.
        </p>
      </div>
      <div className='class__main'>
        <p className='class__text'>
          Ex velit duis nostrud fugiat irure minim irure Lorem. Irure aute culpa
          ad laborum sunt veniam. Occaecat ullamco commodo sit labore est irure.
          Eu aliquip commodo consectetur dolore ipsum est eu veniam ea labore.
          Id qui labore ea ex veniam aute voluptate esse consequat amet duis
          occaecat amet sint.
        </p>
        <img
          className='class__image'
          src={require('../../images/teste de imagem.png')}
        />
      </div>
      <Link to='/quiz' className='class__link'>
        Teste seu inglês!
      </Link>
    </section>
  );
}

export default Class;
