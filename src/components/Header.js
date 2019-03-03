import React from 'react';
import FilterBar from './FilterBar.js'
import '../styles/Header.css'

const Header = (props) => {
    return (
        <div className="headerComponent">
        {
            <header className="header">
                <div className="wrapper">
                    <h1>The watchlist</h1>
                    <p>Search for movies you want to watch and add them to your watchlist!</p>
                    <FilterBar onFilterSubmit={props.onFilterSubmit} />
                </div>
            </header>
        }
        </div>
    );
}

export default Header;