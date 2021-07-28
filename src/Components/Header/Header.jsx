import React from 'react'
import Navbar from './Navbar';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import LOGO from '../Media/logo.png'
import MobileResponsive from './MobileResponsive';
import '../Css/style.css'
import HeaderIcons from './HeaderIcons';



import './header.css'
import '../style.css'
const Header = () => {
    return (
        <>
            <div>
                <section className="top-header">
                    <div className="top-header-content">
                        <div className="top-header-left">
                            <div className="top-header-left-col-1">
                                <p className="top-header-left-para">Welcome to ShopCorner</p>
                            </div>
                            <div className="top-header-left-col-1">
                                <p className="top-header-left-para"><BiPhoneCall /> +92-1234-45056</p>
                            </div>


                        </div>
                        <div className="top-header-right">
                            <p className="top-header-right-para">
                                <AiOutlineMail className="change-icons-color" /> contact@shopcorner.com</p>
                        </div>
                    </div>
                </section>
                <header>
                    <div className="logo">
                        <img src={LOGO} alt="" className="logo" />
                    </div>
                    <div className="searchbar">
                        <form action="" className="searchbar-form">
                            <input type="search" name="" id="" className="form-control" />
                            <button type="submit" class="btn">SEARCH</button>
                        </form>
                    </div>
                   <HeaderIcons/>

                </header>
                <div className="navigationbar-section">
                    <Navbar />
                </div>
                <div className="mobile-header">
                <div className="logo">
                        <img src={LOGO} alt="" className="logo" />
                </div>
                <div className="mobile-bar">
                <MobileResponsive />
                </div>
                </div>
            </div>
        </>
    )
}


export default Header


