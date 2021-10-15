import React from 'react'
import { RadioGroup, Radio } from 'rsuite'
import { Form } from 'rsuite';

function Slider() {
    return (
        <div className='flex'>
            <RadioGroup name="radioList" inline>
                <Radio value="A">Item A</Radio>
                <Radio value="B">Item B</Radio>
                <Radio value="C">Item C</Radio>
                <Radio value="D" >Item D</Radio>
            </RadioGroup>

        </div>
    )
}

export default Slider
