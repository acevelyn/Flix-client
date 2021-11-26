import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export class NavBarView extends React.Component {
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
            <Nav.Link as={Link} to={movies}>Movies</Nav.Link>
            <Nav.Link as={Link} to={profile}>Profile</Nav.Link>
            <Nav.Link as={Link} to={"/"} onClick={this.onLoggedOut}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBarView;