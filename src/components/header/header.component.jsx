import React from 'react'

import Logo from '../../assets/Logo.svg'

import './header.styles.scss'

const Header = () => (
    <div className="header">
        <img src={Logo} alt="Teft logo" className="logo" />
    </div>
)

export default Header