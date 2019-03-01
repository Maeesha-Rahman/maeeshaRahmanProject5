import React, { Component } from 'react';
import firebase from '../firebase.js';

class SavedMovies extends Component {
    constructor() {
        super()
        this.state = {
            saved: []
        }
    }

    onMovieDelete = () => {
        console.log('deleted');
        const movie = this.props.movie

        // firebase.database().ref(`movies`).push(movie)
        const dbRef = firebase.database().ref(`movies`);
        // push whatever the user typed in the input to firebase using the firebase push method
        dbRef.remove(movie);
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref();
        itemsRef.on('value', (saved) => {
            let movies = saved.val();
            // console.log(items);
            movies = movies.movies
            let newState = [];
            for (let item in movies) {
                newState.push(movies[item]);
                console.log(movies[item]);
            }
            console.log(newState);
            this.setState({
                saved: newState
            });
        });
    }
    // this.state.saved map through array and put it on page 
    render() {
        
        return ( 
            <div>
                <h2>Your Watchlist</h2>
            {
                this.state.saved.map((movie) => {
                    return (
                        <div key = {movie.id} className="watchListComponent">
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster for ${movie.title}.`} />
                        <button onClick={this.onMovieDelete}>Delete from list</button>
                        </div>
                    )
                })  
            }
        </div>
        );
    }
}

export default SavedMovies