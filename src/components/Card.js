import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ cardInfo }) => {

  const { title, mainTechnology, technologies, about, image, urlDemo, urlCode } = cardInfo;

  return (
    <section className="col-md-4 my-2">
      <div className="card text-center bg-dark text-light animate__animated animate__fadeInUp">
        <a href={urlDemo} target="_blank" rel="noreferrer" className="over-flow-h">
          <img src={image} className="card-img-top" alt={title} loading="lazy" />
        </a>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <h5 className="card-subtitle my-2">Main: {mainTechnology}</h5>
          <h6 className="card-subtitle text-muted mb-2">Tecnologías: {technologies}</h6>
          <p className="card-text">{about}</p>
          <a href={urlDemo} className="btn btn-primary mx-2" target="_blank" rel="noreferrer">Demo</a>
          <a href={urlCode} className="btn btn-success mx-2" target="_blank" rel="noreferrer">Código</a>
        </div>
      </div>
    </section>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  image: PropTypes.string,
  urlDemo: PropTypes.string,
  urlCode: PropTypes.string
}

export default Card;