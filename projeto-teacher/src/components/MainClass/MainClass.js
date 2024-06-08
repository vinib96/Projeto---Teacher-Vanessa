import { Link } from 'react-router-dom';
import Tag from '../Tag/Tag';
function MainClass() {
  return (
    <section className='main__class'>
      <div className='main__class-container'>
        {' '}
        <div className='main__class-title-container'>
          <h1 className='main__class-title'>
            Aulas personalizadas para cada aluno
          </h1>
          <h2 className='main__class-subtitle'>
            Saiba mais{' '}
            <Link className='main__class-link' to='/sobreasaulas'>
              clicando aqui
            </Link>{' '}
          </h2>
        </div>
        <div className=' main__class-highlights'>
          <Tag />
        </div>
      </div>
    </section>
  );
}

export default MainClass;
