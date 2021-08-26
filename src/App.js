import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  const currentDate = new Date().getFullYear();
  const [data, guardarData] = useState();

  const consultarApi = async () => {
    const api = await fetch('https://elliotxleo.github.io/public-api/json/react-cards-bootstrap-fc.json')
    const data = await api.json();
    guardarData(data);
  }

  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <Fragment>
      {data
        ? (
          <Fragment>
            <Header
              company={data.company}
            />

            <main>
              <Cards
                data={data.data}
              />
            </main>

            <Footer
              currentDate={currentDate}
              author={data.author}
            />
          </Fragment>
        )
        : (
          <div className="body__spinner--centrado">💫🌌❤🌌💫</div>
        )
      }
    </Fragment>
  );
}

export default App;
