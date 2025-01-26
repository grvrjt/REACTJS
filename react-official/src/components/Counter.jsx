import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <button onClick={handleClick}>Counter {count}</button>
    )
}

export default Counter