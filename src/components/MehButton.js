import React, { useState } from 'react';

function MehButton() {
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
    <button onClick={() => setCount(count + 1)} style={buttonStyles}>Meh, she is okay...</button>
    <span style={tallyStyles}>Meh Tally: {count}</span>
    </>
  );
}

export default MehButton;
