import './App.css'
import '../dist/output.css'
import { Movies } from './components/MovieList'
import { useMovies } from './hooks/useMovies'
import { useQuery } from './hooks/useQuery'
import { useState } from 'react'
import { ORDER_OPTIONS } from './constants'

function App() {
  const [sort, setSort] = useState('default')
  const {query, error, setQuery} = useQuery()
  const {movies, getMovies, loading, responseError} = useMovies({query, sort})


  console.log('re-rendering...', query)
  
  function handleChangeQuery(e) {
    const newQuery = e.target.value
    setQuery(newQuery)
    getMovies({query})
  }

  function handleSubmit(e) {
    e.preventDefault()
    getMovies({query})

  }

  function handleChangeOrder(e) {
    const newOrder = e.target.value
    setSort(newOrder)
  }

 

  return (
    <div className='text-center p-4 font-[system-ui]'>
      <header className='flex flex-col gap-3'>
        <h1 className='text-4xl'>Movie Searcher</h1>
        <form onSubmit={handleSubmit} className='' action="">
          <div className='flex gap-x-2 justify-center'>
            <input onChange={handleChangeQuery} value={query} className='border rounded-lg py-1 px-2' type="text" placeholder='Titanic, Avatar, Avengers ' />
            <button className='border rounded-lg py-1 px-2' type='submit' >Search</button>
          </div>
          {/* <input type="checkbox"  onChange={handleChangeOrder} /> */}
          <label htmlFor="order">Order by</label>
          <select onChange={handleChangeOrder} name="" id="order">
            <option value={ORDER_OPTIONS.DEFAULT}>Default</option>
            <option value={ORDER_OPTIONS.YEAR}>Year</option>
            <option value={ORDER_OPTIONS.TITLE}>Title</option>

          </select>
        </form>
        { error && <p className='text-red-600'>{error}</p> }
        { responseError && <p className='text-red-600'>{responseError}</p> }

      </header>
      <main className='w-full my-8'>
        { loading
        ? <p>Loading ....</p>
        :  <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
