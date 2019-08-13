import React, { useState } from 'react';
import img from '../assets/Pennie.jpg';
import img2 from '../assets/Pennie2.jpg';
import img3 from '../assets/Pennie3.jpg';
import img4 from '../assets/Pennie4.jpg';

const puppyArray = [img, img2, img3, img4];

//make either arrow become disabled 

function PuppyPics() {
  const style = {
    width: '300px',
    height: '300px',
    border: 'solid #FFFF99 5px'
  };

  const [countObj, setCount] = useState({
    count: 0,
    next: puppyArray.length <= 1, //just making a false statement here which will set this value to false
    previous: true
  });

  const incrementNewCount = countObj.count + 1;
  const decrementNewCount = countObj.count - 1;

  const updateState = (updatedCount) => {
    setCount({
      count: updatedCount,
      next: updatedCount >= puppyArray.length - 1,
      previous: updatedCount === 0,
    });
  };

  return (
    <>
      <button disabled={countObj.previous} onClick={() => updateState(decrementNewCount)}>⇦</button>
      <img style={style} src={puppyArray[countObj.count]}/>
      <button disabled={countObj.next} onClick={() => updateState(incrementNewCount)}>⇨</button>
    </>
  );
}

export default PuppyPics;
