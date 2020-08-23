import React from 'react'

import Logo from '../../assets/Logo.svg'
import Instagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter.svg'
import Facebook from '../../assets/facebook.svg'

import './footer.styles.scss'

const Footer = () => (
    <div>
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
         {/* FOOTER MOBILE */}
         <div className="frame33Footer">
            <img src={Logo} alt="" className="logoFooterMobile"/>
            <div className="frame31FooterMobile">
                <div className="frame29FooterMobile">
                    <p className="dekodeASFooterMobile">
                        Dekode AS
                    </p>
                    <p className="telefonFooterMobile">
                        Tlf: 23 08 00 00
                    </p>
                    <p className="epostFooterMobile">
                        E-post: info@dekode.no
                    </p>
                    <p className="adresseFooterMobile">
                        Tollbugata 11, Oslo
                    </p>
                    <p className="postBoksFooterMobile">
                        Postboks 489 Sentrum, 0105 Oslo 
                    </p>
                </div>
                <div className="frame30FooterMobile">
                    <p className="tjenesterFooterMobile">
                        Tjenester
                    </p>
                    <p className="produkterFooterMobile">
                        Produkter
                    </p>
                    <p className="kontaktFooterMobile">
                        Kontakt
                    </p>
                    <p className="abonnementFooterMobile">
                        Abonnement
                    </p>
                    <p className="logInnFooterMobile">
                        Logg inn
                    </p>
                    <p className="personvernFooterMobile">
                        Personvernerklæring
                    </p>
                    <p className="cookiesFooterMobile">
                        Cookies
                    </p>
                    <p className="languageFooterMobile">
                        Language: ENG (US)
                    </p>
                    <div className="frame27FooterMobile">
                        <img src={Twitter} alt="" className="twitterFooterMobile"/>
                        <img src={Instagram} alt="" className="instagramFooterMobile"/>
                        <img src={Facebook} alt="" className="facebookFooterMobile"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        
)

export default Footer