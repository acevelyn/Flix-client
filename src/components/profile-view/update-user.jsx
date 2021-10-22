// FUNCTION COMPONENT

// Modules
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Stylings
import {Form, Button } from 'react-bootstrap';

// NEW

// export function LoginView(props) {
//   const [username, newUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [validated, setValidated] = useState(false)

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     /* Send a request to the server for authentication */
//     axios.post('https://evflixapp.herokuapp.com/login', {
//       Username: username,
//       Password: password
//     }) /* If data matches what is in database, then call props.onLoggedIn(username) */
//       .then(response => {
//         const data = response.data;
//         props.onLoggedIn(data);
//       })
//       .catch(e => {
//         console.log('No such user')
//       });
//   };

// END OF NEW

function UpdateUser({ tempUsername, tempEmail, tempPassword, user}) {
  return (
    <Form>
      <h2 className="update-title">Update Account Info</h2>
        <Form.Group controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control 
            type="text"
            // defaultValue={user.Username} HOW CAN I SET THE DEFAULT VALUE??
            onChange={e => {setUsername(e.target.value)}} 
            required
            placeholder="Enter New Username"
            />
        </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control 
        type="password" 
        defaultValue=''
        onChange={e => {setPassword(e.target.value)}}
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
      
      {/* Submit Button */}
      <Button 
      variant="primary" 
      size="md" 
      type="submit" 
      onClick={(e) => {
        e.preventDefault();
        handleUpdate(
          tempUsername,
          tempPassword,
          tempEmail
          );
        }
        }>
        Submit
      </Button>

      {/* DELETE ACCOUNT */}
      <div className="other-options">
        <br />
        <h4>Delete Account</h4>

        <Button variant="danger" size="sm" type="submit" 
          onClick={(e)=> {
            e.preventDefault();
            handleDeregister(user);
            }}>Deregister
        </Button>
        <br/>
      </div>

    </Form>
  )

}
export default UpdateUser