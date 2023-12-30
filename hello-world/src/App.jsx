import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Xcard } from './components/Xcard'

const users = [
  {
    id: 1,
    name: 'Keiner Mendoza',
    username: 'keiner_mendoza',
    following: true
  },
  {
    id: 3,
    name: 'Real Python',
    username: 'realpython',
    following: false,
  },
  {
    id: 4,
    name: 'CS50',
    username: 'cs50',
    following: true,
  },
  { 
    id: 5,
    name: 'Free Code Camp',
    username: 'freecodecamp',
    following: false
  },
  {
    id: 6,
    name: 'Miguel Angel Duran',
    username: 'midudev',
    following: true
  }

]
function App() {

  return (
    <main className='text-center min-h-[70vh] bg-white dark:bg-black  w-full px-1 py-5 sm:px-2'>
      <h1 className=' text-4xl font-mono mb-3'>Project 1: X Card</h1>
      <h3 className=' mb-10 text-xl font-mono'>
        <a className='underline text-sky-600' href="/">Come Back Home</a>
      </h3>

      <div className='text-start grid place-content-center gap-y-4'>

        {
          users.map(user => {
            const {id, name, username, following} = user
            return (
              <Xcard  key={id}
                      username={username}
                      initialIsFollowing={following}>
                {name}
              </ Xcard>
            )
          })
        }
      

      </div>
    </main>
  )
}

export default App
