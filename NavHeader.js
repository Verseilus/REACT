import { Component } from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class NavHeader extends Component {
    render(){
        const navStyle = {
            color: "white"
        }
        return(
            <Navbar bg="dark" expand="sm" >
                <Container>
                    <Navbar.Brand style={navStyle}>Weather App
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar"/>
                    <Navbar.Collapse id="navbar">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" style={navStyle}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/contact" style={navStyle}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}