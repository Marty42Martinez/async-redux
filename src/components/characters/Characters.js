import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const characterList = characters.map((character, id) => (
    <li key={id}>
      <Character character={character} />
    </li>
  ));

  return (
    <ul>
      {characterList}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;
