import React from 'react'

import Logo from '../../assets/Logo.svg'

import './footer.styles.scss'

const Footer = () => (
        <div className="footerDesktop">
            <img src={Logo} alt="Logo in the footer" className="logoFooter"/>

            <div className="frame31footer">
                <div className="frame29Footer">
                    <p className="dekodeAS">
                        Deokode AS
                    </p>
                    <p className="telefonFooter">
                        Tlf: 23 08 00 00
                    </p>
                    <p className="epostFooter">
                        E-post: info@dekode.no
                    </p>
                    <p className="adresseFooter">
                        Tollbugata 11, Oslo
                    </p>
                    <p className="postBoksFooter">
                        Postboks 489 Sentrum, 0105 Oslo
                    </p>
                </div>
            </div>
        </div>
        
)

export default Footer