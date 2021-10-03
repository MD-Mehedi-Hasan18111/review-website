import React from 'react';

const ReviewItem = (props) => {

    const { name, price, quantity, banner } = props.service;

    return (
        <div className="border border-2 shadow-lg m-3">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <img height="200px" width="300px" src={banner} alt="" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h3>{name}</h3>
                    <h5>Price: {price}</h5>
                    <p>Quantity: {quantity}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;