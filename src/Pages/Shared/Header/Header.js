import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src="https://i.ibb.co/zxN7CFq/logo.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#services">service</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav>
                                <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                                <Nav.Link as={Link} to="/login">LogIn</Nav.Link>

                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




        </div>
    );
};

export default Header;