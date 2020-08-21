import React from 'react'

import Logo from '../../assets/Logo.svg'

import './header.styles.scss'

const Header = () => (
    <div className="header">
        <div className="subMenu">
            {/* Logo */}
            <img src={Logo} alt="Teft logo" className="logo" />
            {/* SubMenu items */}
            <h2 className="circles">
                Circles
            </h2>
            <h2>
                Squares
            </h2>
        </div>
        
    </div>
)

export default Header