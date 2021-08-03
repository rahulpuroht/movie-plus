import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class MovieTest extends Component {
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
            <tr>
            <td>{movie.id}</td>
            <td>{movie.title}</td>
            <td>{movie.language}</td>
            <td>{movie.genre}</td>
            <td>{movie.director}</td>
            <td>{movie.description}</td>
            <td>{movie.duration}</td>
            <td>{movie.release_date}</td>
            <td >
            <span className="deleteTaskBtn" onClick={(e) => this.deleteMovie(movie.id)}>
               Delete
            </span>
            <span>
               <Link to={`/movies/edit/${movie.id}`}>Edit</Link>
            </span>
            </td>
          </tr>
        );
    }
}

export default MovieTest;