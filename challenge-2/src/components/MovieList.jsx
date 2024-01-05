function MovieList({movies}) {
    return (
        <ul className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            {
            movies.map(result => (
                <li className="flex flex-col" key={result.id}>
                    
                    <h3 className="">{result.title}</h3>
                    <p>{result.year}</p>
                    <img className="rounded grow" src={result.image} alt={result.title} />
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
