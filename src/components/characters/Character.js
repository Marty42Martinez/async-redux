import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  return (
    <>
      <img src={character.image} />
      <p>{character.quote}</p>
      <p>{character.name}</p>
    </>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default Character;
