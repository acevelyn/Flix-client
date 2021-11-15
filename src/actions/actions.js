
export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';
export const SET_USER = 'SET_USER';
export const UPDATE_USER = 'UPDATE_USER';

// GENERAL MOVIES
export function setMovies(value) {
  console.log('SET_MOVUES action reached');
  return { type: SET_MOVIES, value };
}

export function setFilter(value) {
  console.log('SET_FILTER action reached');
  return { type: SET_FILTER, value };
}

// USER Actions
export function setUser(user) {
  console.log('SET_USER action reached');
  return { type: SET_USER, user };
}

export function updateUser(value) {
  console.log('UPDATE_USER action reached');
  return { type: UPDATE_USER, value };
}






