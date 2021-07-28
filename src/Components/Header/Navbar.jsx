import React from 'react'
import { MenuItems } from "./MenuItems"
import SideAboutModal from './SideAboutModal';
import {Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
   
    // const [toggleNavBar,setToggleNavBar]=useState(false)

    return (
        <>
            <nav>
                <div className="navbar">
                    <div className="about-icon">
                   <SideAboutModal/>
                    </div>
                    <div className="menu">
                        <ul className="nav-menu-ul">
                            {MenuItems.map((item, index) => {
                                return (
                                    <li key={index} className="nav-menu-li">

                                        
                                        <Link className={item.cName} to={item.url}>
                                        {item.title}
                                        </Link>

                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
            
     
    
        </>
    )
}

export default Navbar