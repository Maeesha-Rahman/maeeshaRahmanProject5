import React, { Component } from 'react';
import firebase from '../firebase.js';
import '../styles/SavedMovies.css'
import swal from '@sweetalert/with-react';

class SavedMovies extends Component {
    constructor() {
        super()
        this.state = {
            saved: []
        }
    }

    onMovieDelete = (key) => {
        const movie = this.props.movie
       
        const dbRef = firebase.database().ref(`movies/${key}`);
        
        dbRef.remove(movie);

        swal("Removed from watchlist!");
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

            this.setState({
                saved : newState
            })
        })

    };
    
    render() {
        
        return ( 
            <section className="savedMoviesComponent">
                <h2>Your Watchlist</h2>
            {
                <div className="savedMoviesList wrapper">
                {   
                    this.state.saved.map((movie) => {
                        return (
                            <div key = {movie.id} className="watchListComponent">
                                <h3>{movie.title}</h3>
                                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`Poster for ${movie.title}.`} />
                                <button onClick={()=>this.onMovieDelete(movie.firebaseId)}>Delete From List</button>
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