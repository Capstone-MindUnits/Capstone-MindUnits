import React from 'react'
import StarsRating from './StarsRating'

function StarChart() {
    return (
        <div className="grid grid-cols-6 gap-5 mt-10 mx-auto">
            <div className="col-span-6 ...">100% of reviews recommended this product</div>

            <div className="... w-16 underline"> 5 stars</div>
            <div className="col-span-5 ... ">
                <div class="relative pt-2.5">
                    <div class="overflow-hidden h-2 text-xs flex ">
                        <div style={{ width: 150 }}
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                </div>
            </div>

            <div className="... w-16 underline">4 stars</div>
            <div className="col-span-5 ...">
                <div class="relative pt-2.5">
                    <div class="overflow-hidden h-2 text-xs flex ">
                        <div style={{ width: 80 }}
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                </div>
            </div>

            <div className="... w-16 underline">3 stars</div>
            <div className="col-span-5 ...">
                <div class="relative pt-2.5">
                    <div class="overflow-hidden h-2 text-xs flex ">
                        <div style={{ width: 240 }}
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                </div>
            </div>

            <div className="... w-16 underline">2 stars</div>
            <div className="col-span-5 ...">
                <div class="relative pt-2.5">
                    <div class="overflow-hidden h-2 text-xs flex ">
                        <div style={{ width: 120 }}
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                </div>
            </div>

            <div className="... w-16 underline">1 stars </div>
            <div className="col-span-5 ...">
                <div class="relative pt-2.5">
                    <div class="overflow-hidden h-2 text-xs flex ">
                        <div style={{ width: 60 }}
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}

export default StarChart
