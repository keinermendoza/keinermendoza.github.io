import { useState } from 'react';

import Square from "./Square";
const TURNS = {
    X: '✖️',
    O: '⚪'
}

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function handleClick(i) {
        // if the square has something don't do anything
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = TURNS.X
        } else {
            nextSquares[i] = TURNS.O
        }
        setSquares(nextSquares)

        setXIsNext(!xIsNext)
      }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
    status = "Winner: " + winner;
    } else {
    status = "Next player: " + (xIsNext ? TURNS.X : TURNS.O);
    }
    

    return (
        <>
        <div className="text-center text-xl mt-5">{status}</div>
            <div className="mt-5 grid place-content-center gap-2">
              <div className="flex gap-x-2">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
              </div>
              <div className="flex gap-x-2">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
              </div>
              <div className="flex gap-x-2">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
              </div>
            </div>
        </>
    )
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }