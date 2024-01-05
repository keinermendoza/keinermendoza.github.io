function MovieList({movies}) {
    return (
        <ul>
            {
            movies.map(result => (
                <li key={result.id}>
                    <h3>{result.title}</h3>
                    <p>{result.year}</p>
                    <img src={result.image} alt={result.title} />
                </li>
            ))
            }
        </ul>
    )
}

function NoMovies() {
    return (
    <p>No Results Matches your query</p>
    )
}

export function Movies({movies}) {
    const hasMovies = movies?.length > 0

    return (
        hasMovies 
        ? <MovieList movies={movies} />
        : <NoMovies />
    )
}
