import React from "react";
import { Link } from "gatsby";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Menu as MenuIcon } from "react-feather";

import "./header.scss";

export default class Header extends React.Component {
    
  render() {
    return (
      <header>
        <Navbar className="bg-dark py-3" expand="lg">
          <Container>

            <Navbar.Brand>
              <Link to="/">Ange Pagel</Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-nav">
              <MenuIcon />
            </Navbar.Toggle>

            <Navbar.Collapse id="navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item>
                  <Link to="/" activeClassName="nav-active">
                    Accueil
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/blog" activeClassName="nav-active">
                    Blog
                  </Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>
      </header>
    );
  }

}
