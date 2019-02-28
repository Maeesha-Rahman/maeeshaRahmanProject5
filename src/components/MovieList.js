import React, { Component } from 'react';

class MovieList extends Component {
    render() {
        console.log(this.props);
        console.log(this.props.movieDisplay);
        return (
            <div className="movieListComponent"> 
            {
                this.props.movieDisplay.map((movie) => {
                    return (
                        <div key = {movie.id}>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster for ${movie.title}.`}/>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

export default MovieList;