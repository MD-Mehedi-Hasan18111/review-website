import React, { useState, useEffect, useContext } from 'react';
import { cartContext } from '../../App';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllServices = () => {

    const [services, setServices] = useState([]);

    const [cart, setCart] = useContext(cartContext);

    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    let newCart = [];
    const handleOrder = (service) => {
        const existService = cart.find(sr => sr.id === service.id);
        if (existService) {
            const remainingService = cart.filter(sr => sr.id !== service.id);
            existService.quantity += 1;
            newCart = [...remainingService, existService];
        }
        else {
            service.quantity = 1;
            newCart = [...cart, service];
        }
        setCart(newCart);
    }

    console.log(services);

    return (
        <div>
            <NavBar />
            <div className="container p-4">
                <h2 className="text-center my-3">All Services</h2>
                <div className="row">
                    {
                        services.map(service => <ServiceCard
                            handleOrder={handleOrder}
                            key={service.id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllServices;