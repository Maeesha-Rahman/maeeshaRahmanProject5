import React, { Component } from 'react';
import firebase from '../firebase';

class OneMovie extends Component {
    onMoviePick = () => {
        console.log('submitted');
        const movie = this.props.movie
        // console.log(movie);
        // this.props.onMoviePick(event) {
        //     const dbRef = firebase.database().ref();
        //     dbRef.push(this.state.saved);
        // }

        firebase.database().ref(`movies`).push(movie)
    }
    constructor() {
        super()
        this.state = {
            saveMovie: {}
        }
    }
    render() {
        const movie = this.props.movie
        return (
            
            <div key={movie.id}>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster for ${movie.title}.`} />
                <button onClick={this.onMoviePick}>Save Movie</button>
            </div>
        )
    }
}

export default OneMovie