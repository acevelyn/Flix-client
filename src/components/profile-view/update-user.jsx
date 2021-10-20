import React from 'react';
import { Link } from 'react-router-dom';

import {Form, Button } from 'react-bootstrap';

function UpdateUser({ tempUsername, tempEmail, tempPassword, user}) {
  return (
    <Form>
      <h2 className="update-title">Update Account Info</h2>
        <Form.Group controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
        </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="text" onChange={e => setPassword(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="text" onChange={e => setEmail(e.target.value)} />
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

        <Button variant="secondary" size="sm" type="submit" 
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