import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <NavBar />
            <div className="p-2">
                <Container>
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <iframe title="g-map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14761.868854322032!2d91.77434366660457!3d22.3359808254442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z4Kas4KeN4Kav4Ka-4KaZ4KeN4KaV!5e0!3m2!1sbn!2sbd!4v1633451622536!5m2!1sbn!2sbd" width="600" height="350" style={{ border: "1px solid red", borderRadius: "15px" }} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="container p-4 text-center">
                                <h1 className="my-4">Contact Us</h1>
                                <input type="text" placeholder="Username..." /><br /><br />
                                <input type="email" placeholder="Email..." /><br /><br />
                                <input type="email" placeholder="Address..." /><br /><br />
                                <textarea placeholder="Message..." /><br /><br />
                                <button className="btn btn-outline-danger btn-lg">Send</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;