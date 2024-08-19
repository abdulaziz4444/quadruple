import React from "react";
import Image from "next/image";
import Worldpic from "@/public/images/worldpic.png";
const World = () => {
  return (
    <>
      <section className="md:my-20 my-10 bg-darkgray md:py-20 py-8">
        <div className="md:container mx-auto px-5">
          {/* heading section */}
          <div className="">
            <h2 className="font-russo font-normal xl:text-[40px] lg:text-3xl md:text-xl text-lg text-center text-gray capitalize">
              take on the
            </h2>
            <h2 className="font-russo font-normal xl:text-[40px] lg:text-3xl md:text-xl text-lg text-center text-gray capitalize">
              <span className="bg-worldbg bg-cover xl:w-[140px] lg:w-[8rem] w-[5rem] h-auto inline-block font-russo font-normal xl:text-[40px] lg:text-3xl md:text-xl text-lg mr-2 text-center text-gray capitalize">
                world
              </span>
              with us
            </h2>
          </div>
          {/* box section */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:pt-10 pt-5 gap-6">
            {/* box1 */}
            <div className="bg-lightgray md:px-5 px-3  md:pt-5 pt-3 md:pb-7 pb-4 rounded-[30px] ">
              <Image src={Worldpic} alt="worldpic"   className="w-[100%] object-cover"/>
              <h5 className="text-gray font-semibold md:text-2xl text-lg capitalize md:pt-5 pt-3">
                united states
              </h5>
              <p className="md:py-4 py-2 text-gray font-normal md:text-base sm:text-sm text-xs">
                Pleasanton, California – 6701 Koll Center Parkway, #250
                Pleasanton, CA 94566
              </p>
              <h5 className="text-gray font-semibold md:text-base sm:text-sm text-xs">Tel: +1 408 365 4638</h5>
            </div>
            {/* box 2 */}
            <div className="bg-lightgray md:px-5 px-3  md:pt-5 pt-3 md:pb-7 pb-4 rounded-[30px]">
              <Image src={Worldpic} alt="worldpic"  className="w-[100%] object-cover"/>
              <h5 className="text-gray font-semibold md:text-2xl text-lg capitalize md:pt-5 pt-3">
                united states
              </h5>
              <p className="md:py-4 py-2 text-gray font-normal md:text-base sm:text-sm text-xs">
                Pleasanton, California – 6701 Koll Center Parkway, #250
                Pleasanton, CA 94566
              </p>
              <h5 className="text-gray font-semibold md:text-base sm:text-sm text-xs">Tel: +1 408 365 4638</h5>
            </div>
            {/* box 3 */}
            <div className="bg-lightgray md:px-5 px-3  md:pt-5 pt-3 md:pb-7 pb-4 rounded-[30px]">
              <Image src={Worldpic} alt="worldpic"  className="w-[100%] object-cover"/>
              <h5 className="text-gray font-semibold md:text-2xl text-lg capitalize md:pt-5 pt-3">
                united states
              </h5>
              <p className="md:py-4 py-2 text-gray font-normal md:text-base sm:text-sm text-xs">
                Pleasanton, California – 6701 Koll Center Parkway, #250
                Pleasanton, CA 94566
              </p>
              <h5 className="text-gray font-semibold md:text-base sm:text-sm text-xs">Tel: +1 408 365 4638</h5>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default World;
