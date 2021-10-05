import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './registration-view.scss';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthdate);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onRegistration(username);
  };

  return (
    <form>
      <label className="username">
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>

      <label className="password">
        Password:
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>

      <label className="email">
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>

      <label className="birthdate">
        Birthday:
        <input type="text" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
      </label>

      <button className="register-button" type="submit" onClick={handleSubmit}>Submit</button>
    </form>
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