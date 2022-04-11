import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './shop.css'

const Shop = () => {
    const [products]=useProduct([])

    const[cart,setCart]=useState([])

    useEffect(()=>{
        const storedCart=getStoredCart()
        // console.log(storedCart)
        const saveCart=[];
        for(const id in storedCart){
            const addedProduct=products.find(product=>product.id===id)
            if(addedProduct){
                const quantity=storedCart[id];
                addedProduct.quantity=quantity;
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart)
    },[products])

    const handleClick=(selecteProduct)=>{
    //    const{id}=product
        let newCart=[];
        const exists=cart.find(product=>product.id===selecteProduct.id)
        if(!exists){
            selecteProduct.quantity=1;
           newCart=[...cart , selecteProduct]
        }
        else{
            const rest=cart.filter(product=>product.id!==selecteProduct.id)
            exists.quantity=exists.quantity+1;
            newCart=[...rest,exists]
        }
        
        setCart(newCart)
        addToDb(selecteProduct.id)
    }
    return (
        <div className='shop-container'>
         <div className="product-container">
       {
           products.map(product=>
               <Product 
               key={product.id}
               product={product}
               handleClick={handleClick}
               ></Product>
           )
       }
         </div>
         <div className="cart-container">
           <Cart Cart={cart}>
           <Link to='/orders'>
               <button>Review Order </button>
           </Link>
           </Cart>
        </div> 
        </div>
    );
};

export default Shop;