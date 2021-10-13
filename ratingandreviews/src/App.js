import React from 'react';
import './App.css';
import ButtonsComp from './components/ButtonsComp';
import ReviewList from './components/ReviewList';


function App() {
  return (
    <div className="App">
      <p className='text-black-600'>RATING & REVIEWS</p>
      <ReviewList />
    </div>

  );
}

export default App;
