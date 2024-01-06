import {  useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/searchMovies'
import { ORDER_OPTIONS } from '../constants'

export function useMovies({query, sort}) {

    const [movies, setMovies] = useState(null)
    const [loading, setLoading] = useState(null)
    const [responseError, setResponseError] = useState(null)
    const prevQuery = useRef(query)

    const getMovies = useCallback(async ({query}) => {
        if (query === prevQuery.current) return

        try {
            setLoading(true)
            setResponseError(null)
            prevQuery.current = query

            const responseMovies = await searchMovies({query})
            setMovies(responseMovies)
        } catch(err) {
            setResponseError(err.message)
        } finally {
            setLoading(false)
        }
    }, [])


    const sortedMovies = useMemo(() => {
        return sort === ORDER_OPTIONS.TITLE ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) 
            : sort === ORDER_OPTIONS.YEAR ? [...movies].sort((a, b) => b.year.localeCompare(a.year))
            : movies
    }, [movies, sort])

    return { movies: sortedMovies, getMovies, loading, responseError }
}