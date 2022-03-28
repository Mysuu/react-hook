import React, { useState, useEffect } from 'react'

function CountdownHook() {
    const [count, setCount] = useState('10')

    useEffect(() => {
        if (count === 0) {
            return
        }
        let timer = setInterval(() => {
            setCount(count - 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])

    return (
        <div>Hook Countdown: {count}</div>
    )
}

export default CountdownHook