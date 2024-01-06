import './App.css'
import '../dist/output.css'
import { Movies } from './components/MovieList'
import { useMovies } from './hooks/useMovies'
import { useQuery } from './hooks/useQuery'
// import { useState } from 'react'

function App() {
  const {query, error, setQuery} = useQuery()
  const {movies, getMovies} = useMovies({query})

  console.log('re-rendering...', query)
  
  function handleChangeQuery(e) {
    const newQuery = e.target.value
    setQuery(newQuery)
    getMovies({query})
  }

  function handleSubmit(e) {
    e.target.preventDefault()
    console.log('realizar solicitud')
  }
  return (
    <div className='text-center p-4 font-[system-ui]'>
      <header className='flex flex-col gap-3'>
        <h1 className='text-4xl'>Movie Searcher</h1>
        <form onSubmit={handleSubmit} className='flex gap-x-2 justify-center' action="">
          <input onChange={handleChangeQuery} value={query} className='border rounded-lg py-1 px-2' type="text" placeholder='Titanic, Avatar, Avengers ' />
          <button className='border rounded-lg py-1 px-2' type='submit' >Search</button>
        </form>
        { error && <p className='text-red-600'>{error}</p> }
      </header>
      <main className='w-full my-8'>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
