// CLASS COMPONENT

// Modules
import React from 'react';
import axios from 'axios';
import UserInfo from './user-info';
import FavMovieView from './favorite-movies';
import UpdateUser from './update-user';

// Stylings
import './profile-view.scss';
import { Row, Container, Col, Button, Form, Card } from 'react-bootstrap';


export class ProfileView extends React.Component {
  constructor() {
    super();
    this.state = {
      Username: null,
      Password: null,
      Email: null,
      Birthday: null,
      FavoriteMovies: [],
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
        this.setState({
          Username: response.data.Username,
          Email: response.data.Email,
          Birthday: response.data.Birthday,
          FavoriteMovies: response.data.FavoriteMovies
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // Update User Info / PUT Request 1
  handleUser(newUsername, newPassword, newEmail) {
    // handleUser(user) { user: user}
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
        // alert('Account has been updated')
        // window.open(`/users/${username}`, '_self');
      })
      .catch((error) => {
        console.log(error)
      });
  }
  // setUsername(username) {
  //   this.setState({ tempUsername: username });
  // }

  // setPassword(password) {
  //   this.setState({ tempPassword: password });
  // }

  // setEmail(email) {
  //   this.setState({ tempEmail: email });
  // }


  // Deregister User
  handleDeregister(user) {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    axios.delete(
      `http://exflixapp.herokuapp.com/users/${username}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.setState({
          user: null  // is this correct? user is not a state?
        })
        alert('Account has been deleted')
        window.location.pathname = "/";
      })
      .catch((err) => {
        console.log('your error is ' + err);
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
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // RENDER THIS..
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} sm={4}>
            <Card>
              <Card.Body>
                <UserInfo
                  name={this.state.Username}
                  email={this.state.Email}
                  birthday={this.state.Birthday} />
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={8}>
            <Card>
              <Card.Body>
                <UpdateUser
                  user={{
                    Username: this.state.Username,
                    Email: this.state.Email
                  }}
                  handleUser={(user) => {
                    this.setState(user);
                    if (user.Username && this.state.Username !== user.Username) {
                      localStorage.setItem('user', user.Username);
                    }
                  }}
                  handleDeregister={this.handleDeregister} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <FavMovieView favoriteMovieList={this.state.FavoriteMovies} movies={this.props.movies} removeFavoriteMovie={this.removeFavoriteMovie} />



        {/* <div className="logout-button">
      <Button variant="link" onClick={()=> { this.onLoggedOut() }}>Logout</Button>
    </div> */}

      </Container>
    )
  }
}




