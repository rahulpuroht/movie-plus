import React, { Component } from 'react'
import MovieItem from './MovieItem'
import MovieTest from './MovieTest'

class MovieList extends Component {
	constructor(props) {
		super(props);
    }

    render() {
        const movies = this.props.movies;
        return(            
            <div className="listWrapper">
                <ul className="taskList">
                {/* {movies.map((movie) => {
                    return (
                        <MovieItem movie={movie} key={movie.id} id={movie.id} 
                            updateMovie={this.props.updateMovie}
                            deleteMovie={this.props.deleteMovie} />
                    )
                })}         */}
                </ul>
                <table id="movies">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Language</th>
                        <th>Genre</th>
                        <th>Director</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Release_date</th>
                        <th>Actions</th>
                    </tr>
                    {movies.map((movie) => {
                                        return (
                                            <MovieTest movie={movie} key={movie.id} id={movie.id} 
                                                updateMovie={this.props.updateMovie}
                                                deleteMovie={this.props.deleteMovie} />
                                        )
                                    })}
                    
                    </table>
            </div>
        );
    }
}

export default MovieList;