import React from 'react'
import Products from './Products';
// Redux
import { connect } from "react-redux";
const ShopPageContent=({ products })=>{
    return(
        <>
        <br />
      <div>
      {products.map((product) => (
        <>
        <Products key={product.id} productData={product} />
        <br /><br /><br />
        </>
      ))}
    </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
      products: state.shop.products,
    };
  };
  
export default connect(mapStateToProps)(ShopPageContent);