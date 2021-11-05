import { combineReducers } from 'redux';

import { SET_MOVIES, SET_FILTER } from '../actions/actions';


function movies(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.value;
    default:
      return state;
  }
}


function visibilityFilter(state = '', action) {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
}


const moviesApp = combineReducers({
  movies,
  visibilityFilter
});

export default moviesApp

// IF COMBINEDREDUCERS WAS NOT USED

// function moviesApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     movies: movies(state.movies, action)
//   }
// }