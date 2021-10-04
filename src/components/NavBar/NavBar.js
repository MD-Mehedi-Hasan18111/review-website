import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../App';
import './NavBar.css';
import logo from '../../images/logo2.png';

const NavBar = () => {

    const [cart, setCart] = useContext(cartContext);

    const linkStyle = {
        backgroundColor: "#e74c3c",
        color: "white",
        padding: "3px 15px",
        margin: "10px",
        borderRadius: "15px"
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/home">
                        <img height="50px" src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link style={linkStyle} className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={linkStyle} className="nav-link" to="/about">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={linkStyle} className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={linkStyle} className="nav-link" to="/contact">Contact</Link>
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
        </div>
    );
};

export default NavBar;