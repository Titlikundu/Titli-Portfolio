import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#8B4513", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#8B4513", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }

function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500, // Faster transition (0.5 seconds)
    autoplay: true,
    autoplaySpeed: 1000, // Faster autoplay (2 seconds)
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div id="portfolio" className="portfolio">
      <h2 className="portfolio-title">Some of my Works</h2>
      <Slider {...settings}>
        <div className="portfolio-item">
          <img src="pc1.jpeg" alt="Portfolio 1" />
        </div>
        <div className="portfolio-item">
          <img src="pc7.jpeg" alt="Portfolio 2" />
        </div>
        <div className="portfolio-item">
          <img src="pc5.jpeg" alt="Portfolio 3" />
        </div>
        <div className="portfolio-item">
          <img src="pc9.jpeg" alt="Portfolio 4" />
        </div>
        <div className="portfolio-item">
          <img src="pc8.jpeg" alt="Portfolio 5" />
        </div>
      </Slider>
    </div>
  );
}

export default Portfolio;
