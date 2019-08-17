import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CuteButton from './CuteButton';
import MehButton from './MehButton';

export default class Dog extends Component {
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    weight: PropTypes.string
  }

  render() {
    const stylePennieName = {
      color: '#FFA500'
    };

    const { name, age, weight } = this.props;

    return (
    <>
      <h4 style={stylePennieName}>{name}</h4>
      <p>{age} years old</p>
      <p>{weight ? weight : ''}</p>
      <CuteButton />
      <MehButton />
    </>
    );
  }
}


