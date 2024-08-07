import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ProductCard from "../Product/ProductCard";


const HomeSectionCarousel = ({ data , sectionName }) => {
  var settings = {
    dots:true,
    infinite: false,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <div className="border rounded-lg">
        <h2 className="text-2xl font-extrabold relative p-4 w-fit">{sectionName}</h2>
        <div>
          <div className="mb-8">
            <Slider {...settings}>
              {data.map((product , index) => <HomeSectionCard key={index} product={product} />)}
            </Slider>
          </div>
        </div>        
      </div>
    </div>
  );
}


export default HomeSectionCarousel