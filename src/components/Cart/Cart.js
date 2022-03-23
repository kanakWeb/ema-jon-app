import React from 'react';

const Cart = (props) => {
    return (
        <div >
             <h4>Order Summary</h4>
        <p>Select Item:{props.Cart.length}</p>
        </div>
    );
};

export default Cart;