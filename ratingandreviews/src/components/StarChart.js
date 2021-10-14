import React from 'react'
import StarsRating from './StarsRating'

function StarChart() {
    return (
        <div>
            <p>100% of reviews recommend this product</p>
            <div className='flex' >
                <u>
                    5 stars
                </u>
                <div className="overflow-hidden h-3 mb-4 flex  " >
                    <div style={{ width: 20 }}
                        className=" flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-900">
                    </div>

                </div>
            </div>
            <div className='flex'>
                <u>
                    4 stars
                </u>
                <div className="overflow-hidden h-3 mb-4 flex ">
                    <div style={{ width: 20 }}
                        className=" flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-900">
                    </div>
                </div>
            </div>
            <div className='flex'>
                <u>
                    3 stars
                </u>
                <div className="overflow-hidden h-3 mb-4 flex " style={{ width: 50 }}>
                    <div style={{ width: 20 }}
                        className=" flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-900">
                    </div>
                </div>
            </div>
            <div className='flex' >
                <u>
                    2 stars
                </u>
                <div className="overflow-hidden h-3 mb-4 flex ">
                    <div style={{ width: 20 }}
                        className=" flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-900">
                    </div>

                </div>
            </div>
            <div className='flex'>
                <p>
                    1 star
                </p>
                <div className="overflow-hidden h-3 mb-4 flex ">

                    <div style={{ width: 20 }}
                        className=" flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-900">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StarChart
