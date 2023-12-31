export default function Msquare({children, updateBoard=console.log, index, isSelected, winnerSquare}) {
    return (
        <button 
            onClick={() => updateBoard(index)}
            className={`w-24 h-24 p-5 grid place-content-center 
            rounded border-2 transition-colors duration-300 text-black
            ${isSelected || winnerSquare ? 'bg-green-500 border-green-800':' bg-yellow-300 border-yellow-600'}`}
        >{children}</button>
    )
}