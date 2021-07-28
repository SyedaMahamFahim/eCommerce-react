import React from 'react'
import {
    Switch,
    Route,
  } from "react-router-dom";
import Home from '../Pages/Home'  
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Faqs from '../Pages/Faqs'
import SingleProductPageContent from '../Components/Products/SingleProductPageContent/SingleProductPageContent';
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout';
import Shop from '../Pages/Shop';

import ShopPage from '../Pages/ShopPage';

function AppRouter(){
  return(
    <>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/faqs" component={Faqs}/>
      <Route exact path="/product/:id" component={SingleProductPageContent} />
      {/* <Route exact path="/singleproductpagecontent" /> */}
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/checkout" component={Checkout}/>
      <Route exact path="/shop" component={Shop}/>

      <Route exact path="/shopcornershop" component={ShopPage}/>

      {/* <Route exact path="/product/:title/:id" component={SingleProduct}/> */}

    </Switch>
    </>
  )
}
export default AppRouter;
