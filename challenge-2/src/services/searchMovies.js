const API_KEY = 'b0fa130'

export async function searchMovies({query}) {
    if (query === '') return

    const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    const json = await res.json()
    const movies = json.Search 
    
    return movies?.map((movie) => ({
        image: movie.Poster,
        title: movie.Title,
        type: movie.Type,
        year: movie.Year,
        id: movie.imdbID
    }))
}