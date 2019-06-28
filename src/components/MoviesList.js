import React from 'react'
import { Link } from 'react-router-dom'

export default function MoviesList({ movies }){
    const RenderMovies = Object.keys(movies).map(id => {
        return <Link key={id} to={`/movies/${id}`}>{movies[id].title}</Link>
    })
    return <div>{RenderMovies}</div>
}
