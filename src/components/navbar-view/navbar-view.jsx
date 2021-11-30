import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import NavLink from "react-bootstrap/NavLink";
import { Link } from 'react-router-dom';

class NavBarView extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  onLoggedOut = () => {
    localStorage.clear();
    window.open("/", "_self");
  };

  render() {
    const { user } = this.props;
    const movies = `/`;
    const profile = `/users/${user}`;

    if (!user) return null;

    return (
      <Navbar className="main-nav" bg="dark" collapseOnSelect fixed="top" expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center ml-auto">
            <NavLink as={Link} to={movies}>Movies</NavLink>
            <NavLink as={Link} to={profile}>Profile</NavLink>
            <NavLink as={Link} to={"/"} onClick={this.onLoggedOut}>
              Logout
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBarView;