import React from 'react';
import Card from './Card';

const Cards = () => {

  const cardsInfo = [
    {
      id: 1,
      title: 'Personal Web Responsive YM',
      about: 'Página Web Personal Responsiva donde el profesional detalla lo más relevante de su carrera, como su perfil y metas, experiencia obtenida, habilidades desarrolladas y formas de contactarlo. Desarrollada con BEM, Mobile First, Maquetado Responsive, flexbox y grid.',
      image: 'https://i.imgur.com/bbkWmes.png',
      urlDemo: 'https://elliotxleo.github.io/personal-web-responsive-ym/',
      urlCode: 'https://github.com/ElliotXLeo/personal-web-responsive-ym'
    },
    {
      id: 2,
      title: 'Pokedex Fetch PokéApi JS I',
      about: 'Aplicación de listado de Pokémons con paginación. Esta aplicación consume la PokéApi. Desarrollada con Bootstrap y fuentes de Google Fonts.',
      image: 'https://i.imgur.com/iCkFoGL.png',
      urlDemo: 'https://elliotxleo.github.io/pokedex-fetch-pokeapi-js-i/',
      urlCode: 'https://github.com/ElliotXLeo/pokedex-fetch-pokeapi-js-i'
    },
    {
      id: 3,
      title: 'Rick and Morty API Personajes',
      about: 'Aplicación de listado de Personajes de Rick and Morty. Esta aplicación consume la API The Rick and Morty API. Desarrollado con React, Webpack, Babel y SASS.',
      image: 'https://raw.githubusercontent.com/ElliotXLeo/pokedex-fetch-pokeapi-js-i/main/img/demo.png',
      urlDemo: 'https://rickandmortypersonajes.netlify.app',
      urlCode: 'https://github.com/ElliotXLeo/rick-and-morty-api-p'
    }
  ];

  console.log(cardsInfo);

  return (
    <section className="container d-flex justify-content-center h-100 align-items-center">
      <div className="row">
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