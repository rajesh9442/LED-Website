import React from 'react';
import Slider from 'react-slick';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import './Home.css';
import Home1 from '../../images/HomeCover/Home1.png';
import Home2 from '../../images/HomeCover/Home2.png';
import Home3 from '../../images/HomeCover/Home3.png';
import Home4 from '../../images/HomeCover/Home4.png';
import RightImage from '../../images/HomeCover/1.jpg';
import LeftImage from '../../images/HomeCover/2.png';
import RightImage3 from '../../images/HomeCover/4.png';
import LeftImage3 from '../../images/HomeCover/slide6.jpg';
import SampleVideo from '../../images/HomeCover/video.mp4';  // Import your video file

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
      {/* Slideshow Section */}
      <div className="slideshow-container">
        <Slider {...settings}>
          <div><img src={Home1} alt="Slideshow" className="slideshow-image" /></div>
          <div><img src={Home2} alt="Slideshow" className="slideshow-image" /></div>
          <div><img src={Home3} alt="Slideshow" className="slideshow-image" /></div>
          <div><img src={Home4} alt="Slideshow" className="slideshow-image" /></div>
        </Slider>
      </div>

      {/* Video Section */}
      <div className="video-container" style={{ margin: '20px 0' }}>
        <h2>Watch Our Latest Installation Video</h2>
        <video 
          width="100%" 
          height="auto" 
          autoPlay 
          muted 
          loop 
          playsInline
          disablePictureInPicture 
          style={{ display: 'block' }}
        >
        <source src={SampleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Section */}
      <div className="content-section">
        {/* Left-side image (Image on the left, Text on the right) */}
        <div className="container leftimage-container">
          <div className="content-image">
            <img src={LeftImage} alt="Efficient Lighting" />
          </div>
          <div className="content-text">
            <h2>Efficient Lighting Solutions</h2>
            <p>We provide efficient lighting solutions for every Need. LEDs are totally efficient, saving 80% off your electrical bill.</p>
          </div>
        </div>

        {/* Right-side image (Text on the left, Image on the right) */}
        <div className="container rightimage-container">
          <div className="content-text">
            <h2>Camera Installation</h2>
            <p>We offer lighting and camera installation for residential and commercial properties.
            We help you select and install the best CCTV systems for security and peace of mind.
            </p>
          </div>
          <div className="content-image">
            <img src={RightImage} alt="Indoor Outdoor Services" />
          </div>
        </div>

        {/* Left-side image (Image on the left, Text on the right) */}
        <div className="container leftimage-container">
          <div className="content-image">
            <img src={LeftImage3} alt="Energy Savings" />
          </div>
          <div className="content-text">
            <h2>NEON Lights</h2>
            <p>Make NEON lights of your choice! We will customize the design of lights.</p>
          </div>
        </div>

        <img 
          src={RightImage3} 
          alt="Dolphin LED Display Sign" 
          style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
        />

        
      </div>
    </div>
  );
};

export default Home;
