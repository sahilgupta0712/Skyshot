import React from "react";
// import SmartSlider from "react-smart-slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import "./slideshow.css";

function SimpleSlider() {
  
  return (
    <div className="slideshow">
        <Carousel showArrows={true} showThumbs={false} autoPlay={true}  infiniteLoop={true} showStatus={false} stopOnHover={true} transitionTime={1000} interval={1000}>
                <div>
                    <img src={require('./images/slideshow1.jpeg')}/>
                    
                </div>
                <div>
                    <img src={require('./images/slideshow2.jpeg')}/>
                    
                </div>
                <div>
                    <img src={require('./images/slideshow3.jpeg')}/>
                </div>
                <div>
                    <img src={require('./images/slideshow4.jpeg')}/>
                </div>
            </Carousel>
    </div>
    
  );
}

export default SimpleSlider
