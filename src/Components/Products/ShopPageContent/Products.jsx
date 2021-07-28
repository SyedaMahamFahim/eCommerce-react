import React from 'react'
import { Link } from 'react-router-dom';
// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
    addToCart,
  } from '../../../redux/Shopping/ShoppingActions'

const Products=({ productData,addToCart,loadCurrentItem })=>{
    return(
        <>
       <div >
           <img src={productData.image} alt="" style={{width: "400px"}}/>
      <h1>{ productData.price}</h1>
      <h1>{productData.title}</h1>
        <p>{productData.description}</p>
        <button
          onClick={() => addToCart(productData.id,productData.title)}
        >Add to cart </button>
        <Link 
        to={`/product/${productData.id}`}
        onClick={()=>loadCurrentItem(productData)}
        >
View Button
        </Link>
        
    </div>
        </>
    )
}

  
const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(Products);