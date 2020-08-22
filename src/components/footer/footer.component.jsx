import React from 'react'

import Logo from '../../assets/Logo.svg'
import Instagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter.svg'
import Facebook from '../../assets/facebook.svg'

import './footer.styles.scss'

const Footer = () => (
        <div className="footerDesktop">
            <img src={Logo} alt="Logo in the footer" className="logoFooter"/>

            <div className="frame31footerA">
                {/* --------------------------- FRAME 29 ------------------------------- */}
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
                {/* --------------------------- FRAME 30 ------------------------------- */}
                <div className="frame30Footer">
                    <p className="tjenester">
                        Tjenester
                    </p>
                    <p className="produkterFooter">
                        Produkter
                    </p>
                    <p className="kontaktFooter">
                        Kontakt
                    </p>
                    <p className="abonnementFooter">
                        Abonnement
                    </p>
                    <p className="logInnFooter">
                        Logg inn
                    </p>
                </div>
                {/* --------------------------- FRAME 31b ------------------------------- */}
                <div className="frame31FooterB">
                    <p className="personvernFooter">
                        Personvernerklæring
                    </p>
                    <p className="cookiesFooter">
                        Cookies
                    </p>
                    <p className="languageFooter">
                        Language: ENG (US
                    </p>
                    {/* --------------------------- FRAME 27 ------------------------------- */}
                    <div className="frame27Footer">
                        <img src={Twitter} alt="" className="twitterFooter"/>
                        <img src={Instagram} alt="" className="instagramFooter"/>
                        <img src={Facebook} alt="" className="facebookFooter"/>
                    </div>
                </div>
                
            </div>
        </div>
        
)

export default Footer