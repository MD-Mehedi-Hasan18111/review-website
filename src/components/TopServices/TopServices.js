import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { cartContext } from '../../App';
import ServiceCard from '../ServiceCard/ServiceCard';

const TopServices = () => {

    const [services, setServices] = useState([]);

    const [cart, setCart] = useContext(cartContext);

    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleOrder = (service) => {
        const newCart = [...cart, service];
        setCart(newCart);
    }

    const topServices = services.slice(0, 4);

    return (
        <div className="p-4 bg-dark">
            <h2 className="text-center text-light my-4">Top Services</h2>
            <Container>
                <Row>
                    {
                        topServices?.map(service => <ServiceCard
                            handleOrder={handleOrder}
                            key={service.id}
                            service={service}
                        ></ServiceCard>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default TopServices;