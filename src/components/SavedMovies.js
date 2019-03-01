import React, { Component } from 'react';
import firebase from '../firebase.js';

class SavedMovies extends Component {
    constructor() {
        super()
        this.state = {
            saved: []
        }

        // this.props.onMoviePick(event) {
        //     const dbRef = firebase.database().ref();
        //     dbRef.push(this.state.saved);
        // }

        // itemsRef.on('value', (saved) => {
        //     console.log(saved.val());
        // });
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
                this.state.saved.map((movie) => {
                    return (
                        <div className="watchListComponent">
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster for ${movie.title}.`} />
                        </div>
                    )
                })
            
        );
    }
}

export default SavedMovies