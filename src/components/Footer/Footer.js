import React from 'react';
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {

    const linkStyle = {
        textDecoration: "none",
        color: "white",
        fontSize: "18px",
        margin: "10px"
    }

    return (
        <div className="bg-dark p-5">
            <Container>
                <Row>
                    <Col lg={8} md={6} xs={12} className="text-light">
                        <h5>follow us on social media.</h5>
                        <div className="icons">
                            <i class="fab fa-facebook-square fs-3 me-3"></i>
                            <i class="fab fa-instagram-square fs-3 me-3"></i>
                            <i class="fab fa-youtube fs-3"></i>
                        </div>
                        <hr style={{ width: "50%" }} />
                        <p>&copy; Copyright reserved in Programming Hero</p>
                    </Col>
                    <Col lg={4} md={6} xs={12}>
                        <Link style={linkStyle} to="/home">Home</Link>
                        <Link style={linkStyle} to="/about">About us</Link>
                        <Link style={linkStyle} to="/services">Services</Link>
                        <Link style={linkStyle} to="/contact">Contact</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;