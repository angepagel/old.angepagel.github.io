import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <header>
      <Navbar className="bg-dark py-3" expand="lg">
        <Container>

          <Navbar.Brand>
            <Link to="/">Ange Pagel</Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav">
            {/* <MenuIcon /> */}
          </Navbar.Toggle>

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <NavLink to="/">
                  Accueil
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/blog">
                  Blog
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </header>
  );
}
