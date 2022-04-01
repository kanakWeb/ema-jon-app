import React from "react";
import Product from "../product/Product";
import "./Cart.css";



const Cart = (props) => {
  const { Cart } = props;

//   console.log(props.childern);

  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of Cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }

  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart-container">
      <h4>Order Summary</h4>
      <p>Select Item:{quantity}</p>
      <p>Total Price:$ {total} </p>
      <p>Total Shipping: {shipping}</p>
      <p>Tax: {tax}</p>
      <h5>Grand Total:$ {grandTotal.toFixed(2)} </h5>
    {props.children}
    </div>
  );
};

export default Cart;
