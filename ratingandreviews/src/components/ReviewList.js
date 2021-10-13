import React from 'react'
import Header from './Header'
import StarChart from './StarChart'
import StarsRating from './StarsRating'
import ButtonsComp from './ButtonsComp'

function ReviewList() {
    return (
        <div>
            <div className='right-side' style={{ marginLeft: '500px' }} >
                <Header />
                <div className='review-container'>
                    <div className='star-rating'>
                        <div style={{ float: 'right' }}>
                            User1234, January 1,2019
                        </div>
                        <StarsRating />
                        <div className='review-summary'>
                            <p> <b>review summary</b></p>
                        </div>
                        <div className='flex'>
                            to use cloudinary for the review body so i can upload images
                        </div>

                    </div>

                    <div className='line' >
                    </div>
                </div>
            </div>
            <StarChart />




            <ButtonsComp />


        </div>
    )
}

export default ReviewList
