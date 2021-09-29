import React from 'react';

export class MovieCard extends React.Component {

  render() {
    const { movie, onMovieClick } = this.props; // is the prop used for MovieCard "movie"=movie
    return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
  }
}