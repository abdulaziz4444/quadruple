"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Contact } from "@/public/icons/Icons";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <>
      <section className="py-2.5 sticky top-0 left-0 z-10 bg-white border-b border-gray">
        <div className="md:container mx-auto px-5">
          <div className="flex justify-between">
            {/* logo */}
            <Link href="/">
              <Image
                src="/images/logo.svg"
                width={118}
                height={60}
                className="lg:w-auto lg:h-auto h-10 w-full object-cover block"
                alt="Quadruple logo"
              />
            </Link>

            {/* links */}
            <ul className="hidden lg:flex items-center lg:gap-10 gap-5">
              <li>
                <Link href="/" className="uppercase font-medium text-sm hover:text-green">
                  home
                </Link>
              </li>
              <li>
                <Link href="#services" className="uppercase font-medium text-sm hover:text-green">
                  services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="uppercase font-medium text-sm hover:text-green">
                  projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="uppercase font-medium text-sm hover:text-green">
                  blogs
                </Link>
              </li>
              <li>
                <Link href="#team" className="uppercase font-medium text-sm hover:text-green">
                  our team
                </Link>
              </li>
            </ul>

            {/* contact button */}
            <div>
              <Link
                href="#contactus"
                className="lg:flex hidden bg-green lg:py-3 py-2 lg:px-6 px-4 rounded-full text-white capitalize items-center gap-[6px] font-semibold text-sm  transition-transform duration-400 ease-in-out transform hover:scale-105 hover:bg-darkgray"
              >
                contact us
                <Contact />
              </Link>
            </div>
            <MobileMenu />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
