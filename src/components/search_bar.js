import React, { Component } from 'react';

class SearchBar extends Component {
    // Define state in a class based component
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} 
                />
                <br/>
                Value of the input: {this.state.term}
            </div>
        );
    }
}

export default SearchBar;