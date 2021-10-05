import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { cartContext } from '../../App';
import ReviewItem from '../ReviewItem/ReviewItem';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const ReviewOrder = () => {

    const [cart, setCart] = useContext(cartContext);
    let total = 0;
    for (const item of cart) {
        total += item.price * item.quantity;
    }

    const history = useHistory();

    const handler = () => {
        setCart([]);
        history.push('/completeOrder');
    }

    return (
        <div>
            <NavBar />
            <div className="container p-5">
                <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-12">
                        {
                            cart.length > 0 ? cart.map(service => <ReviewItem
                                key={service.id}
                                service={service}
                            ></ReviewItem>) : <h2>Cart is Empty!</h2>
                        }
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h2>Total Service: {cart.length}</h2>
                        <h3>Total Cost: ${total}</h3>
                    </div>
                </div>
                <Link to="/services">
                    <button className="btn btn-md btn-danger me-3">Back</button>
                </Link>
                <button onClick={handler} className="btn btn-md btn-success">Order Confirm</button>
            </div>
            <Footer />
        </div>
    );
};

export default ReviewOrder;