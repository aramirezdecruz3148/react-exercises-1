import React, { Component } from 'react';

export default class CuteButton extends Component {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() { 
    const buttonStyles = {
      marginRight: '10px',
      marginLeft: '10px',
      background: '#EE82EE',
      color: 'white'
    };

    const tallyStyles = {
      color: '#32CD32'
    };

    return ( 
      <>
        <button onClick={this.handleClick} style={buttonStyles}>She is CUTE</button>
        <span style={tallyStyles}>Cute Tally: {this.state.count}</span>
      </>
    );
  }
}
