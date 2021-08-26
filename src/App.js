import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';

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
          <div className="contenedor-spinner">
            <div className="contenedor-spinner__spinner">
              <Loading />
            </div>
          </div>
        )
      }
    </Fragment>
  );
}

export default App;
