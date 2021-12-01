// CLASS COMPONENT


import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setUser } from '../../actions/actions';
// import { updateUser } from '../../actions/actions';

// Views
import UserInfo from './user-info';
import FavMovieView from './favorite-movies';
import UpdateUser from './update-user';

// Stylings
import './profile-view.scss';
import { Row, Container, Col, Button, Form, Card } from 'react-bootstrap';


class ProfileView extends React.Component {
  constructor() {
    super();
    this.state = {
      validated: null,
      tempUsername: '',
      tempPassword: '',
      tempEmail: ''
    };
  }

  componentDidMount() {
    console.log('PROFILE VIEW');
    const accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.getUser(accessToken);
    }
  }

  // ALL FUNCTIONS WITH HTTP REQUESTS TO GET, UPDATE, DELETE 

  // GET User Info
  getUser(token) {
    const username = localStorage.getItem('user');
    axios.get(
      `https://evflixapp.herokuapp.com/users/${username}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        this.props.setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // Update User Info / PUT Request 1
  handleUser(newUsername, newPassword, newEmail) {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');

    axios.put(
      `https://evflixapp.herokuapp.com/users/${username}`,
      {
        Username: newUsername,
        Password: newPassword,
        Email: newEmail,
        // Birthday: newBirthday
        // FavoriteMovies: []
      },
      { headers: { Authorization: `Bearer ${token}` } }
    )
      .then((response) => {
        this.setState({
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
          // Birthday: response.data.Birthday
        });
        localStorage.setItem('user', response.data.Username)
        alert('Account has been updated')
        window.open(`/users/${username}`, '_self');
      })
      .catch((error) => {
        console.log(error)
      });
  }



  // Deregister User
  handleDeregister(e) {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');

    axios.delete(
      `https://evflixapp.herokuapp.com/users/${username}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        // this.props.setUser(response.data);
        alert("Your account has been deleted");
        window.open('/', "_self");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Remove A Favorite Movie
  removeFavoriteMovie(id) {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');

    axios.delete(`https://evflixapp.herokuapp.com/users/${username}/movies/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log('Movie was removed')
        this.props.setUser(response.data);
        alert('Movie was removed from Favorites')
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // RENDER THIS..
  render() {
    const { movies, user } = this.props;
    console.log(this.props);

    if (user === null) {
      return null;
    }
    return (
      <Container>
        <Row>
          <Col xs={12} sm={4}>
            <Card>
              <Card.Body>
                <UserInfo
                  name={user.Username}
                  email={user.Email}
                  birthday={user.Birthday}
                  // from mapState Adding the "user" state to the UserInfo component
                  user={user} />
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={8}>
            <Card>
              <Card.Body>
                <UpdateUser
                  user={user}
                  handleUser={(u) => {
                    this.props.setUser(user);
                    if (u.Username && user.Username !== u.Username) {
                      localStorage.setItem('user', u.Username);
                    }
                  }} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <FavMovieView
          favoriteMovieList={user.FavoriteMovies}
          movies={movies}
          removeFavoriteMovie={(movieId) => this.removeFavoriteMovie(movieId)}
        />

        {/* DELETE ACCOUNT */}
        <div className="other-options">
          <br />
          <h4>Delete Account</h4>

          <Button variant="danger" size="sm"
            onClick={(e) => this.handleDeregister(e)}>Deregister</Button>
          <br />
        </div>


      </Container>
    )
  }
}

let mapStateToProps = state => {
  return {
    user: state.user,
    movies: state.movies
  }
}

export default connect(mapStateToProps, { setUser })(ProfileView);

ProfileView.propTypes = {
  profile: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string.isRequired
  })
}