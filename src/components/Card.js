import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ cardInfo }) => {

  const { title, about, image, urlDemo, urlCode } = cardInfo;

  return (
    <div className="col-md-4 my-2" >
      <section>
        <div className="card text-center bg-dark text-light animate__animated animate__fadeInUp">
          <a href={urlDemo} target="_blank" rel="noreferrer" className="over-flow-h">
            <img src={image} className="card-img-top" alt={title} />
          </a>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{about}</p>
            <a href={urlDemo} className="btn btn-primary mx-2" target="_blank" rel="noreferrer">Demo</a>
            <a href={urlCode} className="btn btn-success mx-2" target="_blank" rel="noreferrer">Código</a>
          </div>
        </div>
      </section>
    </div>
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