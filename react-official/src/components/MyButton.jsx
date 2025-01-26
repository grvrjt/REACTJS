import React from 'react'

const MyButton = ({ count, handleClick }) => {
    return (
        <button onClick={handleClick}>MyButton {count}</button>
    )
}

export default MyButton