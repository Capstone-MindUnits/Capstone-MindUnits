import React from 'react'

function Header() {
    return (
        <div className='tile-header'>
            125 reviews , sorted by
            <select className="underline ml-3">
                <option>relevance</option>
                <option>helpful</option>
                <option>newest</option>
            </select>
            <br></br>
            <br></br>
        </div>
    )
}

export default Header
