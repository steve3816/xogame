import React, { useState } from 'react'

const Square = ({onHandleClick ,value}) => {


    return (
        <div>
            <button className="square" onClick={ () => !value && onHandleClick()}>{value}</button>
        </div>
    )
}

export default Square
