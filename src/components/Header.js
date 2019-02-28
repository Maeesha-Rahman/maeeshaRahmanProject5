import React from 'react';
import FilterBar from './FilterBar.js'

const Header = (props) => {
    return (
        <header className="headerComponent">
            <h1>This is the header</h1>
            <FilterBar onFilterSubmit={props.onFilterSubmit} />
        </header>
    );
}

export default Header;