import { LOAD_MOVIES, ADD_MOVIE, TOGGLE_MOVIE, DELETE_MOVIE } from '../actions/actionTypes'

export function loadMovies(movies) {
  return { type: LOAD_MOVIES, movies: movies }
}

export function addMovie(id, title) {
  return { type: ADD_MOVIE, id: id, title: title }
}

export function toggleMovie(index) {
  return { type: TOGGLE_MOVIE, index: index }
}

export function deleteMovie(index) {
  return { type: DELETE_MOVIE, index: index }
}