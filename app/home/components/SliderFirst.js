"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assets
import phoneImg1 from "@/public/images/phone1.png";
import phoneImg2 from "@/public/images/phone2.png";
import phoneImg3 from "@/public/images/phone3.png";
import phoneImg4 from "@/public/images/phone4.png";

const SliderFirst = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 8000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed:0,
    // useCSS:true,
    responsive: [
      {
        breakpoint: 1283, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="md:container mx-auto px-5">
      <div className="slider-container lg:-mt-36 -mt-40">
        <Slider {...settings}>
          <div className="px-7 py-9">
            <Image
              src={phoneImg1}
              width={298}
              height={298}
              alt="phone1 image"
              className="w-auto h-full border-8 rounded-[2rem] border-white shadow transform rotate-6"
            />
          </div>
          <div className="px-7 py-9">
            <Image
              src={phoneImg2}
              width={298}
              height={298}
              alt="phone2 image"
              className="w-auto h-full border-8 rounded-[2rem] border-white shadow transform -rotate-[8deg]"
            />
          </div>
          <div className="px-7 py-9">
            <Image
              src={phoneImg3}
              width={298}
              height={298}
              alt="phone3 image"
              className="w-auto h-full border-8 rounded-[2rem] border-white shadow transform rotate-3"
            />
          </div>
          <div className="px-7 py-9">
            <Image
              src={phoneImg4}
              width={298}
              height={298}
              alt="phone4 image"
              className="w-auto h-full border-8 rounded-[2rem] border-white shadow transform -rotate-[8deg]"
            />
          </div>
          <div className="px-7 py-9">
            <Image
              src={phoneImg4}
              width={298}
              height={298}
              alt="phone4 image"
              className="w-auto h-full border-8 rounded-[2rem] border-white shadow transform -rotate-[8deg]"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SliderFirst;
