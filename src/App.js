import { Fragment } from 'react';
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
import { author, company } from './Helpers';

function App() {
  const currentDate = new Date().getFullYear();

  

  return (
    <Fragment>
      <Header
        company={company}
      />

      <main>
        <Cards />
      </main>

      <Footer
        currentDate={currentDate}
        author={author}
      />
    </Fragment>
  );
}

export default App;
