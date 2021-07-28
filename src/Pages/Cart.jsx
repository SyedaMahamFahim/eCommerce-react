import React from 'react'
import Breadcrumbs from '../Components/Banner/Breadcrumbs'
import CartPageContent from '../Components/CartPageContent/CartPageContent'
const Cart=()=>{
    return(
        <>
        <Breadcrumbs pageName="Cart"/>
        <CartPageContent/>
        </>
    )
}
export default Cart