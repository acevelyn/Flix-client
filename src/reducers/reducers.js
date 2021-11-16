import { combineReducers } from 'redux';

import { SET_MOVIES, SET_FILTER, SET_USER } from '../actions/actions';


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

function userInfo(state = [], action){
  switch (action.type){
    case SET_USER:
      return action.value;
    default:
      return state;
  }
}


const moviesApp = combineReducers({
  movies,
  visibilityFilter,
  userInfo
});

export default moviesApp;

