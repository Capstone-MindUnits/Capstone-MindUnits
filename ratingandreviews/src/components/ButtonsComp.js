import React from 'react'
// import Popup from 'reactjs-popup';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function ButtonsComp({ moreReviews, hideButtonFunction }) {
    // var toggle = reviewButton
    return (
        <div className='grid-row gap-3  ml-40  flex'>
            <button
                onClick={() => moreReviews()}
                className='truncate md:overflow-clip ... font-semibold py-4 px-3 border border-black '>MORE REVIEWS</button>

            <Popup
                trigger={
                    <button className='flex truncate md:overflow-clip ... font-semibold py-4 px-6  border border-black  inline-block '>
                        <p className='mt-1'>ADD A REVIEW</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                }
                modal
            >
                <div class="py-12 ml-12 ">
                    <h2 class="text-2xl font-bold text-gray-700">
                        Submit Your Answer
                    </h2>
                    <p class="mt-2 text-lg text-gray-600">
                        'Product Name':'Question Body'
                    </p>
                    <div class="mt-8 max-w-md">
                        <div class="grid grid-cols-1 gap-6">
                            <label class="block">
                                <span class="text-gray-700">Answer *</span>
                                <textarea
                                    class="mt-1 block w-full"
                                    rows="3"
                                    placeholder="Your Answer..."
                                    spellcheck="false"
                                ></textarea>
                            </label>
                            <label class="block">
                                <span class="text-gray-700">Nickame *</span>
                                <input
                                    type="text"
                                    class="mt-1 block w-full"
                                    placeholder="Your Nickname..."
                                />
                            </label>
                            <label class="block">
                                <span class="text-gray-700">Email *</span>
                                <input
                                    type="email"
                                    class="mt-1 block w-full"
                                    placeholder="Your email..."
                                />
                            </label>
                            <button className="w-48 h-12 flex flex-row items-center border border-gray-600">
                                <p className="font-sans font-bold  text-base ml-4 mr-2 text-gray-600">
                                    Upload Your Photos
                                </p>
                            </button>
                            <button className="w-24 h-12 flex flex-row items-center border border-gray-600">
                                <p className="font-sans font-bold  text-base ml-4 mr-2 text-gray-600">
                                    SUBMIT
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </Popup>

        </div>





    )
}

export default ButtonsComp
