function MovieList({movies}) {
    return (
        <ul className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            {
            movies.map(result => (
                <li className="flex gap-2 flex-col" key={result.id}>
                    <h3>{result.title}</h3>
                    <p>{result.year}</p>
                    
                    <img className="rounded grow object-cover" src={result.image} alt={result.title} />
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
    

    return (
        movies 
        ? <MovieList movies={movies} />
        : <NoMovies />
    )
}
