import React from 'react';
import PropTypes from 'prop-types';
import CuteButton from './CuteButton';
import MehButton from './MehButton';

function Dog({ name, age, weight }) {
  const stylePenieName = {
    color: '#FFA500'
  };

  return (
    <>
    <h4 style={stylePenieName}>{name}</h4>
    <p>{age} years old</p>
    <p>{weight ? weight : ''}</p>
    <CuteButton />
    <MehButton />
    </>
  );
}

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.string
};

export default Dog;
