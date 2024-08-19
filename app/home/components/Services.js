import {
  Ai,
  Aws,
  Blockchain,
  Cyber,
  Devops,
  Uparrow,
  Web,
} from "@/public/icons/Icons";
import React from "react";

const Services = () => {
  return (
    <>
      <section className="md:mt-20 mt-14" id="services">
        <div className="md:container mx-auto px-5">
          {/* heading section */}
          <div className="text-center">
            <h2 className="font-russo font-normal xl:text-[40px] lg:text-3xl md:text-xl text-lg text-darkgray uppercase">
              our
              <span className="bg-servicebg bg-cover xl:w-[206px] lg:w-[10rem] w-[6rem] h-[100%] ml-2 font-russo font-normal xl:text-[40px] lg:text-3xl md:text-xl text-lg text-white inline-block text-center capitalize">
                services
              </span>
            </h2>
            <p className="font-medium md:text-lg text-base text-center text-grayy capitalize lg:pt-5 pt-2">
              discover our core services
            </p>
          </div>
          {/* blogs section */}
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:pt-10 pt-6 gap-6">
            {/* box 1 */}
            <div className="bg-darkgray md:rotate-2 rotate-1 rounded-[32px] h-full">
              <div className="bg-gray rounded-[32px] md:-rotate-3 -rotate-2 md:px-[60px] px-12 md:pt-[60px] pt-12 pb-12 flex flex-col gap-10 items-center justify-between h-full">
                <div className="flex flex-col  items-center ">
                  <Ai />
                  <h2 className="font-semibold text-darkgray lg:text-[26px] md:text-xl text-lg  capitalize pt-10">
                    aI services
                  </h2>
                  <p className="text-grayy font-normal text-sm text-center md:pt-7 pt-4">
                    Unlock the power of Artificial Intelligence (AI)
                    <span className="block">
                      with our comprehensive suite of services
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-between w-[100%]">
                  <p className="text-darkgray md:text-lg text-base capitalize font-archivo hover:underline">
                    see more
                  </p>
                  <span className="bg-lightgray md:p-[7px] rounded-full">
                    <Uparrow />
                  </span>
                </div>
              </div>
            </div>
            {/* box 2 */}
            <div className="bg-darkgray md:rotate-2 rotate-1 rounded-[32px] h-full">
              <div className="bg-gray rounded-[32px] md:-rotate-3 -rotate-2 md:px-[60px] px-12 md:pt-[60px] pt-12  pb-12 flex flex-col gap-10 items-center justify-between h-full">
                <div className="flex flex-col items-center text-center">
                  <Blockchain />
                  <h2 className="font-semibold text-darkgray lg:text-[26px] md:text-xl text-lg  capitalize pt-10">
                    blockchain development
                  </h2>
                  <p className="text-grayy font-normal text-sm text-center md:pt-7 pt-4">
                    The groundbreaking potential of Blockchain technology is a
                    core belief at Quadruple.
                  </p>
                </div>
                <div className="flex items-center justify-between w-[100%]">
                  <h5 className="text-darkgray md:text-lg text-base capitalize font-archivo hover:underline">
                    {" "}
                    see more
                  </h5>
                  <h5 className="bg-lightgray md:p-[7px] rounded-full">
                    <Uparrow />
                  </h5>
                </div>
              </div>
            </div>
            {/* box 3 */}
            <div className="bg-darkgray md:rotate-2 rotate-1 rounded-[32px] h-full">
              <div className="bg-gray rounded-[32px] md:-rotate-3 -rotate-2 md:px-[60px] px-12 md:pt-[60px] pt-12 pb-12 flex flex-col gap-10 items-center justify-between h-full">
                <div className="flex flex-col  items-center ">
                  <Web />
                  <h2 className="font-semibold text-darkgray lg:text-[26px] md:text-xl text-lg  capitalize pt-10">
                    web development
                  </h2>
                  <p className="text-grayy font-normal text-sm text-center md:pt-7 pt-4">
                    At Quadtruple Solutions, we craft web applications that
                    seamlessly blend cutting-edge technology with creative
                    innovation, ensuring simplicity, effectiveness, and
                    captivation for your users.
                  </p>
                </div>
                <div className="flex items-center justify-between w-[100%]">
                  <h5 className="text-darkgray md:text-lg text-base capitalize font-archivo hover:underline">
                    {" "}
                    see more
                  </h5>
                  <h5 className="bg-lightgray md:p-[7px] rounded-full">
                    <Uparrow />
                  </h5>
                </div>
              </div>
            </div>
            {/* box 4 */}
            <div className="bg-darkgray md:rotate-2 rotate-1 rounded-[32px] h-full">
              <div className="bg-gray rounded-[32px] md:-rotate-3 -rotate-2 md:px-[60px] px-12 md:pt-[60px] pt-12  pb-12 flex flex-col gap-10 items-center justify-between h-full">
                <div className="flex flex-col items-center text-center">
                  <Devops />
                  <h2 className="font-semibold text-darkgray lg:text-[26px] md:text-xl text-lg  capitalize pt-10">
                    DevOps Services
                  </h2>
                  <p className="text-grayy font-normal text-sm text-center md:pt-7 pt-4">
                    Quadruple offers comprehensive DevOps services to streamline
                    and enhance your development and operations processes.
                  </p>
                </div>
                <div className="flex items-center justify-between w-[100%]">
                  <h5 className="text-darkgray md:text-lg text-base capitalize font-archivo hover:underline">
                    {" "}
                    see more
                  </h5>
                  <h5 className="bg-lightgray md:p-[7px] rounded-full">
                    <Uparrow />
                  </h5>
                </div>
              </div>
            </div>
            {/* box 5 */}
            <div className="bg-darkgray md:rotate-2 rotate-1 rounded-[32px] h-full">
              <div className="bg-gray rounded-[32px] md:-rotate-3 -rotate-2 md:px-[60px] px-12 md:pt-[60px] pt-12  pb-12 flex flex-col gap-10 items-center justify-between h-full">
                <div className="flex flex-col items-center text-center">
                  <Cyber />
                  <h2 className="font-semibold text-darkgray lg:text-[26px] md:text-xl text-lg  capitalize pt-10">
                    Web/Cyber Security
                  </h2>
                  <p className="text-grayy font-normal text-sm text-center md:pt-7 pt-4">
                    Quadruple offers comprehensive DevOps services to streamline
                    and enhance your development and operations processes.
                  </p>
                </div>
                <div className="flex items-center justify-between w-[100%]">
                  <h5 className="text-darkgray md:text-lg text-base capitalize font-archivo hover:underline">
                    {" "}
                    see more
                  </h5>
                  <h5 className="bg-lightgray md:p-[7px] rounded-full">
                    <Uparrow />
                  </h5>
                </div>
              </div>
            </div>
            {/* box 6 */}
            <div className="bg-darkgray md:rotate-2 rotate-1 rounded-[32px] h-full">
              <div className="bg-gray rounded-[32px] md:-rotate-3 -rotate-2 md:px-[60px] px-12 md:pt-[60px] pt-12  pb-12 flex flex-col gap-10 items-center justify-between h-full">
                <div className="flex flex-col items-center text-center">
                  <Aws />
                  <h2 className="font-semibold text-darkgray lg:text-[26px] md:text-xl text-lg  capitalize pt-10">
                    AWS Services
                  </h2>
                  <p className="text-grayy font-normal text-sm text-center md:pt-7 pt-4">
                    Unlock the full potential of cloud computing with
                    Quadruple's AWS services, delivering unparalleled
                    scalability, reliability, and innovation.
                  </p>
                </div>
                <div className="flex items-center justify-between w-[100%]">
                  <h5 className="text-darkgray md:text-lg text-base capitalize font-archivo hover:underline">
                    {" "}
                    see more
                  </h5>
                  <h5 className="bg-lightgray md:p-[7px] rounded-full">
                    <Uparrow />
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
