import React, { useState, useEffect }  from 'react'
import './cartpage.css'
import { connect } from "react-redux";

// const cartFromLocalStorage=JSON.parse(localStorage.getItem('cart') || "[]")
const Demo = ({ cart }) => {
   
    const [cartTitle, setCartTitle] = useState()
    const [cartStoreLocally, setcartStoreLocally] = useState([cart])
    let localCart = localStorage.getItem("cart");
 
    useEffect(() => {
        let title=""
        cart.forEach((item) => {
            title += item.title;
        });
        localStorage.setItem('cart',JSON.stringify(cart.id))
        setCartTitle( title );
    }, [cart, cartTitle ]);
    
    useEffect(() => {
        localCart = JSON.parse(localCart);
        if (localCart) setcartStoreLocally(localCart)
      }, [])
    
    return (
        <>
            <div className="cartpage" >
                {cartTitle}
           
                
                
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(Demo);
