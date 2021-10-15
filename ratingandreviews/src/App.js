import React from 'react';
import './App.css';
import ButtonsComp from './components/ButtonsComp';
import ReviewList from './components/ReviewList';
import Header from './components/Header';
import StarChart from './components/StarChart';
import NumberStars from './components/NumberStars';
import Characteristics from './components/Characteristics';




function App() {
  return (
    // <p className='text-black-600'>RATING & REVIEWS</p>
    <div className="grid grid-cols-3 gap-6  w-3/5  mx-auto text-gray-600 text-xs">
      <div className="...">
        <NumberStars />
      </div>
      <div className="col-span-2 ...">
        <Header />
      </div>
      <div className="..." style={{ height: '400px' }}>
        <StarChart />
        <div className="... mt-10" style={{ height: '555px' }}>
          <Characteristics />
        </div>
      </div>
      <div className="col-span-2 ... mt-2 overscroll-y-contain">
        <ReviewList />


      </div>
      <div className="col-span-2 ... ml-60" >
        <ButtonsComp />
      </div>
    </div >

  );
}

export default App;
