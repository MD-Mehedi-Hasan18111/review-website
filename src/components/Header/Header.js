import React, { useContext } from 'react';
import './Header.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import bannerSidePhoto from '../../images/banner-side-img.png';
import { Link } from 'react-router-dom';
import { cartContext } from '../../App';

const Header = () => {

    const [cart, setCart] = useContext(cartContext);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/home">E-learning</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/review"><button type="button" className="btn btn-sm btn-dark position-relative me-4">
                                    <i className="fas fa-shopping-cart"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {cart.length}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact"><i className="fas fa-user fs-4"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

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