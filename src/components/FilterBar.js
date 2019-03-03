import React, { Component } from 'react';
import '../styles/Header.css'

class FilterBar extends Component {
	constructor() {
		super();
		this.state = {
			searchQuery: ""
		}
    }
    
    handleSearchChange = (event) => {
        console.log(event.target.value);
        this.setState({
            searchQuery: event.target.value
        })
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('in handle submit', this.state.searchQuery);
        this.props.onFilterSubmit(this.state.searchQuery);
    }
    render() {
        return (
            <div className="filterBarComponent">
                <form onSubmit={this.handleFormSubmit}>
                    <label className="visuallyHidden" htmlFor="search">
                        Search Movies:
					</label>
                    <input
                        type="text"
                        placeholder="Search movie title"
                        id="search"
                        value={this.state.searchQuery}
                        onChange={this.handleSearchChange}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}


export default FilterBar;