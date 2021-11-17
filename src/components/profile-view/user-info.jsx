// FUNCTION COMPONENTS

// Modules
import React from 'react';

function UserInfo({ name, email, birthday }) {
  return (
    <>
      <div className="user-info">
        <h2>Your Info</h2>
        <div className="username-info">
          <span className="label">Username: </span>
          <span className="value">{name}</span>
        </div>
        <div className="email-info">
          <span className="label">Email: </span>
          <span className="value">{email}</span>
        </div>
        <div className="birthday-info">
          <span className="label">Birthday: </span>
          <span className="value">{birthday}</span>
        </div>
      </div>
    </>
  )
}
export default UserInfo



