import { LOAD_MOVIES, ADD_MOVIE, TOGGLE_MOVIE, DELETE_MOVIE } from '../actions/actionTypes'

function moviesReducer(state = [], action) 
{
    switch(action.type) {
        case LOAD_MOVIES:
            return action.movies;

        case ADD_MOVIE:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                }
            ];

        case TOGGLE_MOVIE:
            return state.map(movie => (movie.id === action.index) 
                  ? {...movie, done: !movie.done}
                  : movie
            );

        case DELETE_MOVIE:
            return state.filter(movie => movie.id !== action.index);

        default:
            return state;    
    }
}

export default moviesReducer