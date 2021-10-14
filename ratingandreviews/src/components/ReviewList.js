import React from 'react'
import Header from './Header'
import StarChart from './StarChart'
import StarsRating from './StarsRating'
import ButtonsComp from './ButtonsComp'

function ReviewList() {
    return (
        <div>
            <div  >
                <div className='review-container'>
                    <div className='star-rating'>
                        <div >
                            User1234, January 1,2019
                        </div>
                        <StarsRating />
                        <div>
                            <p className='review-summary'> <b>review summary</b></p>
                        </div>
                        <div>
                            <p>Our mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons - all freely available to the public. We also have thousands of freeCodeCamp study groups around the world.</p>
                        </div>
                        <div>
  
                            I recommend this product</div>
                        <div><b>Response:</b>
                            <p>Marzipan danish jelly beans gummy bears apple pie cheescake topping biscuit sesame snaps</p>
                        </div>

                        <div className="details mt-2 flex ">
                            <p className=" mr-4 text-gray-600">
                                Helpful?
                                <a href="#" className="underline ml-2 mr-1 ">
                                    Yes
                                </a>
                                (0)
                            </p>
                            <p className=" mr-4 text-gray-600">|</p>
                            <p>
                                <a href="#" className="underline text-gray-600 ">
                                    Report
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className='line' >
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ReviewList
