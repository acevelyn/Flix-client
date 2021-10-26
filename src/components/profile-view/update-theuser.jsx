// UPDATE USER ATTEMPT 2


import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


// Stylings
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export function UpdateTheUser(props) {
  const [newUsername, setUsername] = useState('');
  const [newPassword, setPassword] = useState('');
  const [newEmail, setEmail] = useState('');


  const handleUpdate = (event) => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    event.preventDefault();

    axios.put(
      `https://evflixapp.herokuapp.com/users/${user}`, {
      Username: newUsername,
      Password: newPassword,
      Email: newEmail
    },
      {
        headers: { Authorization: `Bearer ${token}` }
      }).then(response => {
        setUsername({ Username: response.data.Username })
        setPassword({ Password: response.data.Password })
        setEmail({ Email: response.data.Email })
      })
      .catch(e => {
        console.log('Could NOT do update, Error:' + e)
      });
  };

  return (
    <Form>
      <h2 className="update-title">Update Account Info</h2>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          // defaultValue={user.Username} HOW CAN I SET THE DEFAULT VALUE??
          onChange={e => { setUsername(e.target.value) }}
          required
          placeholder="Enter New Username"
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          defaultValue=''
          onChange={e => { setPassword(e.target.value) }}
          required
          minLength="8"
          placeholder="New Password Must be at least 8 Characters" />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="text"
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter New Email"
        />
      </Form.Group>
    </Form>
  );
}

LoginView.proptypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired
};