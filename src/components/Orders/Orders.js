import React from "react";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";
import {removeFromDb} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import {useNavigate} from 'react-router-dom';
import ReviewItem from "../Reviewitem/ReviewItem";

const Orders = () => {
    const [products] = useProduct();

    const [cart, setCart] = useCart();
    const navigate = useNavigate();
    const handleRemove = product => {
        const rest = cart.filter(pd => pd._id !== product._id)
        setCart(rest)
        removeFromDb(product._id)
    };
    return (
        <div className="shop-container">
            <div className="review-items-container">
                {
                cart.map((product) => (
                    <ReviewItem key={
                            product._id
                        }
                        product={product}
                        handleRemove={handleRemove}></ReviewItem>
                ))
            } </div>
            <div className="cart-container">
                <Cart Cart={cart}>

                    <button className='btn btn-warning mt-4'
                        onClick={
                            () => navigate('/shipment')
                    }>Proceed Shipping
                    </button>

                </Cart>
            </div>
        </div>
    );
};

export default Orders;
