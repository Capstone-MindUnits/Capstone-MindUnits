import React from 'react'

function Header() {
    return (
        <div className='tile-header font-bold'>
            125 reviews ,sorted by <select className="underline ml-3 font-bold">
                <option>relevance</option>
                <option>helpful</option>
                <option>newest</option>
            </select>
        </div>
    )
}

export default Header
