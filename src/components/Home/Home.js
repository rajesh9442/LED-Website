import React from 'react';
import Slider from 'react-slick';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import './Home.css';
import Home1 from '../../images/HomeCover/Home1.png';
import Home2 from '../../images/HomeCover/Home2.png';
import Home3 from '../../images/HomeCover/Home3.png';
import Home4 from '../../images/HomeCover/Home4.png';
import Home5 from '../../images/HomeCover/Home5.png';

const Arrow = ({ className, onClick, direction }) => (
  <div
    className={className}
    style={{
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1000,
      cursor: 'pointer',
      color: 'black',
      fontSize: '30px',
      left: direction === 'left' ? '10px' : 'auto',
      right: direction === 'right' ? '10px' : 'auto',
    }}
    onClick={onClick}
  >
    {direction === 'left' ? <FaRegArrowAltCircleLeft /> : <FaRegArrowAltCircleRight />}
  </div>
);

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
  };

  return (
    <div className="home">
      <div className="slideshow-container">
        <Slider {...settings}>
          <div><img src={Home1} alt="Slideshow" className="slideshow-image" /></div>
          <div><img src={Home2} alt="Slideshow" className="slideshow-image" /></div>
          <div><img src={Home3} alt="Slideshow" className="slideshow-image" /></div>
          <div><img src={Home4} alt="Slideshow" className="slideshow-image" /></div>
          <div><img src={Home5} alt="Slideshow" className="slideshow-image" /></div>
        </Slider>
      </div>
    </div>
  );
}

export default Home;
