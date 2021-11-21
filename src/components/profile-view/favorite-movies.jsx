// FUNCTION COMPONENT

// Modules
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/actions';




// Stylings
import './profile-view.scss';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container, Form, Figure, Card } from 'react-bootstrap';


function FavMovieView({ favoriteMovieList, movies, removeFavoriteMovie }) {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col xs={12}>
            <h4>Favorite Movies</h4>
          </Col>
        </Row>

        <Row>
          {favoriteMovieList.length > 0 &&  // assign favoriteMovieList to a movies.filter(movies) in profieview
            movies.map((movie) => {
              if (movie._id === favoriteMovieList.find((favMovie) => favMovie === movie._id)) {
                return (
                  <Col xs={12} md={6} lg={3} key={movie._id} className="fav-movie">
                    <Figure>
                      <Link to={`/movies/${movie._id}`}>
                        <Figure.Image
                          src={movie.ImagePath}
                          alt={movie.Title}
                        />
                        <Figure.Caption>
                          {movie.Title}
                        </Figure.Caption>
                      </Link>
                    </Figure>
                    <Button variant="secondary" value={movie._id} onClick={() => {
                      removeFavoriteMovie(movie._id)
                    }}>
                      Remove from List
                    </Button>
                  </Col>
                );
              }
            })}
        </Row>
      </Card.Body>
    </Card>
  )
}

FavMovieView.propTypes = {
  // favoriteMovieList: PropTypes.obj,...
  // movies: PropTypes.string,
  removeFavoriteMovie: PropTypes.func,
}

export default connect(null, { updateUser })(FavMovieView)
