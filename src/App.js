import React, { Component } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import MovieList from './components/MovieList.js';
import axios from 'axios';
// import firebase from firebase;
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: null,
      movies: []
    }
  }

  getMovie = () => {
    const apiKey = `a4aa9b932ee8ac5ab8f7245f1d7364bb`;
    console.log(this.state.searchQuery);
    axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/search/movie`,
      responseType: 'json',
      params: {
        api_key: apiKey,
        format: 'json',
        query: this.state.searchQuery,
        include_adult: false
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

  onFilterSubmit = (searchQuery) => {
    console.log(searchQuery);

    this.setState({
      searchQuery: searchQuery
    }, () => {
      this.getMovie();
    });

  }
  // if this.state.movies.length > 0 then show movie list otherwise no

  render() {
    return (
      <div className="appComponent">
      
        <Header 
          onFilterSubmit={this.onFilterSubmit}
        />
        
        <MovieList
          movieDisplay={this.state.movies.length > 0 ? this.state.movies : []}   
        />

        <Footer />

      </div>
    );
  }

}

export default App;
