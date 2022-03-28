import React from 'react'
import CountdownClass from './CountdownClass'
import CountdownHook from './CountdownHook'

function Countdown() {
    const onTimesup = () => {
        // alert('hết giờ')
    }
    return (
        <div>
            <CountdownClass onTimesup={onTimesup} />
            <span>-----------</span>
            <CountdownHook />
        </div>
    )
}

export default Countdown