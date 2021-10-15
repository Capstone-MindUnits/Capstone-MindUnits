import React from 'react'
import StarsRating from './StarsRating'

function StarChart() {
    return (
        <div className="grid grid-cols-6 gap-4 mt-10 mx-auto">
            <div className="col-span-6 ...">100% of reviews recommended this product</div>

            <div className="... w-16 underline"> 5 stars</div>
            <div className="col-span-5 ... ">
                <div className="relative pt-2.5">
                    <div className="overflow-hidden h-2 text-xs flex ">
                        <div style={{ width: 150 }}
                            className=" shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                </div>
            </div>

            <div className="... w-16 underline">4 stars</div>
            <div className="col-span-5 ...">
                <div className="relative pt-2.5">
                    <div className="overflow-hidden h-2 text-xs flex ">
                        <div style={{ width: 80 }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                </div>
            </div>

            <div className="... w-16 underline">3 stars</div>
            <div className="col-span-5 ...">
                <div className="relative pt-2.5">
                    <div className="overflow-hidden h-2 text-xs flex ">
                        <div style={{ width: 200 }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                </div>
            </div>

            <div className="... w-16 underline">2 stars</div>
            <div className="col-span-5 ...">
                <div className="relative pt-2.5">
                    <div className="overflow-hidden h-2 text-xs flex ">
                        <div style={{ width: 150 }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                </div>
            </div>

            <div className="... w-16 underline">1 stars </div>
            <div className="col-span-5 ...">
                <div className="relative pt-2.5">
                    <div className="overflow-hidden h-2 text-xs flex ">
                        <div style={{ width: 60 }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}

export default StarChart
