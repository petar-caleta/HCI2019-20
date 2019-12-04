import React from "react"
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import logo from "../images/logoinv.png"
// import 'bootstrap/dist/css/bootstrap.min.css'



//TRIBA SAM NAZVAT NAVBAR A NE HEADER AL JBG SAD


const Header = () => 
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    {/*###### LOGO ######*/}
    <Navbar.Brand href="./">
      <img
        src={logo}
        width="45"
        height="40"
        className="d-inline-block align-top"
        alt="CR logo"
      />
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">  
        {/*###### BOTUNI ######*/}
        <Nav className="mr-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./Blog">Blog</Nav.Link>
            <Nav.Link href="./AboutUs">About</Nav.Link>
            <Nav.Link href="./Contact">Contact</Nav.Link>
            <Nav.Link href="./MyGallery">My Gallery</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">Action1</NavDropdown.Item>
                <NavDropdown.Item href="#">Action2</NavDropdown.Item>
                <NavDropdown.Item href="#">Action3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
            </NavDropdown>
        </Nav>

        {/*###### LOGIN/REGISTER ######*/}
        <Nav>
            <Nav.Link href="#">Login</Nav.Link>
            <Nav.Link href="#">Register</Nav.Link>
        </Nav>
    </Navbar.Collapse>
</Navbar>

export default Header