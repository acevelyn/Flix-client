import React from 'react';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';

import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import { MovieCard } from '../movie-card/movie-card';

// assign visibilityFilter to be the current state and return that state
const mapStateToProps = state => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};


function MoviesList(props) {
  // assign movies and visibilityFilter to be props
  const { movies, visibilityFilter } = props;
  let filteredMovies = movies;

  // if the Fiter is NOT blank, have the "filteredMovies" variable equal the movies that, filter the movies to show the movie with the entered filter in lower case characters ..
  if (visibilityFilter !== "") {
    filteredMovies = movies.filter((m) =>
      m.Title.toLowerCase().includes(visibilityFilter.toLowerCase())
    );
  }
  // else if there is no movies show an empty main view
  if (!movies) return <div className="main-view" />;

  // else - Show All MovieCards
  return (
    <>
      <Col md={12} style={{ margin: "1em" }}>
        <VisibilityFilterInput visibilityFilter={visibilityFilter} />
      </Col>
      {filteredMovies.map((m) => (
        <Col md={3} key={m._id}>
          <MovieCard movie={m} />
        </Col>
      ))}
    </>
  );
}

export default connect(mapStateToProps)(MoviesList);