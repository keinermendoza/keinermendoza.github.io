import { useState } from "react"
import Square from "./Square.jsx"
import confetti from "canvas-confetti"
import {TURNS} from '../constants.js'
import { calculateWinner } from "../utils/checkWinner.js"
import WinnerModal from "./WinnerModal.jsx"
import {checkEndGame} from "../utils/checkWinner.js"

export default function Mboard() {
    const [board, setBoard] = useState(Array(9).fill(null).map(() => ({ inner: null, winner: null })))
    const [turn, setTurn] = useState(TURNS.X)
    const [winner, setWinner] = useState(null)

    function resetGame() {
        setBoard(Array(9).fill(null).map(() => ({ inner: null, winner: null })))
        setTurn(TURNS.X)
        setWinner(null)
    }

    // main function
    function updateBoard(index) {
        if (board[index].inner || winner) return
        const newBord = board.slice()
        newBord[index].inner = turn
        setBoard(newBord)

        const newWinner = calculateWinner(newBord)
        
        if (newWinner) {
            const {winnerPlayer, winnerSquares} = newWinner
            // seting winner
            setWinner(winnerPlayer)
            
            // changing color to winner squares
            const [a, b, c] = winnerSquares
            const winnerBoard = newBord.slice()
            winnerBoard[a].winner = winnerBoard[b].winner = winnerBoard[c].winner = true
            setBoard(winnerBoard)

            confetti()
        } // when finish in draw 
        else if (checkEndGame(newBord)) {
            setWinner(false)
        }
        // changing turn
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn) 
    }


    return (
        <div>
            <div className="w-full text-center">
                <button onClick={resetGame} 
                    className=" my-5 rounded px-2 py-1 bg bg-green-500 hover:bg-green-700">Reset Game</button>
            </div>
            
            <div className="grid grid-cols-[repeat(3,1fr)] gap-3 w-fit my-5 mx-auto">
            {
                board.map((_, index) => {
                    return (
                        <Square 
                            key={index} 
                            index={index}
                            winnerSquare={board[index].winner} 
                            updateBoard={updateBoard}
                            >{board[index].inner}</Square>
                    )
                })
            }
            </div>

            <div className="flex justify-center gap-x-3">
                <Square isSelected={TURNS.X === turn}>{TURNS.X}</Square>
                <Square isSelected={TURNS.O === turn}>{TURNS.O}</Square>
            </div>

            <WinnerModal winner={winner} resetGame={resetGame} />
        </div>
        
    )
}


