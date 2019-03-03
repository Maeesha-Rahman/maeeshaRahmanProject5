import React, { Component } from 'react';
import firebase from '../firebase';
import '../styles/MovieList.css'

class OneMovie extends Component {
    onMoviePick = () => {
        console.log('submitted');
        const movie = this.props.movie

        const dbRef = firebase.database().ref(`movies`);
        
        dbRef.push(movie);
    }

    constructor() {
        super()
        this.state = {
            saveMovie: {}
        }
    }
    render() {
        const movie = this.props.movie
        console.log(movie);
        return (
            <div className="wrapper">
            {
            <section className="oneMovieComponent" key={movie.id}>
                <div className="container">
                    <div className="poster">
                        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`Poster for ${movie.title}.`} />
                    </div>
                    <div className="content">
                        <h3>{movie.title} ({movie.release_date})</h3>
                        <h4>User Score: {movie.vote_average}/10</h4>
                        <p>{movie.overview}</p>
                        <a href={`https://www.themoviedb.org/movie/${movie.id}`} rel="noopener noreferrer" target="_blank">More Info</a>
                        <button onClick={this.onMoviePick}>Save Movie</button>
                    </div>
                </div>
            </section>
            }
            </div>
        )
    }
}

export default OneMovie