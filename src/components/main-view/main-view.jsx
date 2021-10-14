// Modules
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// Components
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { MovieView } from '../movie-view/movie-view';
import { MovieCard } from '../movie-card/movie-card';
import { GenreView } from '../genre-view/genre-view';
import { DirectorView } from '../director-view/director-view';
import { ProfileView } from '../profile-view/profile-view';
import { NavView } from '../nav-bar/nav-bar'

// React Bootstrap Styling
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

// SCSS Styling
import './main-view.scss';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {  // Initial State is set to null
      movies: [],
      user: null
    };
  }


  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      console.log('component did mount');
      this.getMovies(accessToken);
    }
  }

  // Get All Users
  getUsers(token) {
    axios.get('https://evflixapp.herokuapp.com/users', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      this.setState({
        users: response.data
      });
    })
    .catch(function(error){
      console.log(error);
    })
  }

  // Get All Movies
  getMovies(token) {
    axios.get('https://evflixapp.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        // Assign the result to the state
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

 /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
  // Log In Function
  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    })
  }

  render() {
    const { movies, user } = this.state;
    return (
      <Router>
        <NavView user={user} />
        <Row className="main-view justify-content-md-center">

          {/* Root */}
          <Route exact path="/" render={() => {
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            if (movies.length === 0) return <div className="main-view" />;
            return movies.map(m => (
              <Col md={3} key={m._id}>
                <MovieCard movie={m} />
              </Col>
            ))
          }} />

           {/* Register */}
          <Route path="/register" render={() => {
            if (user) return <Redirect to="/" />
            return <Col>
              <RegistrationView />
            </Col>
          }}/>
          
           {/* User by Username */}
          <Route path="/users/:username" render={(history) =>{
            if(!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            if(movies.length === 0) return <div className="main-view" />
            return <ProfileView history={history} movies={movies}/>
          }} />

           {/* Movie by Movie Title */}
          <Route path="/movies/:movieId" render={({ match, history }) => {
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
             if (movies.length === 0) return <div className="main-view" />;
            return <Col md={8}>
              <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
            </Col>
          }} />

           {/* Genre by Genre Name */}
          <Route path="/genres/:name" render={({ match, history }) => {
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            if (movies.length === 0) return <div className="main-view" />;
            return <Col md={8}>
              <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()} />
            </Col>
          }} />

          {/* Director by Director Name */}
          <Route path="/directors/:name" render={({ match, history }) => {
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            if (movies.length === 0) return <div className="main-view" />;
            return <Col md={8}>
              <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={()=> history.goBack()}/>
            </Col>
          }
          } />
        </Row>
        {/* Log Out Button */}
        <Button variant="primary" size="md" type="submit" onClick={() => { this.onLoggedOut() }}>Logout</Button>
      </Router>
    );
  }
}