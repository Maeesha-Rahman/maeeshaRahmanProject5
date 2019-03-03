import React, { Component } from 'react';
import OneMovie from '../components/OneMovie';
import '../styles/MovieList.css'



class MovieList extends Component {
    render() {
        return (
            <div className="movieListComponent"> 
            {
                this.props.movieDisplay.map((movie) => {
                    return (
                        <OneMovie key={movie.id} 
                            movie = {movie}
                        />
                    )
                })
            }
            </div>
        )
    }
}

export default MovieList;