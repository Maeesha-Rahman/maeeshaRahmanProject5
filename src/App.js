import React, { Component } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import MovieList from './components/MovieList.js';
import axios from 'axios';
import './App.css';

const apiKey = `BgzeXsLe`;

class App extends Component {
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: `https://www.rijksmuseum.nl/api/en/collection`,
      responseType: 'json',
      params: {
        key: apiKey,
        format: 'json',
        hasImage: true
      }
    }).then(response => {
      response = response.data.artObjects;
      this.setState({
        art: response
      })
    })
  }

  render() {
    return (
      <div className="appComponent">
        <Header />
        <MovieList />
        <Footer />
      </div>
    );
  }

}

export default App;
