import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../Reviewitem/ReviewItem";

const Orders = () => {
  const [products, setProducts] = useProduct();
  const [cart, setCart] = useCart(products);

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
            <Link to='/inventory'>
              <button>Procced Check</button>
            </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
