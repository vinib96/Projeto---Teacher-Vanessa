import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Class from '../Class/Class';
import Quiz from '../Quiz/Quiz';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/sobremim' element={<About />} />
        <Route path='/sobreasaulas' element={<Class />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/contato' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
