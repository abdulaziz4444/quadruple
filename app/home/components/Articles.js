import React from "react";
import Image from "next/image";
import james from "@/public/images/james.png";
const Articles = () => {
  return (
    <>
      <section className="md:pt-20 pt-10">
        <div className="md:container mx-auto px-5">
          {/* heading */}
          <div className="text-center">
            <h2 className="font-russo font-normal xl:text-[40px] lg:text-3xl md:text-xl text-lg capitalize text-darkgray">
              our
              <span className="bg-articlebg bg-cover xl:w-[180px] lg:w-[10rem] md:w-[7rem] w-[99px] h-auto inline-block font-russo ml-2 font-normal xl:text-[40px] lg:text-3xl md:text-xl text-lg text-white capitalize text-center">
                articles
              </span>
            </h2>
            <p className="font-medium md:text-lg text-base text-center text-darkgray md:pt-5 pt-2">
              Discover Our latest blog and news
            </p>
          </div>
          {/* boxes section */}
          <div className="md:pt-10 pt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {/* box 1 */}
            <div className="bg-gray rounded-[30px]  md:px-[14px] px-3 md:pt-[14px] pt-2 md:pb-7 pb-4">
              <Image
                src="/images/articlepic1.png"
                alt="article pic"
                width={395}
                height={295}
                className="w-full object-cover rounded-[30px]"
              />
              <div className="md:pt-[18px] pt-[14px]">
                <h5 className="text-white bg-green md:py-[6px] py-[4px] md:px-[18px] px-[10px] rounded-full w-fit uppercase">
                  technology
                </h5>
                <h2 className="py-[14px] capitalize font-semibold lg:text-[22px] md:text-lg text-base">
                  google iaunches cloud aI platform pipelines
                </h2>
                <p className="text-grayy font-normal text-sm">
                  Richard Thomas was born in 1990, and at only 29 years old,{" "}
                  <span className="block">
                    his trajectory is good. When he is asked how he describes
                  </span>
                </p>
                <div className="flex justify-between pt-4">
                  <div className="flex items-center gap-2">
                    <Image src={james} alt="jamespic" className="" />
                    <h5 className="text-[#9CA3AF] capitalize text-xs font-normal">
                      james curren
                    </h5>
                  </div>
                  <p className="text-lightgray text-sm font-normal">
                    Dec 29, 2023
                  </p>
                </div>
              </div>
            </div>
            {/* box 2 */}
            <div className="bg-gray rounded-[30px]  md:px-[14px] px-3 md:pt-[14px] pt-2 md:pb-7 pb-4">
              <Image
                src="/images/articlepic1.png"
                alt="article pic"
                width={395}
                height={295}
                className="w-full object-cover rounded-[30px]"
              />
              <div className="md:pt-[18px] pt-[14px]">
                <h5 className="text-darkgray bg-darkgreen md:py-[6px] py-[4px] md:px-[18px] px-[10px] rounded-full w-fit uppercase">
                  technology
                </h5>
                <h2 className="py-[14px] capitalize font-semibold lg:text-[22px] md:text-lg text-base">
                  google iaunches cloud aI platform pipelines
                </h2>
                <p className="text-grayy font-normal text-sm">
                  Richard Thomas was born in 1990, and at only 29 years old,{" "}
                  <span className="block">
                    his trajectory is good. When he is asked how he describes
                  </span>
                </p>
                <div className="flex justify-between pt-4">
                  <div className="flex items-center gap-2">
                    <Image src={james} alt="jamespic" className="" />
                    <h5 className="text-[#9CA3AF] capitalize text-xs font-normal">
                      james curren
                    </h5>
                  </div>
                  <p className="text-lightgray text-sm font-normal">
                    Dec 29, 2023
                  </p>
                </div>
              </div>
            </div>
            {/* box 3 */}
            <div className="bg-gray rounded-[30px]  md:px-[14px] px-3 md:pt-[14px] pt-2 md:pb-7 pb-4">
              <Image
                src="/images/articlepic1.png"
                alt="article pic"
                width={395}
                height={295}
                className="w-[100%] object-cover rounded-[30px]"
              />
              <div className="md:pt-[18px] pt-[14px]">
                <h5 className="text-gray bg-darkgray md:py-[6px] py-[4px] md:px-[18px] px-[10px] rounded-full w-fit uppercase">
                  technology
                </h5>
                <h2 className="py-[14px] capitalize font-semibold lg:text-[22px] md:text-lg text-base">
                  google iaunches cloud aI platform pipelines
                </h2>
                <p className="text-grayy font-normal text-sm">
                  Richard Thomas was born in 1990, and at only 29 years old,{" "}
                  <span className="block">
                    his trajectory is good. When he is asked how he describes
                  </span>
                </p>
                <div className="flex justify-between pt-4">
                  <div className="flex items-center gap-2">
                    <Image src={james} alt="jamespic" className="" />
                    <h5 className="text-[#9CA3AF] capitalize text-xs font-normal">
                      james curren
                    </h5>
                  </div>
                  <p className="text-lightgray text-sm font-normal">
                    Dec 29, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
