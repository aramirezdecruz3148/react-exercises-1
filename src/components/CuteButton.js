import React, { useState } from 'react';

function CuteButton() {
  const buttonStyles = {
    marginRight: '10px',
    marginLeft: '10px',
    background: '#EE82EE',
    color: 'white'
  };

  const tallyStyles = {
    color: '#32CD32'
  };

  const [count, setCount] = useState(0);

  return (
    <>
    <button onClick={() => setCount(count + 1)} style={buttonStyles}>She is CUTE</button>
    <span style={tallyStyles}>Cute Tally: {count}</span>
    </>
  );
}

export default CuteButton;
