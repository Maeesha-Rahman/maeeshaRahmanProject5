import React, { Component } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import MovieList from './components/MovieList.js';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="appComponent">
      
        <Header 
          onFilterSubmit={this.onFilterSubmit}
        />
        <MovieList 
          
        />
        <Footer />

      </div>
    );
  }

}

export default App;
