import React from 'react';
import { Link } from 'react-router-dom';

const CompleteOrder = () => {
    return (
        <div className="text-center">
            <h2>Your Order Has been Successfully!</h2>
            <h1>Thank You!</h1>
            <Link to="/home">
                <button className="btn btn-lg btn-danger">Back To Home</button>
            </Link>
        </div>
    );
};

export default CompleteOrder;