import React from 'react'

import rightArrowSmall from '../../assets/arrowSmallRight.svg'
import arrowLeft from '../../assets/arrowLeft.svg'
import rightArrow from '../../assets/arrowRight.svg'
import janeDoe from '../../assets/janeDoe.jpg'
import Twitter from '../../assets/twitter.svg'
import Instagram from '../../assets/instagram.svg'
import FaceBook from '../../assets/facebook.svg'
import Ocean1 from '../../assets/ocean1.png'
import Stor1 from '../../assets/stor1.svg'
import Stor2 from '../../assets/stor2.svg'
import Liten1 from '../../assets/liten1.svg'
import Liten2 from '../../assets/liten2.svg'
// import Mini1 from '../../assets/mini1.svg'

import './homepage.styles.scss'

const Homepage = () => (
    <div>
        {/* DESKTOP */}
        <div className="frame14">
            <div className="frame13">
                <p className="teft">
                    teft
                </p>
                <img src={rightArrowSmall} alt="" className="firstForward"/>
                <p className="circles">
                    Circles
                </p>
                <img src={rightArrowSmall} alt="" className="secondForward"/>
                <p className="purpleCircles">
                    Purple circles
                </p>
            </div>
            {/* Next Section --- Frame */}
            <h1 className="pageHeader">
                Purple Circles
            </h1>
            <p className="purpleAssociated">
                Purple is closely associated with violet. In optics, purple and violet refer to colors that 
                look similar, but purples are mixtures of red and blue or violet light.
            </p>
            {/* ------------------------- FRAME 28 -------------------------------------- */}
            <div className="frame28">
                <img src={janeDoe} alt="" className="janeDoeProfile"/>
                {/* ----------------------------- FRAME 26 -------------------------------- */}
                <div className="frame26">
                    <p className="janeDoe">
                        Jane Doe
                    </p>
                    <p className="projectManager">
                        Projectmanager Dekode – 5 min read – 2 june
                    </p>
                    <div className="frame27">
                        <img src={Twitter} alt="Twitter Icon" className="twitter"/>
                        <img src={Instagram} alt="Instagram Icon" className="instagram"/>
                        <img src={FaceBook} alt="Facebook Icon" className="facebook"/>
                    </div>
                </div>
            </div>
            {/* ------------------------- FRAME 17 ------------------------------------- */}
            <div className="frame17">
                <p className="purpleParagraph">
                    Purple is closely associated with violet. In common usage, both refer to colors that 
                    are between red and blue in hue, with purples closer to red and violets closer to blue. 
                    Similarly, in the traditional painters' color wheel, purple and violet are both placed 
                    between red and blue, with purple is closer to red
                </p>
                <div className="group470">
                    {/* Ocean Image */}
                    <img src={Ocean1} alt="" className="ocean1" />
                    <div className="frame16">
                        <p className="sitatDesktop">
                            “The process of making the dye was long, difficult and expensive”
                        </p>
                    </div>
                </div>
                <p className="optics">
                    In optics, violet is a spectral color: It refers to the color of any different single 
                    wavelength of light on the short wavelength end of the visible spectrum, between 
                    approximately 380 and 450 nanometers.
                </p>
            </div>
            <div className="humans">
                <p>
                    In humans, the L (red) cone in the eye is primarily sensitive to long wavelength light in 
                    the yellow-red region of the spectrum, but is also somewhat sensitive to the shorter 
                    wavelength violet light that primarily stimulates the S (blue) cone.
                </p>
            </div>
            <div className="frame21">
                <h2 className="asResult">
                    As a result
                </h2>
                <p className="asResultParagraph">
                    As a result, when violet light strikes the eye, the S-cone is stimulated strongly 
                    and the L-cone is stimulated weakly. Accordingly, strong blue light mixed with 
                    weaker red light can mimic this pattern of stimulation, causing humans to 
                    perceive colors that the same hue as violet, but with lower saturation.
                </p>
            </div>
            {/* -------------------- FRAME 25 ---------------------------------------------- */}
            <div className="frame25">
                <div className="frame20">
                    <img src={arrowLeft} alt="" className="leftVector"/>
                    <div className="frame18">
                        <img src={Stor1} alt="Artsy vector design in puprle, green and red." className="stor1"/>
                        <div className="frame23">
                            <h2 className="headerFrame23">
                                Lorem ipsum
                            </h2>
                        </div>
                        <p className="subFrame18">
                            17. august 2020
                        </p>
                        <p className="paragraphFrame18">
                            In optics, violet is a spectral color: It refers to the color of any different 
                            single wavelength of light on the short wavelength end of the visible spectrum.
                        </p>
                    </div>
                    <div className="frame19">
                        <img src={Stor2} alt="" className="stor2"/>
                        <div className="frame23">
                            <h2 className="headerFrame23">
                                Lorem ipsum
                            </h2>
                        </div>
                        <p className="subFrame18">
                            17. august 2020
                        </p>
                        <p className="paragraphFrame18">
                            In optics, violet is a spectral color: It refers to the color of any different 
                            single wavelength of light on the short wavelength end of the visible spectrum.
                        </p>
                    </div>
                    <div className="frame20b">
                    <img src={Stor1} alt="Artsy vector design in puprle, green and red." className="stor1"/>
                        <div className="frame23">
                            <h2 className="headerFrame23">
                                Lorem ipsum
                            </h2>
                        </div>
                        <p className="subFrame18">
                            17. august 2020
                        </p>
                        <p className="paragraphFrame18">
                            In optics, violet is a spectral color: It refers to the color of any different 
                            single wavelength of light on the short wavelength end of the visible spectrum.
                        </p>
                    </div>
                    <img src={rightArrow} alt="" className="rightVector"/>
                </div>
            </div>
            {/* --------------------- FRAME 29 ---------------------------------------------- */}
            <div className="frame29Desktop">
                <h2 className="Teft">
                    Teft?
                </h2>
                <p className="teftParagraph">
                    As a result, when violet light strikes the eye, the S-cone is stimulated strongly and 
                    the L-cone is stimulated weakly.
                </p>
            </div>
            <div className="outlineDiv">
                <button className="btnTeft">
                    <p className="whyTeft">Why teft?</p>
                </button>
            </div>
           
        </div>
        
        {/* MOBILE */}
        <div className="frame14Mobile">
            {/* -------------------------------- FRAME 13 -------------------------------- */}
            <div className="frame13Mobile">
                <p className="teftMobile">teft</p>
                <img src={rightArrowSmall} alt="" className="forwardMobileFirst"/>
                <p className="circlesMobile">
                    Circles
                </p>
                <img src={rightArrowSmall} alt="" className="forwardMobileSecond"/>
                <p className="purpleCirclesMobile">
                    Purple circles
                </p>
            </div>
            <h1 className="headerMobileCircles">
                Purple circles
            </h1>
            <p className="purpleAssociatedMobile">
                Purple is closely associated with violet. In optics, purple and violet refer to 
                colors that look similar, but purples are mixtures of red and blue or violet light.
            </p>
            <p className="purpleParagraphMobile">
            Purple is closely associated with violet. In common usage, both refer to colors that are 
            between red and blue in hue, with purples closer to red and violets closer to blue.[5][6] 
            Similarly, in the traditional painters' color wheel, purple and violet are both placed between 
            red and blue, with purple is closer to red
            </p>
            {/* -------------------------------- FRAME 17 -------------------------------- */}
            <div className="frame17Mobile">
                <div className="group470Mobile">
                    <div className="group471Mobile">
                        <img src={Ocean1} alt="" className="ocean1Mobile"/>
                    </div>
                    <div className="frame16Mobile">
                        <p className="overlayMobile">
                            “The process of making the dye was long, difficult and expensive”
                        </p>
                    </div>
                </div>
                <p className="opticsMobile">
                    In optics, violet is a spectral color: It refers to the color of any different 
                    single wavelength of light on the short wavelength end of the visible spectrum, 
                    between approximately 380 and 450 nanometers
                </p>
                <p className="humansMobile">
                    In humans, the L (red) cone in the eye is primarily sensitive to long wavelength light in 
                    the yellow-red region of the spectrum, but is also somewhat sensitive to the shorter wavelength 
                    violet light that primarily stimulates the S (blue) cone.
                </p>
            </div>
            {/* -------------------------------- FRAME 21 -------------------------------- */}
            <div className="frame21Mobile">
                <h2 className="asResultMobile">
                    As a result
                </h2>
                <p className="asResultParagraphMobile">
                    As a result, when violet light strikes the eye, the S-cone is stimulated strongly and the 
                    L-cone is stimulated weakly. Accordingly, strong blue light mixed with weaker red light can 
                    mimic this pattern of stimulation, causing humans to perceive colors that the same hue as 
                    violet, but with lower saturation.
                </p>
            </div>
            {/* -------------------------------- FRAME 24 -------------------------------- */}
            <div className="frame24Mobile">
                {/* -------------------------------- FRAME SMALL 22 -------------------------------- */}
                <div className="frame22Mobile">
                    <img src={Liten1} alt="" className="liten1"/>
                    <div className="frame23Mobile">
                        <h2 className="loremIpsumMobile">
                            Lorem ipsum
                        </h2>
                    </div>
                    <p className="subLoremMobile">
                        17. august 2020
                    </p>
                    <p className="KortteksterMobil">
                        En stemme og et forfatterskap som samlet barn og voksne i norsk etterkrigstid.
                    </p>
                </div>
                {/* -------------------------------- FRAME SMALL 24 -------------------------------- */}
                <div className="frame24SmallMobile">
                <img src={Liten1} alt="" className="liten1"/>
                    <div className="frame23Mobile">
                        <h2 className="loremIpsumMobile">
                            Lorem ipsum
                        </h2>
                    </div>
                    <p className="subLoremMobile">
                        17. august 2020
                    </p>
                    <p className="KortteksterMobil">
                        En stemme og et forfatterskap som samlet barn og voksne i norsk etterkrigstid.
                    </p>
                    
                </div>
                {/* -------------------------------- FRAME SMALL 25 -------------------------------- */}
                <div className="frame25Mobile">
                        <img src={Liten2} alt="" className="mini1"/>
                        <div className="frame23Mobile">
                        <h2 className="loremIpsumMobile2">
                            Lorem ipsum
                        </h2>
                    </div>
                    <p className="subLoremMobile">
                        17. august 2020
                    </p>
                    <p className="KortteksterMobil">
                        En stemme og et forfatterskap som samlet barn og voksne i norsk etterkrigstid.
                    </p>
                </div>
            </div>
            <div className="frame33Mobile">
                <div className="frame22Mobile2">
                    <h2 className="teftMobile2">
                        Teft?
                    </h2>
                    <p className="teftParagraphMobile">
                        As a result, when violet light strikes the eye, the S-cone is stimulated strongly and 
                        the L-cone is stimulated weakly.
                    </p>
                </div>
                <button className="buttonMobile">
                    <p className="whyTeftMobile">
                        Why teft?
                    </p>
                </button>
            </div>
           
        </div>
    </div>
    
)

export default Homepage