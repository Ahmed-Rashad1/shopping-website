import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Nav, Navbar, Container, Form, Button } from "react-bootstrap";

const TheNavbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand to="/" as={Link} className="fw-bold fs-4">
              Go Shopping
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="justify-content-center flex-grow-1 pe-3 text-center"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Nav.Link as={Link} aria-current="page" to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex me-5" style={{width: "40%"}}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <div className="bottons d-flex my-2"            >
              <Nav.Link
                to="/login"
                as={Link}
                className="btn btn-light me-2 p-2 text-nowrap"
              >
                <i className="fa fa-sign-in me-1"></i> Login
              </Nav.Link>
              <Nav.Link
                to="/register"
                as={Link}
                className="btn btn-light me-2 p-2 text-nowrap"
              >
                <i className="fa fa-user-plus me-1"></i> Register
              </Nav.Link>
              <Nav.Link
                to="/cart"
                as={Link}
                className="btn btn-success me-2 p-2 text-nowrap"
              >
                <i className="fa fa-shopping-cart me-1"></i> Cart (
                {state.length})
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <nav className="navbar navbar-expand-lg bg-primary py-3 shadow-sm">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold fs-4 text-white" to="/">
            Go Shopping
          </NavLink>
          <button
            className="navbar-toggler border-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link text-white ms-4" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white ms-4" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white ms-4" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="bottons">
              <NavLink to="/login" className="btn btn-light me-2">
                <i className="fa fa-sign-in me-1"></i> Login
              </NavLink>
              <NavLink to="/register" className="btn btn-light me-2">
                <i className="fa fa-user-plus me-1"></i> Register
              </NavLink>
              <NavLink to="/cart" className="btn btn-success">
                <i className="fa fa-shopping-cart me-1"></i> Cart (
                {state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default TheNavbar;
