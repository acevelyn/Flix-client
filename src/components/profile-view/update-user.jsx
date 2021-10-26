// FUNCTION COMPONENT

// Modules
import React from 'react';

// Stylings
import { Form, Button } from 'react-bootstrap';

function UpdateUser({ setUsername, setPassword, setEmail, handleUpdate, handleDeregister,
  user }) {
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

      {/* DELETE ACCOUNT */}
      <div className="other-options">
        <br />
        <h4>Delete Account</h4>

        <Button variant="danger" size="sm" type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleDeregister(user);
          }}>Deregister
        </Button>
        <br />
      </div>

    </Form>
  )

}



export default UpdateUser