import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
import sessionReducer from '../features/session/sessionSlice';

const rootReducer = combineReducers({
    movies: moviesReducer,
    session: sessionReducer,
});

export default rootReducer;