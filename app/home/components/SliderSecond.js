"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "@/public/icons/Icons";


// Assets
import pic1 from "@/public/images/slidersecondpic1.png";
import pic2 from "@/public/images/slidersecondpic2.png";

const SliderSecond = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
   
    responsive:[
        {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
    ]
  };
  return (
    <section className="bg-darkgray md:mt-20 mt-10 md:py-20 py-10 relative">
      <div className="md:container mx-auto px-5">
        <div className="absolute md:top-20 top-0 md:left-[10%] left-6">
          <Star className="md:w-10 w-8 md:h-10 h-8" />
        </div>
        <div className="absolute md:top-20 top-0 md:right-[10%] right-6">
          <Star className="md:w-10 w-8 md:h-10 h-8" />
        </div>
        {/* content */}
        <div className="text-center md:pt-1 pt-0.5">
          <h2 className="font-russo font-normal xl:text-[40px] lg:text-3xl md:text-xl text-lg text-gray capitalize">
            our
            <span className="bg-slidersecondbg bg-cover xl:w-[238px] lg:w-[12rem] w-[8rem]   h-auto inline-block text-center font-russo font-normal ml-2 mr-2 xl:text-[40px] lg:text-3xl md:text-xl text-lg text-gray capitalize">
              {" "}
              best work
            </span>
            of
            <span className="block">successful projects</span>
          </h2>
        </div>
        <div className="md:pt-10 pt-5">
          <Slider {...settings}>
            {/* box 1 */}
            <div className="lg:px-6 px-3">
              <div className="bg-lightgray md:py-10 py-5 md:px-7 px-3 rounded-[56px]">
                <div className="flex flex-col md:gap-10 gap-2">
                  <span className="font-russo font-normal md:text-[32px] sm:text-2xl text-xl text-gray opacity-[50%]">
                    01
                  </span>
                  <Image src={pic2} alt="slider picture1" className="w-full" />
                  <div>
                    <h5 className="font-russo font-normal md:text-2xl sm:text-xl text-lg text-gray capitalize">
                      product data
                    </h5>
                    <p className="md:text-base sm:text-sm text-xs text-gray md:pt-4 pt-3">
                      A Platform that connects design and construction
                      professionals with product, manufacturers, and suppliers
                      in a convenient and user-friendly platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* box 2 */}
            <div className="lg:px-6 px-3">
              <div className="bg-lightgray md:py-10 py-5 md:px-7 px-3 rounded-[56px]">
                <div className="flex flex-col md:gap-10 gap-2">
                  <span className="font-russo font-normal md:text-[32px] sm:text-2xl text-xl text-gray opacity-[50%]">
                    01
                  </span>
                  <Image src={pic1} alt="slider picture1" className="w-full" />
                  <div>
                    <h5 className="font-russo font-normal md:text-2xl sm:text-xl text-lg text-gray capitalize">
                      product data
                    </h5>
                    <p className="md:text-base sm:text-sm text-xs text-gray md:pt-4 pt-3">
                      A Platform that connects design and construction
                      professionals with product, manufacturers, and suppliers
                      in a convenient and user-friendly platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* box 3 */}
            <div className="lg:px-6 px-3">
              <div className="bg-lightgray md:py-10 py-5 md:px-7 px-3 rounded-[56px] ">
                <div className="flex flex-col md:gap-10 gap-2">
                  <span className="font-russo font-normal md:text-[32px] sm:text-2xl text-xl text-gray opacity-[50%]">
                    01
                  </span>
                  <Image src={pic2} alt="slider picture1" className="w-full" />
                  <div>
                    <h5 className="font-russo font-normal md:text-2xl sm:text-xl text-lg text-gray capitalize">
                      product data
                    </h5>
                    <p className="md:text-base sm:text-sm text-xs text-gray md:pt-4 pt-3">
                      A Platform that connects design and construction
                      professionals with product, manufacturers, and suppliers
                      in a convenient and user-friendly platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SliderSecond;
