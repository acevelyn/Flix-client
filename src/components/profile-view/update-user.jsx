// FUNCTION COMPONENT

// Modules
import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/actions';

// Stylings
import { Form, Button } from 'react-bootstrap';

export function UpdateUser({
  handleUser,
  user
}) {
  const [username, setUsername] = useState(user.Username);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(user.Email);


  const handleUpdate = () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');


    axios.put(
      `https://evflixapp.herokuapp.com/users/${user}`, {
      Username: username,
      Password: password,
      Email: email
    },
      {
        headers: { Authorization: `Bearer ${token}` }
      }).then(response => {
        handleUser(response.data);
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
          defaultValue={user.Username}
          onChange={e => { setUsername(e.target.value) }}
          required
          placeholder="Enter New Username"
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          onChange={e => { setPassword(e.target.value) }}
          required
          minLength="8"
          placeholder="New Password Must be at least 8 Characters" />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="text"
          defaultValue={user.Email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter New Email"
        />
      </Form.Group>

      {/* Submit Button */}
      <Button
        variant="primary"
        size="md"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleUpdate(e);
        }
        }>
        Submit
      </Button>

    </Form>
  )

}



export default connect(null, { updateUser })(UpdateUser);