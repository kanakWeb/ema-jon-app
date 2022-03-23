import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const{Cart}=props;

    let total=0;
    let shipping=0;

Cart.forEach(cart => {
    total=total+cart.price;
    shipping=shipping+cart.shipping
});

const tax=parseFloat((total*0.1).toFixed(2));
const grandTotal=total+shipping+tax;
    return (
        <div className='cart-container'>
             <h4>Order Summary</h4>
        <p>Select Item:{Cart.length}</p>
        <p>Total Price:$ {total} </p>
        <p>Total Shipping: {shipping}</p>
        <p>Tax: {tax}</p>
        <h5>Grand Total:$ {grandTotal.toFixed(2)} </h5>
        </div>
    );
};

export default Cart;