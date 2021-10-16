import React from 'react'

function NumberStars({ reviewData }) {
    // var average = 1

    // for (var i = 0; i < reviewData.length; i++) {
    //     average += reviewData[i].reviews
    //     return average
    // }
    return (
        <div>
            <p>RATING & REVIEWS</p>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />

            <ul className="flex mt-4">
                <p className="text-8xl  font-bold ordinal ...">

                    2

                </p>
                <div className='flex ml-4 mt-6'>

                    <li>
                        <i className="fas fa-star fa-l text-black-500 mr-1"></i>
                    </li>
                    <li>
                        <i className="fas fa-star fa-l text-black-500 mr-1"></i>
                    </li>
                    <li>
                        <i className="far fa-star fa-l text-black-500 mr-1"></i>
                    </li>
                    <li>
                        <i className="far fa-star fa-l text-black-500 mr-1"></i>
                    </li>
                    <li>
                        <i className="far fa-star fa-l text-black-500 mr-1"></i>
                    </li>
                </div>
            </ul>


        </div>
    )
}

export default NumberStars
