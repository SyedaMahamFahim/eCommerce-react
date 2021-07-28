import React, { useState } from 'react'
import Breadcrumbs from '../../Banner/Breadcrumbs';
import "./singleproductpagecontent.css"
import ImageGallery from 'react-image-gallery';
import { BsHeart } from 'react-icons/bs';
import "react-image-gallery/styles/css/image-gallery.css";
import SingleProductDataImages from './SingleProductData';
import ProductContent from './ProductDetail';
// Redux
import { connect } from "react-redux";
import { addToCart } from "../../../redux/Shopping/ShoppingActions"

const SingleProductPageContent = ({ currentItem, addToCart }) => {

    const [addToWishList, setAddToWishList] = useState(true)
    const [cartQty, setCartQty] = useState(0)
    return (
        <>
            < Breadcrumbs pageName="Banner" />
            <section className="productpage">
                <div className="productpage-section">
                    <div className="productpage-img">
                        <div className="sale-new">
                            <span className="sale">Sale</span>
                            <span className="new">New</span>
                        </div>

                        <ImageGallery items={SingleProductDataImages} showNav={false} showBullets={true} showPlayButton={false}  />
                        <div className="productpage-allimg">

                        </div>
                    </div>
                    <div className="productpage-desc">
                        <div className="product-content">
                            <div className="productpage-product-rating">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="yellow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"></path></svg>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="yellow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"></path></svg>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="yellow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"></path></svg>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="yellow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"></path></svg>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="yellow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"></path></svg>
                            </div>
                            <div className="productpage-customer-reviewer">
                                <h3 className="customer-reviewer">(25 customer reviews)</h3>
                            </div>
                        </div>
                        <h1 className="productpage-product-title">
                        {currentItem.title}
                        </h1>
                        <h3 className="productpage-product-price">
                        {currentItem.price}
                        </h3>
                        <p className="productpage-product-desc">
                            {currentItem.description}
                        </p>
                        <div className="productpage-product-content">
                            <div class="productpage-content-title">Size</div>
                            <div className="productpage-size-option">
                                <input type="radio" id="x" defaultValue="x" defaultChecked name="size" />
                                <label htmlFor="x" className="product-lable">x</label>
                                <input type="radio" id="m" defaultValue="m" name="size" />
                                <label htmlFor="m" className="product-lable">m</label>
                                <input type="radio" id="xl" defaultValue="xl" name="size" />
                                <label htmlFor="xl" className="product-lable">xl</label>
                            </div>
                        </div>
                        <div className="productpage-product-content">
                            <div class="productpage-content-title">Quantity</div>

                            <div className="cart-plus-minus">
                                <button className="qtybutton"
                                    onClick={() => setCartQty(cartQty - 1)}
                                >-</button>
                                <span className="cartqty">
                                    {
                                        (cartQty < 0) ? "0" : cartQty
                                    } </span>
                                <button className="qtybutton" onClick={() => setCartQty(cartQty + 1)}>+</button></div>
                        </div>
                        <div className="productpage-add-to-cart-btn">
                            <button className="add-to-cart"
                            onClick={() => addToCart(currentItem.id)}>
                                Add To Cart
                            </button>
                            <button id="add-to-wishlist" onMouseOver={() => setAddToWishList(!addToWishList)} className={addToWishList ? "wishlistblack" : "wishlistwhite"}>
                                <BsHeart />

                            </button>

                        </div>
                        <hr />

                        <div className="productpage-product-content">
                            <div class="productpage-content-title">SKU</div>
                            <div className="productpage-content-desc-info">
                            {ProductContent.SKU}
                            </div>
                        </div>
                        <div className="productpage-product-content">
                            <div class="productpage-content-title">Tag</div>
                            <div className="productpage-content-desc-info">
                            {ProductContent.Tag}
                            </div>
                        </div>
                        <div className="productpage-product-content">
                            <div class="productpage-content-title">Category</div>
                            <div className="productpage-content-desc-info">
                            {ProductContent.Category}
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </>
    )
}
const mapStateToProps = (state) => {
    return {
      currentItem: state.shop.currentItem,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(SingleProductPageContent);
