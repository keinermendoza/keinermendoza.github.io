import { useEffect, useRef, useState } from "react";

export function useQuery() {
    const [query, setQuery] = useState('')
    const [error, setError] = useState('')
    const firstQuery = useRef(true)

    useEffect(() => {
        if (firstQuery.current) {
            firstQuery.current = query === ''
            return
        }
        if (query === '') {
            setError('Cannot search an empty movie')
            return
        }

        setError('')
    }, [query])

    return {query, setQuery, error}
}