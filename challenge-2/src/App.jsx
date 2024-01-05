import './App.css'
import '../dist/output.css'
import { Movies } from './components/MovieList'
import { useMovies } from './hooks/useMovies'

function App() {
  const {movies} = useMovies()

  return (
    <div className='text-center p-4 font-[system-ui]'>
      <header className='flex flex-col gap-3'>
        <h1 className='text-4xl'>Movie Searcher</h1>
        <form className='flex gap-x-2 justify-center' action="">
          <input className='border rounded-lg py-1 px-2' type="text" placeholder='Titanic, Avatar, Avengers ' />
          <button className='border rounded-lg py-1 px-2' type='submit' >Search</button>
        </form>
      </header>
      <main className='w-full'>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
