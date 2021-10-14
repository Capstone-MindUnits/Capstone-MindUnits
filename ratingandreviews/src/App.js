import React from 'react';
import './App.css';
import ButtonsComp from './components/ButtonsComp';
import ReviewList from './components/ReviewList';
import Header from './components/Header';
import StarChart from './components/StarChart';
import NumberStars from './components/NumberStars';


{/* <div className="app pr-16 pl-16">
  <div className="grid grid-cols-1 gap-4  w-3/5  mx-auto">
    <Search />
    <Qna />
    <Buttons />
  </div>
</div> */}

function App() {
  return (
    // <p className='text-black-600'>RATING & REVIEWS</p>
    <div className="grid grid-cols-3 gap-6  w-3/5  mx-auto my-16 text-gray-600">
      <div className="...">
        <NumberStars />
      </div>
      <div className="col-span-2 ...">
        <Header />
      </div>
      <div className="...">
        <StarChart />
      </div>
      <div className="col-span-2 ... mt-2 overscroll-y-contain">
        <ReviewList />


      </div>
      <div className="...">5
      </div>
      <div className="col-span-2 ...">
        <ButtonsComp />
      </div>
    </div >

  );
}

export default App;
