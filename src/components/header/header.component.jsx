import React from 'react'

import Logo from '../../assets/Logo.svg'
import Search from '../../assets/searchBlack.svg'

import './header.styles.scss'

const Header = () => (
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
                <img src={Search} className="searchVector" alt="Search logo Vector image"/>
            </div>
    </div>
)

export default Header