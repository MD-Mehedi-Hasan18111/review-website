import React, { useContext } from 'react';
import './Header.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import bannerSidePhoto from '../../images/banner-side-img.png';

const Header = () => {

    return (
        <div>
            <div className="banner">
                <Container>
                    <Row className="d-flex align-items-center mx-auto">
                        <Col className="text-white ps-5" lg={6} md={6} xs={12}>
                            <h1 className="fs-1">Welcome The E-learning Platform!</h1>
                            <p className="fs-6">A learning system based on formalised teaching but with the help of electronic resources is known as E-learning.</p>
                            <button className="btn btn-md btn-danger">Learn More</button>
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                            <img className="w-100" src={bannerSidePhoto} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Header;