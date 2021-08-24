import React from 'react';
import Card from './Card';

const Cards = () => {

  const cardsInfo = [
    {
      id: 1,
      title: 'Personal Web Responsive YM',
      mainTechnology: 'HTML',
      technologies: 'HTML, CSS, JavaScript, BEM, Mobile First, Maquetado Responsive, flexbox y grid',
      about: 'Página Web Personal Responsiva donde el profesional detalla lo más relevante de su carrera, como su perfil, proyectos realizados, experiencia obtenida, habilidades desarrolladas y formas de contactarlo.',
      image: 'https://i.imgur.com/nAjUlNq.png',
      urlDemo: 'https://elliotxleo.github.io/personal-web-responsive-ym/',
      urlCode: 'https://github.com/ElliotXLeo/personal-web-responsive-ym'
    },
    {
      id: 2,
      title: 'Pokedex Fetch PokéApi JS I',
      mainTechnology: 'JavaScript',
      technologies: 'HTML, CSS, JavaScript, PokéApi, Bootstrap y Google Fonts',
      about: 'Aplicación de listado de Pokémons con paginación. Esta aplicación consume la API PokéApi.',
      image: 'https://raw.githubusercontent.com/ElliotXLeo/pokedex-fetch-pokeapi-js-i/main/img/demo.png',
      urlDemo: 'https://elliotxleo.github.io/pokedex-fetch-pokeapi-js-i/',
      urlCode: 'https://github.com/ElliotXLeo/pokedex-fetch-pokeapi-js-i'
    },
    {
      id: 3,
      title: 'Rick and Morty API Personajes',
      mainTechnology: 'React',
      technologies: 'Desarrollado con React, Webpack, Babel, SASS, HTML, CSS, JavaScript',
      about: 'Aplicación de listado de Personajes de Rick and Morty. Esta aplicación consume la API The Rick and Morty API.',
      image: 'https://i.imgur.com/iCkFoGL.png',
      urlDemo: 'https://rickandmortypersonajes.netlify.app',
      urlCode: 'https://github.com/ElliotXLeo/rick-and-morty-api-p'
    },
    {
      id: 4,
      title: 'Control Presupuestario A',
      mainTechnology: 'Angular',
      technologies: 'Angular, TypeScript, HTML, CSS, JavaScript',
      about: 'Aplicación de control presupuestario el cuál te permite calcular tu presupuesto disponible en base a tus movimientos de ingresos y egresos.',
      image: 'https://i.imgur.com/YjEC1F4.png',
      urlDemo: 'https://controlpresupuestarioa.netlify.app',
      urlCode: 'https://github.com/ElliotXLeo/control-presupuestario-a'
    },
    {
      id: 5,
      title: 'Huayllay Aventura',
      mainTechnology: 'Unity 5',
      technologies: 'Unity 5, C#',
      about: 'Videojuego de categoría endless runner que consiste en esquivar las llamas que vienen a velocidad a chocar con el personaje principal. El juego aumenta de dificultad de manera progresiva.',
      image: 'https://raw.githubusercontent.com/ElliotXLeo/Huallay-Aventura/main/Capturas/Web.png',
      urlDemo: 'https://elliotxleo.github.io/Huallay-Aventura/Despliegue/Huayllay%20Aventura%20Web/',
      urlCode: 'https://github.com/ElliotXLeo/Huallay-Aventura'
    },
    {
      id: 6,
      title: 'Clothing Store Tu Estilo R',
      mainTechnology: 'React',
      technologies: 'React, HTML, CSS, JavaScript, Bootstrap, SweetAler2, Animate.css',
      about: 'Aplicación que lista prendas de vestir personalizadas. Se puede agregar y eliminar del carrito para finalmente confirmar la compra. Al confirmar te podrás contactar con el vendedor.',
      image: 'https://i.imgur.com/LyHp8Et.png',
      urlDemo: 'https://clothingstoretuestilor.netlify.app',
      urlCode: 'https://github.com/ElliotXLeo/clothing-store-tu-estilo-r'
    }
  ];

  return (
    <section className="container">
      <div className="row align-items-start">
        {cardsInfo.map((cardInfo) => {
          return (
            <Card
              key={cardInfo.id}
              cardInfo={cardInfo}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Cards;