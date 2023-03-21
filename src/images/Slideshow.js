import React from 'react';
import { Slide } from 'react-slideshow-image';
//import 'react-slideshow-image/dist/styles.css'
import IMAGES from '../images';
import './Slideshow.css';

const Slideshow = () => {

  const slideImages = [
    {
      url: IMAGES.brvc
    },
    {
      url: IMAGES.doug
    },
    {
      url: IMAGES.scorp
    },
    {
      url: IMAGES.bowling
    },
    {
      url: IMAGES.gunpla
    },
    {
      url: IMAGES.warhammer
    },
    {
      url: IMAGES.helm
    },
    {
      url: IMAGES.fsi
    },
    {
      url: IMAGES.fso
    }
  ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                    <span>Slide 1</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${slideImages[3]})` }}>
                    <span>Slide 4</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${slideImages[4]})` }}>
                    <span>Slide 5</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${slideImages[5]})` }}>
                    <span>Slide 6</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${slideImages[6]})` }}>
                    <span>Slide 7</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${slideImages[7]})` }}>
                    <span>Slide 8</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${slideImages[8]})` }}>
                    <span>Slide 9</span>
                </div>
            </div>
        </Slide>
    );
};

export default Slideshow;