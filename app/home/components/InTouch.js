import {
  ContactIcon,
  Email,
  EmailIcon,
  LocationIcon,
  Phone,
  PhoneIcon,
  Star,
} from "@/public/icons/Icons";
import React from "react";

const InTouch = () => {
  return (
    <>
      <section className="md:mt-20 mt-8 md:py-20 py-8 bg-darkgray" id="contactus">
        
        <div className="md:container mx-auto px-5">
          <div className="flex xl:flex-row flex-col lg:justify-between items-center xl:gap-0 md:gap-9 gap-5">
            {/* contact side  */}
            <div className="flex flex-col justify-center">
              <span className="text-green font-medium md:text-base text-sm capitalize">
                contact us ...
              </span>
              <h2 className="text-gray md:text-[32px] sm:text-2xl text-xl font-bold capitalize md:pt-1 pt-0.5">
                get in touch with us
              </h2>
              <p className="text-gray sm:text-sm text-xs font-normal md:pt-2.5 pt-1.5">
                Give us a call or drop by anytime, we endeavour to answer all
                enquiries{" "}
                <span className="block">
                  within 24 hours on business days. We will be happy to answer
                  your{" "}
                </span>
                questions.
              </p>

              <div className="flex flex-col LG:gap-10 md:gap-6 gap-3 md:pt-8 pt-4">
                {/* location icon side */}
                <div className="flex md:gap-4 gap-2 items-center ">
                  <div className="rounded-xl bg-lightgray md:p-[13px] p-2 w-fit">
                    <LocationIcon />
                  </div>
                  <div>
                    <p className="sm:text-sm text-xs font-normal text-gray">
                      Worldwide Remote Headquartered in
                      <spn className="block">Islamabad, Pakistan </spn>
                    </p>
                  </div>
                </div>
                {/* phone icon side */}
                <div className="flex md:gap-4 gap-2 items-center">
                  <div className="rounded-xl bg-lightgray md:p-[13px] p-2 w-fit">
                    <PhoneIcon />
                  </div>
                  <div className="flex flex-col  gap-1">
                    <span className="font-medium text-green text-sm capitalize">
                      phone number
                    </span>
                    <p className="text-gray sm:text-sm text-xs font-normal">
                      +92 313 337 7434
                    </p>
                  </div>
                </div>
                {/* email icon side */}
                <div className="flex md:gap-4 gap-2 items-center">
                  <div className="rounded-xl bg-lightgray md:p-[13px] p-2 w-fit">
                    <EmailIcon />
                  </div>
                  <div className="flex flex-col  gap-1">
                    <span className="font-medium text-green text-sm capitalize">
                      email address
                    </span>
                    <p className="text-gray sm:text-sm text-xs font-normal">
                      info@toptech.team
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* form side */}
            <form className="bg-lightgray xl:py-[51px] lg:py-11 md:py-8 py-4 xl:px-16  px-10 rounded-[30px] lg:w-[656px] relative w-full">
              <div className="absolute top-0 left-0 ">
                <Star className="md:md:w-10 w-6 lg:h-10 h-6 lg:m-0 m-2"/>
              </div>
              <div className="flex flex-col  md:gap-5 gap-2.5">
                <div className="bg-darkgray rounded-xl md:py-4 py-3 md:px-4 px-2 flex items-center hover:ring-1 hover:ring-zinc-400">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-transparent text-gray outline-none flex-1 px-2 font-normal sm:text-sm text-xs cursor-pointer"
                  />
                  <ContactIcon />
                </div>
                <div className="bg-darkgray rounded-xl md:py-4 py-3 md:px-4 px-2 flex items-center hover:ring-1 hover:ring-zinc-400">
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-transparent text-gray outline-none flex-1 px-2 font-normal sm:text-sm text-xs cursor-pointer"
                  />
                  <Email />
                </div>
                <div className="bg-darkgray rounded-xl md:py-4 py-3 md:px-4 px-2 flex items-center hover:ring-1 hover:ring-zinc-400">
                  <input
                    type="text"
                    placeholder="Phone (optional)"
                    className="bg-transparent text-gray h-full focus:outline-none flex-1 px-2 font-normal sm:text-sm text-xs cursor-pointer"
                  />
                  <Phone />
                </div>
                <div className="bg-darkgray rounded-xl md:py-4 py-3 md:px-4 px-2 flex items-center hover:ring-1 hover:ring-zinc-400">
                  <input
                    type="text"
                    placeholder="Organization"
                    className="bg-transparent text-gray outline-none flex-1 px-2 font-normal sm:text-sm text-xs cursor-pointer"
                  />
                </div>

                <textarea
                  rows={4}
                  placeholder="What is your idea?"
                  className=" bg-darkgray text-gray w-full p-4 h-[[150px] rounded-xl focus:outline-none focus:ring-1 ring-greenishblue cursor-pointer"
                ></textarea>

                <button
                  type="submit"
                  className="md:py-3.5 py-2 md:px-5 px-3 bg-green rounded-xl capitalize text-white font-normal sm:text-sm text-xs transition-transform duration-400 ease-in-out transform hover:scale-105 hover:bg-[#50C878]"
                >
                  submit
                </button>
              </div>
              {/* star */}
              <div className="absolute bottom-0 right-0">
                <Star className="md:md:w-10 w-6 lg:h-10 h-6 lg:m-0 m-2"/>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default InTouch;
