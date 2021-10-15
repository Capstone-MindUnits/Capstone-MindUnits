import React from 'react';
import './App.css';
import ButtonsComp from './components/ButtonsComp';
import ReviewList from './components/ReviewList';
import Header from './components/Header';
import StarChart from './components/StarChart';
import NumberStars from './components/NumberStars';
import Characteristics from './components/Characteristics';
import axios from 'axios';
import config from './config/config';
import $ from 'jquery'
import ReviewAllList from './components/ReviewAllList'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      view: ''

    }
  }


  componentDidMount() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=40344', {
      headers: {
        authorization: `${config.TOKEN}`
      }
    }).then((data) => {
      this.setState({
        reviews: data.data
      })
    })
  }

  changeView() {
    this.setState({
      view: 'allreview'
    })

  }
  //a function to render all the reviews on click after changing the view 
  renderView() {
    if (this.state.view === '') {
      return <ReviewList reviewData={this.state.reviews.results} />
    }

    if (this.state.view === 'allreview') {
      return <ReviewAllList reviewData={this.state.reviews.results} />
    }

  }

  render() {
    console.log(this.state)
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

          {this.renderView()}
        </div>
        <div className="col-span-2 ... ml-60" >
          <ButtonsComp changeView={this.changeView.bind(this)} />
        </div>
      </div >
    )
  }
}




export default App;
