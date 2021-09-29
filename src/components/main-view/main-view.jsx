import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [
        {
          _id: 1, Title: 'Inception', Description: 'descr1', ImagePath: '...'
        },
        {
          _id: 2, Title: 'Beaches', Description: 'descr2', ImagePath: '...'
        },
        {
          _id: 3, Title: 'Avengers', Description: 'descr3', ImagePath: '...'
        }
      ],
      selectedMovie: null
    };
  }


  // ES6 
  render() {
    const { movies, selectedMovie } = this.state;

    if (selectedMovie) return <MovieView movie={selectedMovie} />

    if (movies.length === 0) return <div className="main-view">This list is empty</div>;

    return (
      <div className="main-view">
        <button onClick={() => { alert('Nice!') }}>Click me!</button>
        {movies.map(movie => <MovieCard key={movie._id} movieData={movie} />)}
      </div>
    );
  }
}
