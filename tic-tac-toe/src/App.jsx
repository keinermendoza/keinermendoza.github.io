import './App.css'
import '../dist/output.css'
import Board from './components/Board'
// import Board from './components/Board'
function App() {

  return (
    <main className='pt-10 px-2'>
      <h3 className=' mb-10 text-xl font-mono text-center'>
        <a className='underline text-sky-600' href="/">Come Back Home</a>
      </h3>
      <h1 className='text-center text-4xl font-mono'>Tic Tac Toe</h1>
      
      <Board></Board>
    </main>
  )
}

export default App
