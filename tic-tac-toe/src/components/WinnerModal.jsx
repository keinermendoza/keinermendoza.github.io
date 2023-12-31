export default function WinnerModal({winner, resetGame}){
    if (winner === null) return
    const winnerText = winner === false ? 'No Winner': `${winner} Wins`
    
    return (
        
        <section className="absolute top-0 left-0 grid place-content-center h-screen w-screen bg-black bg-opacity-40">
            <div className="p-3 flex items-center justify-between flex-col min-w-40 min-h-40 rounded bg-white">
                <h2>{winnerText}</h2>

                <button onClick={resetGame}
                    className="bg-green-500 hover:bg-green-700 rounded px-2 py-1">Play Again</button>
            </div>

        </section>
    )
}