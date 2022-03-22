import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LockIcon from "@mui/icons-material/Lock";
function NavbarComponent() {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container fluid>
          <Link to="/" className="links">
            <h1>RickMorty</h1>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/favorites" className="links">
                <h3>Favorites</h3>
              </Link>
              <Link to="/search" className="links">
                <h3>search</h3>
              </Link>
            </Nav>
            <Nav className="ml-auto" navbarScroll>
              <Link to="/loginauth" className="links">
                Login
                <VpnKeyIcon />
              </Link>
              <Link to="/signupauth" className="links">
                Signup
                <LockIcon />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
