import { Link } from 'react-router-dom';
function Class() {
  return (
    <section className='class'>
      {' '}
      <h1 className='class__title'>Sobre as aulas:</h1>
      <div className='class__main'>
        <img
          className='class__image'
          src={require('../../images/online.png')}
          alt='Teacher Vanessa lecionando online'
        />
        <p className='class__text'>
          Atualmente me dedico às aulas particulares, com o foco em atender às
          necessidades de cada aluno de maneira personalizada e dinâmica. Também
          ofereço a modalidade de aulas online, o que possibilita o atendimento
          a um público variado e de forma prática, sem que a qualidade do
          processo de aprendizagem seja afetada.
        </p>
      </div>
      <div className='class__main'>
        <p className='class__text'>
          O curso na modalidade presencial também funciona de forma dinâmica,
          com a utilização de livros didáticos das editoras Cambridge ou Oxford
          e selecionados de acordo com o nível do aluno.{' '}
        </p>
        <img
          className='class__image'
          src={require('../../images/presencial.png')}
          alt='Teacher Vanessa lecionando'
        />
      </div>
      <div className='class__main'>
        <img
          className='class__image'
          src={require('../../images/music.png')}
          alt='Teacher Vanessa tocando violão'
        />
        <p className='class__text'>
          Para a prática das quatro habilidades principais da língua inglesa
          (Speaking, Listening, Reading and Writing), são utilizadas atividades
          com músicas, contos, livros paradidáticos da editora Penguin Readers,
          vídeos e séries a fim de que o aluno se familiarize com a estrutura
          assim como a cultura que permeia o idioma.
        </p>
      </div>
      <Link to='/quiz' className='class__link'>
        Teste seu inglês!
      </Link>
    </section>
  );
}

export default Class;
