import { Link } from 'react-router-dom';
function About() {
  return (
    <section className='about'>
      <h1 className='about__title'>Sobre mim:</h1>

      <div className='about__main'>
        <p className='about__text'>
          Ex velit duis nostrud fugiat irure minim irure Lorem. Irure aute culpa
          ad laborum sunt veniam. Occaecat ullamco commodo sit labore est irure.
          Eu aliquip commodo consectetur dolore ipsum est eu veniam ea labore.
          Id qui labore ea ex veniam aute voluptate esse consequat amet duis
          occaecat amet sint.
        </p>
        <img
          className='about__image'
          src={require('../../images/teste de imagem.png')}
        />
      </div>
      <div className='about__main'>
        <img
          className='about__image'
          src={require('../../images/teste de imagem.png')}
        />
        <p className='about__text'>
          Ex velit duis nostrud fugiat irure minim irure Lorem. Irure aute culpa
          ad laborum sunt veniam. Occaecat ullamco commodo sit labore est irure.
          Eu aliquip commodo consectetur dolore ipsum est eu veniam ea labore.
          Id qui labore ea ex veniam aute voluptate esse consequat amet duis
          occaecat amet sint.
        </p>
      </div>
      <Link to='/sobreasaulas' className='about__link'>
        Sobre as aulas
      </Link>
    </section>
  );
}

export default About;
