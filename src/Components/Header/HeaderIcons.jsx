import React, { useState, useEffect } from 'react'
import { GoPerson } from 'react-icons/go';
import { AiFillHeart } from 'react-icons/ai';
import { BiBasket } from 'react-icons/bi';
import './header.css'
import { connect } from "react-redux";
const HeaderIcons = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

    return (
        <>
            <div className="user-contact-icons">
                <div className="single-header-icon"><AiFillHeart className="header-icons" /></div>

                <div className="single-header-icon"><GoPerson className="header-icons" /></div>
                <div className="single-header-icon"><BiBasket className="header-icons" />
                    <span className="cart-basket">{cartCount}</span></div>
            </div>
            
        </>

    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(HeaderIcons);
