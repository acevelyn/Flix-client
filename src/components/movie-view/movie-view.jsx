import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import axios from 'axios';

// Redux Store
import { connect } from 'react-redux';
import { setUser } from '../../actions/actions';

// React-Bootstrap Stylings
import Button from 'react-bootstrap/Button';

// MovieView SCSS
import './movie-view.scss'


class MovieView extends React.Component {
  constructor(props) {
    super(props);

  }

  addFavoriteMovie() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');

    axios.post(`https://evflixapp.herokuapp.com/users/${username}/movies/${this.props.movie._id}`, {},
      {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => {
        console.log('Added to Favorites');
        alert('Added to Favorties');
        this.props.setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="movie-view">
        <div className="movie-poster"
          style={{ textAlign: "left", marginBottom: "30px" }}>
          <img src={movie.ImagePath} width="300" />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
          <div className="movie-director">
            <Link to={`/directors/${movie.Director.Name}`}>
              <Button variant="primary" size="sm">Director</Button>
            </Link>
          </div>
          <div className="movie-genre">
            <Link to={`/genres/${movie.Genre.Name}`}>
              <Button variant="primary" size="sm">Genre</Button>
            </Link>
          </div>
        </div>
        <div className="add-favorite">
          <Button variant="success" size="sm" onClick={(e) => this.addFavoriteMovie(e)}>Add to Favorites</Button>
        </div>

        <div className="back-button">
          <Button className="movieview-back" variant="secondary" size="sm" onClick={() => { onBackClick(null); }}>Back</Button>
        </div>
      </div>
    );
  }
}

export default connect(null, { setUser })(MovieView);

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string,
      Birth: PropTypes.string
    }).isRequired
  })
};