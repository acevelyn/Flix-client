import React from 'react';
import axios from 'axios';
import { Button, Card, CardDeck, Form, Row } from 'react-bootstrap';
import './profile-view.scss';
import UserInfo from './user-info';
import UpdateUser from './update-user';

export class NewProfileView extends React.Component {
  constructor() {
    super();

    this.state = {
      Name: null,
      Username: null,
      Password: null,
      Email: null,
      Birthday: null,
      FavoriteMovies: [],
      validated: null,
    };
  }

  componentDidMount() {
    const accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.getUser(accessToken);
    }
  }


  // get user method
  getUser(token) {
    const username = localStorage.getItem('user');
    axios.get(`https://evflixapp.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        this.setState({
          // Name: response.data.Name,
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
          Birthday: response.data.Birthday,
          FavoriteMovies: response.data.FavoriteMovies,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  removeFavouriteMovie() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');


    axios
      .delete(`https://evflixapp.herokuapp.com/users/${username}/movies/${movie._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        alert('Movie was removed');
        this.componentDidMount();
      })
      .catch(function (error) {
        console.log(error);
      })
    // .then(() => window.location.reload());
  }

  handleUpdate(e, newUsername, newPassword, newEmail) {
    this.setState({
      validated: null,
    });

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({
        validated: true,
      });
      return;
    }
    e.preventDefault();

    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');

    axios.put(`https://evflixapp.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}` },
      data: {
        Username: newUsername ? newUsername : this.state.Username,
        Password: newPassword ? newPassword : this.state.Password,
        Email: newEmail ? newEmail : this.state.Email,
      },
    })
      .then((response) => {
        alert('Saved Changes');
        this.setState({
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
        });
        localStorage.setItem('user', this.state.Username);
        window.open(`/users/${username}`, '_self');
      })
      .catch(function (error) {
        console.log('The error is' + error);
      });
  }

  setUsername(input) {
    this.Username = input;
  }

  setPassword(input) {
    this.Password = input;
  }

  setEmail(input) {
    this.Email = input;
  }


  handleDeleteUser(e) {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');

    axios.delete(`https://evflixapp.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        alert('Your account has been deleted.');
        window.open(`/`, '_self');
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { FavoriteMovies, validated } = this.state;
    const { movies } = this.props;

    return (
      <>
        <UserInfo
          name={this.state.Username}
          email={this.state.Email}
          birthday={this.state.Birthday} />

        {/* <UpdateUser /> */}

        <Row className="profile-view">
          <Card className="profile-card">
            <h2>Your Favorites Movies</h2>
            <Card.Body>
              {FavoriteMovies.length === 0 && <div className="text-center">Empty.</div>}

              <div className="favorites-movies ">
                {FavoriteMovies.length > 0 &&
                  movies.map((movie) => {
                    if (movie._id === FavoriteMovies.find((favMovie) => favMovie === movie._id)) {
                      return (
                        <CardDeck className="movie-card-deck">
                          <Card className="favorites-item card-content" style={{ width: '16rem' }} key={movie._id}>
                            <Card.Img style={{ width: '18rem' }} className="movieCard" variant="top" src={movie.ImageURL} />
                            <Card.Body>
                              <Card.Title className="movie-card-title">{movie.Title}</Card.Title>
                              <Button size='sm' className='profile-button remove-favorite' variant='danger' value={movie._id} onClick={(e) => this.removeFavouriteMovie(e, movie)}>
                                Remove
                              </Button>
                            </Card.Body>
                          </Card>
                        </CardDeck>
                      );
                    }
                  })}
              </div>
            </Card.Body>

            <h1 className="section">Update Profile</h1>
            <Card.Body>
              <Form noValidate validated={validated} className="update-form" onSubmit={(e) => this.handleUpdate(e, this.Name, this.Username, this.Password, this.Email, this.Birthdate)}>


                <Form.Group controlId="formBasicUsername">
                  <Form.Label className="form-label">Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Change Username"
                    defaultValue={this.state.Username}
                    onChange={(e) => this.setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="form-label">
                    Password<span className="required">*</span>
                  </Form.Label>
                  <Form.Control type="password"
                    placeholder="New Password"
                    onChange={(e) => this.setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="form-label">Email</Form.Label>
                  <Form.Control
                    type="email"
                    defaultValue={this.state.Email}
                    placeholder="Change Email" onChange={(e) => this.setEmail(e.target.value)} />
                </Form.Group>



                <Button variant='danger' type="submit">
                  Update
                </Button>

                <h3>Delete your Account</h3>
                <Card.Body>
                  <Button variant='danger' onClick={(e) => this.handleDeleteUser(e)}>
                    Delete Account
                  </Button>
                </Card.Body>
              </Form>

            </Card.Body>
          </Card>
        </Row>
      </>
    );
  }
}