import React from 'react'

function NumberStars() {
    return (
        <div>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />

            <ul className="flex ">
                <p className="text-6xl  ordinal ...">2</p>
                <li>
                    <i className="fas fa-star fa-sm text-black-500 mr-1"></i>
                </li>
                <li>
                    <i className="fas fa-star fa-sm text-black-500 mr-1"></i>
                </li>
                <li>
                    <i className="far fa-star fa-sm text-black-500 mr-1"></i>
                </li>
                <li>
                    <i className="far fa-star fa-sm text-black-500 mr-1"></i>
                </li>
                <li>
                    <i className="far fa-star fa-sm text-black-500 mr-1"></i>
                </li>
            </ul>


        </div>
    )
}

export default NumberStars
