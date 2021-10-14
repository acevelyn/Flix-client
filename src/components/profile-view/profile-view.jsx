import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import './profile-view.scss';

export class ProfileView extends React.Component {
  constructor(){
    super();
    }
  
  render() {
    const = { user, onBackClick }

    return (
      <Row className="profile-view justify-content-sm-center">
        <div className="user-username">
          <span className="label">Username:</span>
          <span className="value">{user.Username}</span>
        </div>
        <div className="user-email">
          <span className="label">Email:</span>
          <span className="value">{user.Email}</span>
        </div>
        <div className="user-birthday">
          <span className="label">Birthday:</span>
          <span className="value">{user.Birthday}</span>
        </div>
      </Row>
    )

  }
}