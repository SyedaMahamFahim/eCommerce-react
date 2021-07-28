import React from 'react'
import Breadcrumbs from '../Components/Banner/Breadcrumbs'
// import CartPageContent from '../Components/CartPageContent/CartPageContent'
import CheckoutPageContent from '../Components/CheckoutPageContent/CheckoutPageContent'
const Checkout=()=>{
    return(
        <>
        <Breadcrumbs pageName="Checkout"/>
        <CheckoutPageContent/>
        </>
    )
}
export default Checkout