import { Fragment } from 'react';
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const currentDate = new Date().getFullYear();

  return (
    <Fragment>
      <Header
        title='Proyectos desarrollados'
      />

      <main>
        <Cards />
      </main>

      <Footer
        currentDate={currentDate}
      />
    </Fragment>
  );
}

export default App;
