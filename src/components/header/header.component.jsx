import React from 'react'

import Logo from '../../assets/Logo.svg'
import Search from '../../assets/searchBlack.svg'
import HamburgerMobile from '../../assets/hamburgerMobile.svg'

import './header.styles.scss'

const Header = () => (
    <div>
        {/* --------------------- Header Desktop ------------------------------- */}
        <div className="header">
        {/* SUB-MENU */}
        <div className="subMenu">
            {/* Logo */}
            <img src={Logo} alt="Teft logo" className="logo" />
            {/* SubMenu items */}
            <h2 className="circles">
                Circles
            </h2>
            <h2 className="squares">
                Squares
            </h2>
            <h2 className="triangles">
                Triangles
            </h2>  
        </div>
        <div className="searchBox">
                <h2 className="searchText">
                    Search
                </h2>
                <img src={Search} className="searchVector" alt="Search logo Vector"/>
            </div>
    </div>
        {/* --------------------- Header Mobile ------------------------------- */}
        <div className="headerMobile">
            <div className="rectangleMobile">
                <img src={HamburgerMobile} alt="" className="hamburgerMobile"/>
                <img src={Logo} alt="" className="logoHeaderMobile"/>
                <img src={Search} alt="" className="searchHeaderMobile"/>
            </div>
        </div>
    </div>
)

export default Header