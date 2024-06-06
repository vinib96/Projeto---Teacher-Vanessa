import { Link } from 'react-router-dom';
function MainQuiz() {
  return (
    <section className='main__about'>
      <div className='main__quiz-container'>
        {' '}
        <h1 className='main__quiz-title'>Teste seu inglês!.</h1>
        <h2>
          Jogue nosso quiz com questões de gramática e conhecimentos gerais 100%
          em iglês e veja o quanto consegue pontuar.
        </h2>
        <Link to='/sobremim' className='main__quiz-link'>
          Jogue aqui!
        </Link>
      </div>
    </section>
  );
}

export default MainQuiz;
