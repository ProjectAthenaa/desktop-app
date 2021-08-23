import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './styles.scss';
import V1Slide from '../../../assets/images/v1-slide.svg';

const AnnouncementSlider: React.FC = () => {
  return (
    <div className={'announcement-slider'}>
      <Carousel
        autoPlay
        infiniteLoop
        emulateTouch
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
      >
        <div className="announcement" style={{ backgroundColor: '#c1c1c1', backgroundImage: `url(${V1Slide})` }}/>
        <div className="announcement" style={{ backgroundColor: '#c1c1c1', backgroundImage: `url(${V1Slide})` }}/>
        <div className="announcement" style={{ backgroundColor: '#c1c1c1', backgroundImage: `url(${V1Slide})` }}/>
        <div className="announcement" style={{ backgroundColor: '#c1c1c1', backgroundImage: `url(${V1Slide})` }}/>
      </Carousel>
    </div>
  );
};

export default AnnouncementSlider;
