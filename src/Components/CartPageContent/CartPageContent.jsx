import React, { useState, useEffect }  from 'react'
import { connect } from "react-redux";
import CartItem from './CartItem';


// const cartFromLocalStorage=JSON.parse(localStorage.getItem('cart') || "[]")
const CartPageContent = ({ cart }) => {
   
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
  
    useEffect(() => {
      let items = 0;
      let price = 0;
  
      cart.forEach((item) => {
        items += item.qty;
        price += item.qty * item.price;
      });
  
      setTotalItems(items);
      setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
    
    return (
        <>
            <div className="cartpage" >
            {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
                <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
                
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};
  
export default connect(mapStateToProps)(CartPageContent);
