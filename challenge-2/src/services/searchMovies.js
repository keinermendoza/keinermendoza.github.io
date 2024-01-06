const API_KEY = 'b0fa130'

export async function searchMovies({query}) {
    if (query === '') return
    try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
        const json = await res.json()
        const movies = json.Search 
        
        return movies?.map((movie) => ({
            image: movie.Poster,
            title: movie.Title,
            type: movie.Type,
            year: movie.Year,
            id: movie.imdbID
        }))
    } catch(err) {
        throw new Error('We have a Conection Error, please try again in a few minutes')
    }

    
}