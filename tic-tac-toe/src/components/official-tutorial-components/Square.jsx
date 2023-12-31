

export default function Square({value, onSquareClick}) {


    return (
    <button 
        onClick={onSquareClick}
        className="w-5 h-5 p-5 grid place-content-center 
        rounded bg-violet-800 border-violet-600  text-white "
        >{value}</button>
    )
  }
  