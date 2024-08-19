import React from "react";
import Image from "next/image";
const Team = () => {
  return (
    <>
      <section className="">
        <div className="md:container mx-auto px-5">
          {/* heading section */}
          <div className="text-center">
            <h2 className="font-russo font-normal xl:text-[40px] lg:text-3xl md:text-xl text-lg capitalize">
              our
              <span className="bg-teambg bg-cover inline-block xl:w-[127px] lg:w-[8rem] w-[5rem] h-auto font-russo ml-2 font-normal xl:text-[40px] lg:text-3xl md:text-xl text-lg text-center capitalize text-gray">
                team
              </span>
            </h2>
          </div>
          {/* box section */}
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-7 gap-4 md:pt-10 pt-5">
            {/* box 1 */}
            <div className="rounded-bl-[30px] rounded-br-[30px] relative md:transform md:transition-transform md:duration-300 md:hover:-translate-y-5 cursor-pointer hover:opacity-80">
                <Image src="/images/teampic1.png" alt="person pic1" width={311} height={352} className="rounded-[30px] w-full"/>
                <div className="absolute bottom-0 left-0 right-0 p-3 rounded-bl-[30px] rounded-br-[30px] text-center bg-gradient-to-t from-black/40 via-black/20 to-transparent backdrop-blur-sm">
                    <h3 className="text-gray font-semibold md:text-xl text-lg capitalize">jhon doe</h3>
                    <p className="text-gray font-normal text-sm">President of Sales</p>
                </div>
            </div>
            {/* box 2 */}
            <div className="rounded-bl-[30px] rounded-br-[30px] relative md:transform md:transition-transform md:duration-300 md:hover:-translate-y-5 cursor-pointer hover:opacity-80">
                <Image src="/images/teampic2.png" alt="person pic2" width={311} height={352} className="rounded-[30px] w-full"/>
                <div className="absolute bottom-0 left-0 right-0 p-3 rounded-bl-[30px] rounded-br-[30px] text-center bg-gradient-to-t from-black/40 via-black/20 to-transparent backdrop-blur-sm">
                    <h3 className="text-gray font-semibold md:text-xl text-lg capitalize">jhon doe</h3>
                    <p className="text-gray font-normal text-sm">President of Sales</p>
                </div>
            </div>
            {/* box 3 */}
            <div className="rounded-bl-[30px] rounded-br-[30px] relative md:transform md:transition-transform md:duration-300 md:hover:-translate-y-5 cursor-pointer hover:opacity-80">
                <Image src="/images/teampic3.png" alt="person pic3" width={311} height={352} className="rounded-[30px] w-full"/>
                <div className="absolute bottom-0 left-0 right-0 p-3 rounded-bl-[30px] rounded-br-[30px] text-center bg-gradient-to-t from-black/40 via-black/20 to-transparent backdrop-blur-sm">
                    <h3 className="text-gray font-semibold md:text-xl text-lg capitalize">jhon doe</h3>
                    <p className="text-gray font-normal text-sm">President of Sales</p>
                </div>
            </div>
            {/* box 4 */}
            <div className="rounded-bl-[30px] rounded-br-[30px] relative md:transform md:transition-transform md:duration-300 md:hover:-translate-y-5 cursor-pointer hover:opacity-80">
                <Image src="/images/teampic4.png" alt="person pic4" width={311} height={352} className="rounded-[30px] w-full"/>
                <div className="absolute bottom-0 left-0 right-0 p-3 rounded-bl-[30px] rounded-br-[30px] text-center bg-gradient-to-t from-black/40 via-black/20 to-transparent backdrop-blur-sm">
                    <h3 className="text-gray font-semibold md:text-xl text-lg capitalize">jhon doe</h3>
                    <p className="text-gray font-normal text-sm">President of Sales</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
