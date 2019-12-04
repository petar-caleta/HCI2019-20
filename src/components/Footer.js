import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Logo from '../images/logoinv.png'


import "../styles/footerStyle.css"
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import linkedin from "../images/linkedin.svg"
import twitter from "../images/twitter.svg"
import whatsapp from "../images/whatsapp.svg"
import youtube from "../images/youtube.svg"




const Footer = () =>

<footer>
    <Container className="container">
        <Row className="row">

            <Col lg={5} md={5} sm={4} xs={12}>
                <ul className="brandName">
                    <span>
                        <img src={Logo} alt="CR Logo"/> 
                        GROUP
                    </span>
                    <li>
                        <p>CR Group is one of the leading real estate companies in Croatia. We offer a complete portfolio of real estate services including sales and leasing of residential and commercial properties. We conduct research studies and valuations surveys upon request.</p>
                    </li> 
                    <li>
                        <p>Adress: Ul. Ruđera Boškovića 32, 21000, Split</p>
                    </li> 
                    <li>
                        <p>Phone number: 021 XXX XXX</p>
                    </li>

                </ul>
            </Col>
            
            <Col lg={4} md={4} sm={4} xs={12}>
                <ul className="socials">
                    <span>KEEP IN TOUCH</span>
                    <li><img src={facebook} alt="facebook"/></li>
                    <li><img src={instagram} alt="instagram"/></li>
                    <li><img src={linkedin} alt="linkedin"/></li>
                    <li><img src={twitter} alt="twitter"/></li>
                    <li><img src={whatsapp} alt="whatsapp"/></li>
                    <li><img src={youtube} alt="youtube"/></li>
                    </ul>
            </Col>

            <Col lg={3} md={3} sm={4} xs={12}>
                <ul className="newsletter">
                    <span>SIGN UP FOR NEWSLETTER</span>
                    <li>
                        <Form.Control placeholder="Your name"/>
                    </li>
                    <li>
                        <Form.Control type="email" placeholder="Email adress"/>
                    </li>
                    <li>
                    <OverlayTrigger 
                        trigger="hover"
                        placement="bottom" 
                        overlay={
                            <Tooltip id="requiredid">
                                Not yet implemented, sorry!
                            </Tooltip>
                        }>

                            <Button variant="outline-primary" style={{width:"100%"}}>
                                SIGN UP
                            </Button>

                    </OverlayTrigger>
                    </li>

                </ul>
                
            </Col>
        </Row>

    </Container>
</footer>


export default Footer