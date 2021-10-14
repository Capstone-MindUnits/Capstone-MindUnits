import React from 'react';
import './App.css';
import ButtonsComp from './components/ButtonsComp';
import ReviewList from './components/ReviewList';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <p className='text-black-600'>RATING & REVIEWS</p>
      {/* <ReviewList /> */}
      <div class="grid grid-cols-3 gap-6">
        <div class="...">1
          NUMBER AND STARS
        </div>
        <div class="col-span-2 ...">
          <Header />
        </div>
        <div class="...">3</div>
        <div class="col-span-2 ...">
          <ReviewList/>
        </div>
        <div class="...">5</div>
        <div class="col-span-2 ...">7</div>
      </div>
    </div>

  );
}

export default App;
