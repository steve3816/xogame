import React, { useEffect, useState } from 'react'
import Board from './Board'

const Game = () => {
    let [histories, setHistories] = useState([]);

    let [values, setValues] = useState(new Array(9).fill(null))

    useEffect(()=>{
        setHistories([...histories, values]);
    }, []);

    let [winner, setWinner] = useState(null);

    const onBackClicked = (index) => {

        // setWinner(null);

        // 抓出那一步的棋盤狀況
        let theHistory = histories[index];
        // 設到現在棋盤狀況
        setValues(theHistory);

        // history移除到剩該步
        setHistories(histories.slice(0,index+1))
    }

    return (
        <div className="game">
            <Board winner={winner} setWinner={setWinner} values={values} setValues={setValues} histories={histories} setHistories={setHistories}></Board>
            {histories && histories.map((history, index) => <div><button onClick={() => onBackClicked(index)}>點我回到步驟{index}</button></div>)}
        </div>
    )
}

export default Game
