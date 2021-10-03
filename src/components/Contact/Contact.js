import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Header />
            <div className="container p-4 text-center">
                <h1 className="my-4">Contact Us</h1>
                <input type="text" placeholder="Username..." /><br /><br />
                <input type="email" placeholder="Email..." /><br /><br />
                <textarea placeholder="Message..." /><br /><br />
                <button className="btn btn-outline-danger btn-lg">Send</button>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;