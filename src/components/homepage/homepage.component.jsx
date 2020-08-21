import React from 'react'

import rightArrowSmall from '../../assets/arrowSmallRight.svg'
import janeDoe from '../../assets/janeDoe.png'

import './homepage.styles.scss'

const Homepage = () => (
    <div className="autoLayout">
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
                    Projectmanager Dekode – 5 min read – 2
                </p>
           </div>
           
       </div>
    </div>
)

export default Homepage