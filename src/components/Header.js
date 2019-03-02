import React from 'react';
import FilterBar from './FilterBar.js'
import '../styles/Header.css'

const Header = (props) => {
    return (
        <div className="headerComponent">
        {
            <header className="header">
                <div className="wrapper">
                    <h1>This is the header</h1>
                    <FilterBar onFilterSubmit={props.onFilterSubmit} />
                </div>
            </header>
        }
        </div>
    );
}

export default Header;