import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import useCart from '../../hooks/useCart';
import {addToDb, getStoredCart} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './shop.css'

const Shop = () => {
   

    const [cart, setCart] = useCart()
    const[pageCount,SetPageCount]=useState(0)
    const[page,setPage]=useState(0)
    const[size,setSize]=useState(10)


    const[products,setProducts]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)

        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[page,size])



    useEffect(()=>{
        fetch('http://localhost:5000/productCount')
        .then(res=>res.json())
        .then(data=>{
            const count=data.count;
         const page=Math.ceil(count/10)
         SetPageCount(page)
        })
    },[])


  

    const handleClick = (selectProduct) => { //    const{id}=product
        let newCart = [];
        const exists = cart.find(product => product._id === selectProduct._id)
        if (! exists) {
            selectProduct.quantity = 1;
            newCart = [
                ...cart,
                selectProduct
            ]
        } else {
            const rest = cart.filter(product => product._id !== selectProduct._id)
            exists.quantity = exists.quantity + 1;
            newCart = [
                ... rest,
                exists
            ]
        }

        setCart(newCart)
        addToDb(selectProduct._id)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                products.map(product => <Product key={
                        product._id
                    }
                    product={product}
                    handleClick={handleClick}></Product>)
            }
            <div>
               
            <div className='pagination my-5 mx-auto'>
            {
                    [...Array(pageCount).keys()].map(number=><button onClick={()=>setPage(number)} className={page===number?'selected':''}>{number+1}</button>)
                }
                
                <select onChange={e=>setSize(e.target.value)} name="" id="">
                    <option value="5">5</option>   
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
            </div>
            
             </div>
             
            <div className="cart-container">
                <Cart Cart={cart}>
                    <Link to='/orders'>
                        <button className='btn btn-warning mt-4'>Review Order
                        </button>
                    </Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default Shop;
