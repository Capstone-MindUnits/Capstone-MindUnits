import React from 'react'

function NumberStars({ reviewData }) {
    // var average = 1

    // for (var i = 0; i < reviewData.length; i++) {
    //     average += reviewData[i].reviews
    //     return average
    // }
    console.log('reviewwwwwwwwwwww', reviewData)
    // for (var i = 0; i < reviewData.length; i++) {
    //     // starsArray.push(reviewData.rating)
    // }
    const starsArray = []
    var average = 0
    var total = 0
    if (reviewData) {
        for (var i = 0; i < reviewData.length; i++) {
            starsArray.push(reviewData[i].rating)
            total += starsArray[i]
            console.log(total)
            average = Math.ceil(total / starsArray.length)
        }
    }
    // { reviewData && reviewData.map((review)=>{
    console.log('starrrrrrrrrr', starsArray)
    // }) }
    return (
        <div>
            <p>RATING & REVIEWS</p>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />

            <ul className="flex mt-4">
                <p className="text-8xl  font-bold ordinal ...">

                    {average}

                </p>
                <div className='flex ml-4 mt-6'>
                    {starsArray.map((_, index) => {
                        return (
                            <ul className="flex">
                                <li >
                                    <i className="fas fa-star fa-sm text-black-500 mr-1"> </i>
                                </li>

                            </ul>
                        )
                    })}
                </div>
            </ul>


        </div>
    )
}

export default NumberStars
