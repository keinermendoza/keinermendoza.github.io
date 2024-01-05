import MovieResults from '../mook/MovieResults.json'
// import MovieNotFound from '../mook/MovieNotFound.json'


export function useMovies() {
    const movies =  MovieResults.Search
    const MappedMovies = movies?.map((movie) => ({
        image: movie.Poster,
        title: movie.Title,
        type: movie.Type,
        year: movie.Year,
        id: movie.imdbID
    }))
    return { movies: MappedMovies}
}