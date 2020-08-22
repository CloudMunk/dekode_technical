import React from 'react'

import rightArrowSmall from '../../assets/arrowSmallRight.svg'
import arrowLeft from '../../assets/arrowLeft.svg'
import janeDoe from '../../assets/janeDoe.png'
import Twitter from '../../assets/twitter.svg'
import Instagram from '../../assets/instagram.svg'
import FaceBook from '../../assets/facebook.svg'
import Ocean1 from '../../assets/ocean1.png'
import stor1 from '../../assets/stor1.png'

import './homepage.styles.scss'

const Homepage = () => (
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
        <div className="frame25">
            <div className="frame20">
                <img src={arrowLeft} alt="" className="leftVector"/>
                <div className="frame18">
                    <img src={stor1} alt="" className="stor1"/>

                    <div className="frame23">
                        <h2 className="headerFrame23">
                            Lorem ipsum
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Homepage