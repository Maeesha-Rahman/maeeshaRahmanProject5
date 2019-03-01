import React, { Component } from 'react';

class SavedMovies extends Component {
    constructor() {
        super()
        this.state = {
            saved: {}
        }

        this.props.onMoviePick(event) {
            const dbRef = firebase.database().ref();
            dbRef.push(this.state.saved);
        }
    }
}

export default SavedMovies