import React, { Component } from 'react';
import firebase from '../firebase.js';
import '../styles/SavedMovies.css'

class SavedMovies extends Component {
    constructor() {
        super()
        this.state = {
            saved: []
        }
    }

    onMovieDelete = (key) => {
        console.log('deleted');
        const movie = this.props.movie
       
        // firebase.database().ref(`movies`).push(movie)
        const dbRef = firebase.database().ref(`movies/${key}`);
        // push whatever the user typed in the input to firebase using the firebase push method
        dbRef.remove(movie);
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('movies');
        itemsRef.on('value', (saved) => {

            let newState = [];
            
            saved.forEach(movie => {
                newState.push({
                    ...movie.val(),
                    firebaseId : movie.key
                })
            });

            console.log(newState)

            this.setState({
                saved : newState
            })
            console.log(this.state.saved);
            })

        };
    
    // this.state.saved map through array and put it on page 
    render() {
        
        return ( 
            <section className="savedMoviesComponent wrapper">
                <h2>Your Watchlist</h2>
            {
                <div className="savedMoviesList">
                {   
                    this.state.saved.map((movie) => {
                        return (
                            <div key = {movie.id} className="watchListComponent">
                                <h3>{movie.title}</h3>
                                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`Poster for ${movie.title}.`} />
                                <button onClick={()=>this.onMovieDelete(movie.firebaseId)}>Delete from list</button>
                            </div>
                        )
                    })  
                }
                </div>
            }
            </section>
        );
    }
}

export default SavedMovies