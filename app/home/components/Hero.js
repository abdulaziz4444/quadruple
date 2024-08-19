import { Star } from "@/public/icons/Icons";
import React from "react";
const Hero = () => {
  return (
    <>
      <section>
        <div className="bg-hero1 bg-cover md:h-[600px] h-[450px] bg-darkgray relative border overflow-hidden">
          <div className="md:container mx-auto px-5">
            <div className="absolute md:top-20 top-0 lg:left-[10%] left-6">
              <Star className="md:md:w-10 w-8 lg:h-10 h-8 "/>
            </div>
            <div className="absolute md:top-20 top-0 lg:right-[10%] right-6">
              <Star className="md:md:w-10 w-8 lg:h-10 h-8" />
            </div>
            {/* content */}
            <div className="flex flex-col items-center lg:pt-[100px]  md:pt-20 pt-16">
              <h1 className="text-white font-russo font-normal xl:text-[64px] lg:text-[54px] md:text-4xl text-2xl  uppercase">
              <div className="flex items-center ">
              <span className="bg-herobg bg-cover  lg:h-[100px] h-auto  xl:w-[457px] lg:w-[29rem] md:w-[16rem] w-[10rem] flex justify-center items-center  mr-2 uppercase font-russo font-normal xl:text-[64px] lg:text-[54px] md:text-4xl text-2xl  text-white">
                  quadruple
                </span>
                solutions
              </div>
              </h1>
              <h2 className="text-gray font-normal font-russo xl:text-5xl lg:text-4xl md:text-2xl sm:text-xl text-lg capitalize md:py-6 py-2">
                Turning Ideas into Digital Success!
              </h2>
              <p className="font-normal text-gray lg:text-base sm:text-sm text-xs text-center">
                At Quadtruple Solutions, we craft web applications that
                seamlessly blend cutting-edge technology with creative
                <span className="block ">
                  {" "}
                  innovation, ensuring simplicity, effectiveness, and
                  captivation for your users.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
