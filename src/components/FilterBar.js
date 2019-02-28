import React, { Component } from 'react';

class FilterBar extends Component {
	constructor() {
		super();
		this.state = {
			searchQuery: ""
		}
    }
    
    handleSearchChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            searchQuery: event.target.value
        })
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.searchQuery);
        this.props.onFilterSubmit(this.state.searchQuery);
    }
    render() {
        return (
            <div className="filterBarComponent">
                <form onSubmit={this.handleFormSubmit}>
                    <label className="visually-hidden" htmlFor="search">
                        Search Movies:
					</label>
                    <input
                        type="text"
                        placeholder="Search movie title"
                        id="search"
                        value={this.state.searchQuery}
                        onChange={this.handleSearchChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}


export default FilterBar;