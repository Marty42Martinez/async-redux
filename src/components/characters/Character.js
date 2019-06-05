import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

function Character({ character }) {
  return (
    <>
      <img src={character.image} />
      <p className={styles.names}>{character.name}</p>
      <p>{character.quote}</p>
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
