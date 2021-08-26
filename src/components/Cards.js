import React from 'react';
import Card from './Card';

const Cards = ({ data }) => {

  return (
    <section className="container">
      <div className="row align-items-start justify-content-around">
        {data.map((cardInfo) => {
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