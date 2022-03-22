import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './shop.css'

const Shop = () => {
    const [products,setProducts]=useState([])

    const[cart,setCart]=useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts (data))
    },[])

    const handleClick=(product)=>{
        const newCart=[...cart , product]
        setCart(newCart)
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
            <h4>Product Summary</h4>
            <p>Select Item:{cart.length}</p>
        </div> 
        </div>
    );
};

export default Shop;