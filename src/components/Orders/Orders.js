import React from "react";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import { useNavigate } from 'react-router-dom';
import ReviewItem from "../Reviewitem/ReviewItem";

const Orders = () => {
  const [products] = useProduct();
 
  const [cart, setCart] = useCart(products);
  const navigate = useNavigate();
  const handleRemove = product => {
      const rest=cart.filter(pd=>pd.id!==product.id)
      setCart(rest)
      removeFromDb(product.id)
  };
  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cart.map((product) => (
          <ReviewItem key={product.id} product={product}
          handleRemove={handleRemove}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart Cart={cart}>
           
            <button onClick={()=>navigate('/inventory')}>Proceed Shipping </button>
         
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
