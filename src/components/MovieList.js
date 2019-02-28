import React, { Component } from 'react';
import axios from 'axios';

const apiKey = `a4aa9b932ee8ac5ab8f7245f1d7364bb`;

class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: `https://api.themoviedb.org/3/search/movie?query=avengers&api_key=a4aa9b932ee8ac5ab8f7245f1d7364bb`,
            responseType: 'json',
            params: {
                key: apiKey,
                format: 'json',
                hasImage: true
            }
        }).then(response => {
            // console.log(response = response.data.results)
            response = response.data.results
            // allMovies = response.data.results;
            console.log(response, 'test');

            this.setState({
                movies: response
            })
        })
    }

    render() {
        return (
            <div className="movieListComponent"> 
                {
                    this.state.movies.map((movie) => {
                        return (
                           <div>
                                <h1>{movie.title}</h1>
                                <p>{movie.overview}</p>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster"/>
                           </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default MovieList;