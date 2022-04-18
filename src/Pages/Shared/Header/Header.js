import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth)

    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand as={Link} to="/"><img
                      style={{height:'60px'}}  src="https://i.ibb.co/pvpcv2n/gym-logo2-1.png" alt="" /> RIDA'S TRAINING AND FITNESS </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#reviews">Reviews</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav>
                                <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                                {user ?
                                    <button onClick={handleLogout} className='btn btn-link text-decoration-none text-white'>
                                        Logout
                                    </button> :
                                    <Nav.Link as={Link} to="/login">LogIn</Nav.Link>}

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