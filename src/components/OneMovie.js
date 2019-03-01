import React, { Component } from 'react';
import firebase from '../firebase';

class OneMovie extends Component {
    onMoviePick = () => {
        console.log('submitted');
        const movie = this.props.movie

        // firebase.database().ref(`movies`).push(movie)
        const dbRef = firebase.database().ref(`movies`);
        // push whatever the user typed in the input to firebase using the firebase push method
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
            <div>
            {
            <div key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster for ${movie.title}.`} />
                <button onClick={this.onMoviePick}>Save Movie</button>
            </div>
            }
            </div>
        )
    }
}

export default OneMovie