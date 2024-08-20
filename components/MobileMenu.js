import React, { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { Contact } from "@/public/icons/Icons";
import { RxCross2 } from "react-icons/rx";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden flex items-center relative z-10">
        <button
          className="w-9 h-9 flex items-center justify-center rounded-lg bg-greenishblue"
          onClick={() => setOpen(!open)}
        >
          <IoMenu className="w-5 h-5 " />
        </button>

        <div
          className={`fixed top-0 right-0 bg-gray h-full w-[300px] flex flex-col justify-center items-center gap-5 transform transition-transform duration-500 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-greenishblue absolute top-4 right-4"
            onClick={() => setOpen(!open)}
          >
            <RxCross2 className="w-4 h-4" />
          </div>
          <ul className="flex flex-col gap-5">
            <li>
              <Link href="/" className="uppercase font-medium text-sm">
                home
              </Link>
            </li>
            <li>
              <Link href="#services" className="uppercase font-medium text-sm">
                services
              </Link>
            </li>
            <li>
              <Link href="#projects" className="uppercase font-medium text-sm">
                projects
              </Link>
            </li>
            <li>
              <Link href="#blog" className="uppercase font-medium text-sm">
                blogs
              </Link>
            </li>
            <li>
              <Link href="#team" className="uppercase font-medium text-sm">
                our team
              </Link>
            </li>
          </ul>

          {/* Contact button */}
          <div>
            <Link
              href="#contactus"
              className="flex lg:py-3 py-2 lg:px-6 px-4 rounded-full text-white capitalize items-center gap-[6px] font-semibold text-sm bg-green transition-transform duration-400 ease-in-out transform hover:scale-105 hover:bg-darkgray"
            >
              contact us
              <Contact/>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
