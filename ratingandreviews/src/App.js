import React from 'react';
import './App.css';
import ButtonsComp from './components/ButtonsComp';
import ReviewList from './components/ReviewList';
import Header from './components/Header';
import StarChart from './components/StarChart';
import NumberStars from './components/NumberStars';


function App() {
  return (
    <div className="App">
      <p className='text-black-600'>RATING & REVIEWS</p>
      <div class="grid grid-cols-3 gap-6">
        <div class="...">
          
          <NumberStars />
        </div>
        <div class="col-span-2 ...">
          <Header />
        </div>
        <div class="...">
          <StarChart />
        </div>
        <div class="col-span-2 ...">
          <ReviewList />
        </div>
        <div class="...">5
        </div>
        <div class="col-span-2 ...">
          <ButtonsComp />
        </div>
      </div>
    </div>

  );
}

export default App;
