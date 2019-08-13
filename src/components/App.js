import React from 'react';
import Dog from './Dog';
import PuppyPics from './PuppyPics';

export default function App() {
  return (
    <>
      <h2>My Puppy</h2>
      <PuppyPics />
      <Dog name='Pennie' age={7} weight='13lbs' />
    </>
  );
}
