import React from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Link } from "react-router-dom";;

//props.isNotSignedIn
const NavBar = (props) => {

    return (
        <Router>
            <Navbar sticky="top" variant="dark" bg="dark" className="w-100">
                <Navbar.Brand><Nav.Link as={Link} to="/" className="navbar-brand">Home</Nav.Link></Navbar.Brand>
                <div style={{ position: 'relative', marginLeft: "auto", display: "inline-flex" }}>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/search" value="search" className="navbar-brand">Search</Nav.Link>
                    </Nav.Item>
                </div>
            </Navbar>
        </Router>

    )
}

export default NavBar;