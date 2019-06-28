import React from 'react';
import { Route } from 'react-router-dom';

export default function MovieShow({match, movies}){
    return <div>
        <h3>{movies[match.params.movieId].title}</h3>
    </div>
}
