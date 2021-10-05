import React, { useState } from 'react'
import Square from './Square'
import { calculateWinner } from './Algorithm'

const Board = ({histories, setHistories, values, setValues, winner, setWinner}) => {

    let [xIsNextValue, setXIsNextValue] = useState(false);

    let status = !!winner ? `winner is ${winner}` : `now player: ${xIsNextValue ? 'x': 'o'}`

    const onHandleClick = (index) =>{
        if(winner)
            return;

        let copyValues = values.slice();
        copyValues[index] = (histories.length % 2) ? 'x' : 'o';
        setXIsNextValue(!xIsNextValue);
        setValues(copyValues);

        setHistories([...histories, copyValues]);

        winner = setWinner(calculateWinner(copyValues));

        if(winner)
            alert('winner is: ' + winner);
    }

    return (
        <div>
            <div className="status">{status}</div>
            <div className="row">
                <Square value={values[0]} onHandleClick={() => onHandleClick(0)}></Square>
                <Square value={values[1]} onHandleClick={() => onHandleClick(1)}></Square>
                <Square value={values[2]} onHandleClick={() => onHandleClick(2)}></Square>
            </div>
            <div className="row">
                <Square value={values[3]} onHandleClick={() => onHandleClick(3)}></Square>
                <Square value={values[4]} onHandleClick={() => onHandleClick(4)}></Square>
                <Square value={values[5]} onHandleClick={() => onHandleClick(5)}></Square>
            </div>
            <div className="row">
                <Square value={values[6]} onHandleClick={() => onHandleClick(6)}></Square>
                <Square value={values[7]} onHandleClick={() => onHandleClick(7)}></Square>
                <Square value={values[8]} onHandleClick={() => onHandleClick(8)}></Square>
            </div>
        </div>
    )
}

export default Board
