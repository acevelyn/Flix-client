import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


// Stylings
import './login-view.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    /* Send a request to the server for authentication */
    axios.post('https://evflixapp.herokuapp.com/login', {
      Username: username,
      Password: password
    }) /* If data matches what is in database, then call props.onLoggedIn(username) */
      .then(response => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch(e => {
        console.log('No such user')
      });
  };

  return (
    <>
    <Form>
      <h1 className="login-title">Login</h1>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" 
        placeholder="Enter username" 
        value={username} 
        required
        onChange={e => setUsername(e.target.value)} />
        <Form.Control.Feedback type="invalid">
          Please enter a valid Username
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Enter password" 
          value={password} 
          required
          onChange={e => setPassword(e.target.value)} 
          />
        <Form.Control.Feedback type="invalid">
          Please enter a valid password
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" size="md" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      
    <Link to={'/register'}>
     <Button variant="link">Register Now</Button>
    </Link>
    </Form>
    </>
  );
}

LoginView.proptypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired
};