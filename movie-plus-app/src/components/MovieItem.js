import React, { Component } from 'react'

class MovieItem extends Component {
	constructor(props) {
		super(props);
    }

    updateMovie = (e, id) => {
        this.props.updateMovie({id: id, checked: e.target.checked})
    }

    deleteMovie = (id) => {
        this.props.deleteMovie(id)
    }    

    render() {
        const movie = this.props.movie;
        return(
            <li className="task" key={movie.id} id={movie.id}>
                <input className="taskCheckbox" type="checkbox" 
                checked={movie.done} onChange={(e) => this.updateMovie(e, movie.id)} />              
                <label className="taskLabel">{movie.title}</label>
                <label className="taskLabel">{movie.id}</label>
                <span className="deleteTaskBtn" onClick={(e) => this.deleteMovie(movie.id)}>
                x
                </span>
            </li>
        );
    }
}

export default MovieItem;