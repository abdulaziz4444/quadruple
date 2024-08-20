import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Call,
  Facebook,
  Instagram,
  Linkedin,
  Location,
  Message,
  Twitter,
} from "@/public/icons/Icons";
import Footer from "@/app/blog/components/Footer"
const Footer1 = () => {
  return (
    <>
      <section className="bg-darkgray lg:py-20 md:py-16 sm:py-12 py-6 lg:mt-20 md:mt-10 mt-5">
        <div className="md:container mx-auto px-5">
          <div className="lg:grid lg:col-span-12  xl:gap-20 md:gap-16 sm:gap-10 gap-5 flex flex-col items-center ">
            {/* logo side */}
            <div className="lg:col-span-3 col-span-full">
              <Link href="/">
                <Image
                  src="/images/logo2.svg"
                  width={118}
                  height={60}
                  className="lg:w-auto lg:h-auto h-full  object-cover"
                  alt="Quadruple logo"
                />
              </Link>
              <div className="flex md:gap-3 gap-2 lg:pt-7 md:pt-3 pt-2 ">
                <Link
                  href="/"
                  className="rounded-full bg-blue sm:w-7 w-5 sm:h-7 h-5 flex items-center justify-center hover:opacity-70"
                >
                  <Facebook />
                </Link>
                <Link
                  href="/"
                  className="rounded-full bg-lightgray sm:w-7 w-5 sm:h-7 h-5 flex items-center justify-center hover:opacity-70"
                >
                  <Twitter />
                </Link>
                <Link
                  href="/"
                  className="rounded-full bg-halfblue sm:w-7 w-5 sm:h-7 h-5 flex items-center justify-center hover:opacity-70"
                >
                  <Linkedin />
                </Link>
                <Link
                  href="/"
                  className="rounded-full bg-purple sm:w-7 w-5 sm:h-7 h-5 flex items-center justify-center hover:opacity-70"
                >
                  <Instagram />
                </Link>
              </div>
            </div>
            {/* link side */}
            <div className="lg:col-start-7 lg:col-span-9 col-span-12">
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 sm:gap-5 gap-2 lg:text-start text-center">
                {/* company links */}
                <div className="">
                  <h5 className="font-semibold md:text-lg text-base text-white uppercase">
                    company
                  </h5>
                  <ul className="md:pt-[18px] pt-1 flex flex-col md:gap-2 gap-0">
                    <li>
                      <Link href="#" className="capitalize text-white text-sm hover:underline">
                        about
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="capitalize text-white text-sm hover:underline">
                        work
                      </Link>
                    </li>
                    <li>
                      <Link href="#services" className="capitalize text-white text-sm hover:underline">
                        services
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* other links */}
                <div className="">
                  <h5 className="font-semibold md:text-lg text-base text-white uppercase">
                    other
                  </h5>
                  <ul className=" md:pt-[18px] pt-1 flex flex-col md:gap-2 gap-0">
                    <li>
                      <Link href="/blog" className="capitalize text-white text-sm hover:underline">
                        blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="capitalize text-white text-sm hover:underline">
                        privacy policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="capitalize text-white text-sm hover:underline">
                        cookies policy
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* contact links */}
                <div className="">
                  <h5 className="font-semibold md:text-lg text-base text-white uppercase">
                    contact us
                  </h5>
                  <div className="flex items-center md:gap-3 gap-2 md:pt-[18px] pt-1">
                    <Location />
                    <p className="text-white  md:text-base text-sm capitalize hover:underline">
                      islamabad, pakistan
                    </p>
                  </div>
                  <div className="flex items-center md:gap-3 gap-2 md:py-4 py-1">
                    <Call />
                    <p className="text-white  md:text-base text-sm capitalize hover:underline">
                      (333) 223-5084
                    </p>
                  </div>
                  <div className="flex items-center md:gap-3 gap-2">
                    <Message />
                    <p className="text-white  md:text-base text-sm hover:underline">
                      info@marvellex.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <Footer />
    </>

  );
};

export default Footer1;
