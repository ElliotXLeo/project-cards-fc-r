import React from 'react';
import { developedProjects } from '../Helpers';
import Card from './Card';

const Cards = () => {

  return (
    <section className="container">
      <div className="row align-items-start justify-content-around">
        {developedProjects.map((cardInfo) => {
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