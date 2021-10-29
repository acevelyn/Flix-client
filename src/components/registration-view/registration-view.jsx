// FUNCTION COMPONENT

// Modules
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// Stylings
import './registration-view.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { InputGroup, Row, Col } from 'react-bootstrap';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [validated, setValidated] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://evflixapp.herokuapp.com/users', {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    })
      .then(response => {
        const data = response.data;
        console.log(data);
        window.open('/', '_self');
      })
      .catch(e => {
        console.log(e)
      });
  };


  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h1 className="register-title">Sign Up!</h1>
      <Form.Group controlId="formUsername">
        <Form.Label>Username: </Form.Label>
        <InputGroup hasValidation>
          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Create A Username"
            aria-describedby="inputGroupPrepend"
            required
            onChange={e => setUsername(e.target.value)} />
          <Form.Control.Feedback type="invalid">
            Please choose a Username
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password: </Form.Label>
        <Form.Control type="password"
          placeholder="Create A Password"
          required
          onChange={e => setPassword(e.target.value)} />
        <Form.Control.Feedback type="invalid">
          Please choose a Password
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email: </Form.Label>
        <Form.Control type="text"
          placeholder="Enter your Email"
          required
          onChange={e => setEmail(e.target.value)} />
        <Form.Control.Feedback type="invalid">
          Please enter your Email
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBirthdate">
        <Form.Label>Your Birthday: </Form.Label>
        <Form.Control type="text"
          placeholder="Enter your Birthdate"
          required
          onChange={e => setBirthday(e.target.value)} />
        <Form.Control.Feedback type="invalid">
          Please enter your Birthdate
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" size="md" type="submit" onClick={handleSubmit}>
        Submit
      </Button>

    </Form>


    // OLDER WAY
    // <Form.Group controlId="formEmail">
    //   <Form.Label>Email:</Form.Label>
    //   <Form.Control type="text" onChange={e => setEmail(e.target.value)} />
    // </Form.Group>

    // <Form.Group controlId="formBirthdate">
    //   <Form.Label>Birthday:</Form.Label>
    //   <Form.Control type="text" onChange={e => setBirthdate(e.target.value)} />
    // </Form.Group>



  );
}

RegistrationView.proptypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired
  }),
  onRegistration: PropTypes.func.isRequired
};