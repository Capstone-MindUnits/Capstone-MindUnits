import React from 'react'

function StarChart() {
    return (
        <div className="w-1/4" style={{
            float: 'left',
            top: '372px',
            position: 'absolute'
        }}>
            <div className="w-1/4">
                <u>
                    5 stars
                </u>
                <div className="overflow-hidden h-3 mb-4 flex  " >
                    <div style={{ width: 20 }}
                        className=" flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-900">
                    </div>

                </div>
            </div>
            <div className="w-1/4">
                <u>
                    4 stars
                </u>
                <div className="overflow-hidden h-3 mb-4 flex ">
                    <div style={{ width: 20 }}
                        className=" flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-900">
                    </div>
                </div>
            </div>
            <div className="w-1/4">
                <u>
                    3 stars
                </u>
                <div className="overflow-hidden h-3 mb-4 flex " style={{ width: 50 }}>
                    <div style={{ width: 20 }}
                        className=" flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-900">
                    </div>
                </div>
            </div>
            <div className="w-1/4">
                <u>
                    2 stars
                </u>
                <div className="overflow-hidden h-3 mb-4 flex ">
                    <div style={{ width: 20 }}
                        className=" flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-900">
                    </div>

                </div>
            </div>
            <div className="w-1/4" >
                <u>
                    1 star
                </u>
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
