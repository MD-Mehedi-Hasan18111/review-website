import React from 'react';
import './About.css';
import { Col, Container, Row } from 'react-bootstrap';
import aboutSideImg from '../../images/about-img-4.gif';
import Footer from '../Footer/Footer';
import Mentor from '../Mentor/Mentor';
import NavBar from '../NavBar/NavBar';

const About = () => {
    return (
        <div>
            <NavBar />
            <Container className="p-5">
                <Row className="d-flex align-items-center about">
                    <Col lg={6} md={6} xs={12}>
                        <img className="w-100 h-100" src={aboutSideImg} alt="" />
                    </Col>
                    <Col lg={6} md={6} xs={12}>
                        <h3>About Us</h3>
                        <p>eLearning, or electronic learning, is the delivery of learning and training through digital resources. Although eLearning is based on formalized learning, it is provided through electronic devices such as computers, tablets and even cellular phones that are connected to the internet. E-learning definition is defined as providing Training and development to the Students/Employees through various Electronic media such as the Internet, audio, video etc. Web-based learning is meant by e-learning which commonly referred to as electronic learning or Virtual learning.</p>
                    </Col>
                </Row>
                <hr />
                <Mentor />
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;