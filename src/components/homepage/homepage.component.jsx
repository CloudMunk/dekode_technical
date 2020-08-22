import React from 'react'

import rightArrowSmall from '../../assets/arrowSmallRight.svg'
import janeDoe from '../../assets/janeDoe.png'
import Twitter from '../../assets/twitter.svg'
import Instagram from '../../assets/instagram.svg'
import FaceBook from '../../assets/facebook.svg'
import Ocean1 from '../../assets/ocean1.png'

import './homepage.styles.scss'

const Homepage = () => (
    <div className="frame14">
        <div className="frame13">
            <p className="teft">
                teft
            </p>
            <img src={rightArrowSmall} alt="Small pruple arrow pointing right" className="forwardFirst" />
            <p className="circlesHome">
                Circles
            </p>
            <img src={rightArrowSmall} alt="Small pruple arrow pointing right" className="forwardSecond" />
            <p className="purpleCircles">
                Purple Circles
            </p>
        </div>
       <h1 className="pageHeader">
            Purple Circles
       </h1>
       <p className="purpleAssociated">
        Purple is closely associated with violet. In optics, purple and violet refer to colors that 
        look similar, but purples are mixtures of red and blue or violet light.
       </p>
       <div className="frame28">
            <img src={janeDoe} className="janeDoe" alt="Jane Doe worker"/>
           <div className="frame26">
                <p className="janeDoeName">
                    Jane Doe
                </p>
                <p className="metatekstDesktop">
                    Projectmanager Dekode – 5 min read – 2 june
                </p>
                <div className="frame27">
                    <img src={Twitter} className="twitter" alt="Twitter Icon"/>
                    <img src={Instagram} className="instagram" alt="Instagram Icon"/>
                    <img src={FaceBook} className="facebook" alt="Facebook Icon"/>
                </div>
           </div>
       </div>
       <p className="purpleParagraph">
        Purple is closely associated with violet. In common usage, both refer to colors that are 
        between red and blue in hue, with purples closer to red and violets closer to blue. Similarly, 
        in the traditional painters' color wheel, purple and violet are both placed between red and blue, 
        with purple is closer to red
       </p>
       <div className="frame17">
           <div className="group470">
               <div className="frame16">
                   <p className="frame16Paragraph">
                        “The process of making the dye was long, difficult and expensive S”
                   </p>
               </div>
               <img src={Ocean1} alt="Birds eye view of the ocean" className="ocean1" />
           </div>
           <p className="optics">
                In optics, violet is a spectral color: It refers to the color of any different 
                single wavelength of light on the short wavelength end of the visible spectrum, 
                between approximately 380 and 450 nanometers.
           </p>
       </div>
    </div>
)

export default Homepage