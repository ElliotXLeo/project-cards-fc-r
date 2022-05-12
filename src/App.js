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
    const api = await fetch('https://elliotxleo.github.io/api-json-public/json/portafolio-elliot.json');
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
            <Header />

            <main>
              <Cards
                data={data.projects}
              />
            </main>

            <Footer
              currentDate={currentDate}
              author={data.profile.name}
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
