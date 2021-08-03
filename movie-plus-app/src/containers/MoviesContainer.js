import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadMovies, addMovie, toggleMovie, deleteMovie } from '../actions/actionCreators'
import { Route, Link ,useRouteMatch, Redirect } from "react-router-dom";

import InputBox from '../components/InputBox'
import MovieList from '../components/MovieList'
import MovieForm from '../components/MovieForm'

class Movies extends Component {

	getMovies() {
		axios.get('/api/v1/movies')
		.then(response => {
		this.props.dispatch(loadMovies(response.data));
		})
		.catch(error => console.log(error))
	}

	createMovie = (title) => {
		alert("dsfsdfsdfsdfsdfdf")
		console.log(title)
		if (!(title === '')) {
		axios.post('/api/v1/movies', {movie: {title: title,language: title}})
		.then(response => {
			this.props.dispatch(addMovie(response.data.id, response.data.title))
		})
		.catch(error => console.log(error))      
		}    
	}

	updateMovie = (params) => {
		axios.put(`/api/v1/movies/${params.id}`, {movie: {done: params.checked}})
		.then(response => {
		this.props.dispatch(toggleMovie(params.id))
		})
		.catch(error => console.log(error))      
	}

	deleteMovie = (id) => {
		axios.delete(`/api/v1/movies/${id}`)
		.then(response => {
		this.props.dispatch(deleteMovie(id))
		})
		.catch(error => console.log(error))
	}

  componentDidMount() {
    	this.getMovies();
  }

  render() {
      return (
          <div className="container">
              <InputBox createMovie={this.createMovie} />
			  <Link to={"/movies/new"}>New</Link>
			  <Route path={"/movies/new"}>
        		<MovieForm createMovie={this.createMovie} />
      		  </Route>
              <MovieList movies={this.props.movies}
                  updateMovie={this.updateMovie} 
                  deleteMovie={this.deleteMovie} />
          </div>
      )
  }
}

const mapStateToProps = (state) => {
	return {
		movies: state.movies
	}
}

export default connect(mapStateToProps)(Movies)
