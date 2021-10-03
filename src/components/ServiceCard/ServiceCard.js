import React from 'react';
import { Col } from 'react-bootstrap';

const ServiceCard = (props) => {

    const { name, banner, duration, price, rating, view } = props.service;

    return (
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Col>
                <div className="card h- 100 shadow-lg border-2">
                    <img src={banner} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h4>${price}</h4>
                        <div className="d-flex justify-content-between">
                            <div>
                                <i class="fas fa-star text-warning"></i> {rating}
                            </div>
                            <div>
                                <i class="fas fa-eye text-secondary"></i> {view}
                            </div>
                            <div>
                                <i class="fas fa-clock text-danger"></i> {duration}
                            </div>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <button onClick={() => { props.handleOrder(props.service) }} class="btn btn-sm btn-success"><i class="fas fa-cart-plus"></i> Buy Now</button>
                        <i class="far fa-heart fs-3 text-danger"></i>
                    </div>
                </div>
            </Col>
        </div>
    );
};

export default ServiceCard;