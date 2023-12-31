import { WINNER_COMBOS } from "../constants";

export function calculateWinner(squares) {
   
    for (let i = 0; i < WINNER_COMBOS.length; i++) {
      const [a, b, c] = WINNER_COMBOS[i];
      if (squares[a].inner && squares[a].inner === squares[b].inner && squares[a].inner === squares[c].inner) {
        return {
            winnerPlayer: squares[a].inner,
            winnerSquares: [a, b, c],
        };
      }
    }
    return null;
}

export function checkEndGame(someBoard) {
    return someBoard.every((square) => square.inner !== null)
}