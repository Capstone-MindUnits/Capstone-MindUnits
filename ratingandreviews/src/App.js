import React from 'react';
import './App.css';
import ButtonsComp from './components/ButtonsComp';
import ReviewList from './components/ReviewList';
import Header from './components/Header';
import StarChart from './components/StarChart';
import NumberStars from './components/NumberStars';
import Characteristics from './components/Characteristics';
import axios from 'axios';
import config from './config';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []

    }
  }


  componentDidMount() {
    // let options = {
    //   url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products`,

    //   headers: {
    //     'Authorization': `${config.TOKEN}`
    //   }
    // };

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=40344', {
      headers: {
        authorization: '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'
      }
    })
      .then((data) => {
        console.log(data.data)
      })
  }
  render() {
    return (
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
          <ReviewList  />
        </div>
        <div className="col-span-2 ... ml-60" >
          <ButtonsComp />
        </div>
      </div >
    )
  }
}




export default App;
