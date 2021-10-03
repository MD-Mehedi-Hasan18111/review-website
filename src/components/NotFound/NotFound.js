import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notFound.jpg';

const NotFound = () => {
    return (
        <div className="text-center">
            <img src={notFound} alt="" />
            <br />
            <Link to="/home">
                <button className="btn btn-lg btn-danger mt-4">Back To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;