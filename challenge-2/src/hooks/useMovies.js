import {  useState } from 'react'
import { searchMovies } from '../services/searchMovies'

export function useMovies({query}) {

    const [movies, setMovies] = useState(null)

    async function getMovies({query}) {
        const responseMovies = await searchMovies({query})
        setMovies(responseMovies)
    }

    return { movies, getMovies }
}