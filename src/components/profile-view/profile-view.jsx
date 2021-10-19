// CLASS COMPONENT
import React from 'react';
import axios from 'axios';

// React Bootstrap Stylings
import { Row, Col, Button, Form } from 'react-bootstrap';

export class ProfileView extends React.Component {
  constructor(){
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

  componentDidMount(){
    console.log('PROFILE VIEW');
    const accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.getUser(accessToken);
    }
  }

   // Get User Info
  getUser(token) {
    const username = localStorage.getItem('user');
    axios.get(
      `https://evflixapp.herokuapp.com/users/${username}`, 
      { headers: { Authorization: `Bearer ${token}` },
    })
    .then((response)=> {
      console.log(response);
      this.setState({
        Username: response.data.Username,
        Email: response.data.Email,
        Birthday: response.data.Birthday,
        FavoriteMovies: response.data.FavoriteMovies
      });
    })
    .catch((error)=> {
      console.log(error);
    })
  }

   // Update User Info / PUT Request 1
  handleUpdate(newUsername, newPassword, newEmail, newBirthday) {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    axios.put(
      `https://evflixapp.herokuapp.com/users/${username}`, 
        {
        Username: newUsername,
        Password: newPassword,
        Email: newEmail,
        Birthday: newBirthday
        // FavoriteMovies: []
      },
      { headers: { Authorization: `Bearer ${token}`} }
    )
    .then((response)=> {
      this.setState({
        Username: response.data.Username,
        Password: response.data.Password,
        Email: response.data.Email,
        Birthday: response.data.Birthday
      });
      localStorage.setItem('user',response.data.Username)
      alert('Account has been updated')
    })
    .catch((error)=> {
      console.log(error)
    });
  }
  setUsername(username){
    this.setState({ tempUsername: username });
  }

  setPassword(password){
    this.setState({ tempPassword: password });
  }

  setEmail(email){
    this.setState({ tempEmail: email });
  }


   // Deregister User
  handleDeregister(user){
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    axios.delete(
      `http://exflixapp.herokuapp.com/users/${username}`,
     { headers: { Authorization: `Bearer ${token}`}}
     )
    .then(()=> {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
        this.setState({
        user: null  // is this correct? user is not a state?
        })
        alert('Account has been deleted')
    });
  }



  // Remove A Favorite Movie
  removeFavoriteMovie(movie) {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');

  axios.delete(`https://evflixapp.com/users/${username}/movies/${movie._id}`,
  { headers: { Authorization: `Bearer ${token}` },
  })
  .then(() =>{
    console.log('Movie was removed')
  })
  .catch((error)=> {
    console.log(error);
  })}


  render(){
    //  const { user } = this.props;
      return (
        <>
        <div className="profile-view">
          <h1> Profile Information</h1>
          <div className="username-info">
             <span className="label">Username:</span>
             <span className="value">{this.state.Username}</span>
          </div>
           <div className="email-info">
             <span className="label">Email:</span>
             <span className="value">{this.state.Email}</span>
           </div>
           <div className="birthday-info">
             <span className="label">Birthday:</span>
           <span className="value">{this.state.Birthday}</span>
          </div>
           <div className="favorite-movies">
             <span className="label">Favorite Movies:</span>
             <span className="value">{this.state.FavoriteMovies}</span>
             {/* Create Cards for Each Favorite Movie that has the button/link of opening up the 
             MovieView and a button/link to remove that movie from your favorites */}
           </div>
           {/*  Remove Favorite Movie Button */}
        <Button variant="secondary" size="sm" type="submit" 
          onClick={(e)=> {
            e.preventDefault();
            this.removeFavoriteMovie(
            this.state.FavoriteMovies);
            }}>Remove A Movie from Favorites
        </Button>
        </div>
       
      <Form>
      <br />
      <h2 className="update-title">Update Account Info</h2>
        <Form.Group controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control type="text" onChange={e => this.setUsername(e.target.value)} />
        </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="text" onChange={e => this.setPassword(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="text" onChange={e => this.setEmail(e.target.value)} />
      </Form.Group>
      
      {/* Submit Button */}
      <Button 
      variant="primary" 
      size="md" 
      type="submit" 
      onClick={
        (e) => {
        e.preventDefault();
        this.handleUpdate(
          this.state.tempUsername,
          this.state.tempPassword,
          this.state.tempEmail
          );
        }
        }>
        Submit
      </Button>

      <div className="other-options">
        <br />
        <h4>Delete Account</h4>

        {/* Deregister Button */}
        <Button variant="secondary" size="sm" type="submit" 
          onClick={(e)=> {
            e.preventDefault();
            this.handleDeregister(
            this.state.user);
            }}>Deregister
        </Button>
        <br/>

        <button onClick={props.logOutHandler}>New Log Out Button</button>
        <br/>

      </div>
    </Form>
     </>
    )
  }}




