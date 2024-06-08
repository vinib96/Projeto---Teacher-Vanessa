import { Link } from 'react-router-dom';
function About() {
  return (
    <section className='about'>
      <h1 className='about__title'>Sobre mim:</h1>

      <div className='about__main'>
        <p className='about__text about__text-first'>
          Meu nome é Vanessa, mas meus alunos me conhecem com “Teacher Van”. Sou
          formada em Letras – Inglês pela Universidade Metodista de Piracicaba
          (UNIMEP), possuo pós-graduação em Língua inglesa e Tradução (UNIMEP) e
          Mestrado em Comunicação e Educação pela Universidade de São Paulo
          (USP- ESALQ).
        </p>
        <img
          className='about__image about__image-first'
          src={require('../../images/about-one.png')}
          alt='Imagem da Teacher Vanessa'
        />
      </div>
      <div className='about__main'>
        <img
          className='about__image'
          src={require('../../images/about-two.png')}
          alt='Imagem da Teacher Vanessa'
        />
        <p className='about__text about__text-second'>
          Também possuo a certificação internacional para a preparação dos
          alunos para o teste de proficiência em língua inglesa “TOEIC – Test of
          English for International Communication”. Tenho uma experiência de
          mais de 15 anos com o ensino de língua inglesa, tendo trabalhado como
          professora em escolas de idioma, nos ensinos fundamental e médio, em
          universidades e também na modalidade de aulas particulares.
        </p>
      </div>
      <Link to='/sobreasaulas' className='about__link'>
        Sobre as aulas
      </Link>
    </section>
  );
}

export default About;
