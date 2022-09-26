import React from 'react';
import { Slide } from 'react-slideshow-image';
//import 'react-slideshow-image/dist/styles.css'
import IMAGES from '../images';

const slideImages = [
  {
    src: IMAGES.brvc
  },
  {
    src: IMAGES.doug
  },
  {
    src: IMAGES.scorp
  },
  {
    src: IMAGES.bowling
  },
  {
    src: IMAGES.gunpla
  },
  {
    src: IMAGES.warhammer
  },
  {
    src: IMAGES.helm
  },
  {
    src: IMAGES.fsi
  },
  {
    src: IMAGES.fso
  }
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `src(${slideImage.src})`}}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;