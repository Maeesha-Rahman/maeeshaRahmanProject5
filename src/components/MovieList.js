import React, { Component } from 'react';
import OneMovie from '../components/OneMovie';



class MovieList extends Component {
    
    render() {
        console.log(this.props);
        console.log(this.props.movieDisplay);
        return (
            <div className="movieListComponent"> 
            {
                this.props.movieDisplay.map((movie) => {
                    return (
                        <OneMovie 
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