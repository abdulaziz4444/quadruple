import React from "react";
import { Fb, Inst, Send, Twit } from "@/public/icons/Icons";
import Link from "next/link";
import Image from "next/image";

// Assets
import pic1 from "@/public/images/blogpic1.png";
import pic2 from "@/public/images/blogpic2.png";
import Article from "./Article";

const BlogLeft = () => {
  return (
    <>
      <section>
        <p className="text-lightgray uppercase font-semibold sm:text-sm text-xs">
          home / blog / <span className="text-green">technology</span>
        </p>
        <h2 className="text-darkgray font-bold lg:text-4xl md:text-3xl sm:text-2xl text-lg lg:pt-7 md:pt-5 pt-2">
          How to look for inspiration for new goals in life and give yourself a
          break?
        </h2>
        <div className="flex justify-between py-5 border-b border-[#9CA3AF]">
          <div className="capitalize text-[#9CA3AF] sm:text-sm text-xs">
            by:
            <span className="text-lightgray capitalize font-semibold sm:text-sm text-xs border-b border-lightgray pl-0.5">
              abdul aziz
            </span>
          </div>
          <div className="flex items-center">
            <span className="capitalize text-[#9CA3AF] font-medium sm:text-sm text-xs pr-2">
              share post:
            </span>

            <div className="flex md:gap-2.5 gap-1.5">
              <Link
                href="/"
                className="sm:w-2.5 w-2 sm:h-4 h-3 flex items-center justify-center"
              >
                <Fb />
              </Link>
              <Link
                href="/"
                className="sm:w-4 w-3 sm:h-4 h-3 flex items-center justify-center"
              >
                <Inst />
              </Link>
              <Link
                href="/"
                className="sm:w-4 w-3 sm:h-4 h-3 flex items-center justify-center"
              >
                <Twit />
              </Link>
              <Link
                href="/"
                className="sm:w-5 w-3 sm:h-4 h-3 flex items-center justify-center"
              >
                <Send />
              </Link>
            </div>
          </div>
        </div>
        {/*paragraph start 1*/}

        <div className="md:pt-7 pt-4">
          <p className="text-grayy font-normal md:text-base sm:text-sm text-xs">
            The rise of technology has had a significant impact on the way we
            live our lives, and the world of E-commerce is no exception. As
            technology continues to evolve, it is changing the way we make
            payments, and this is having a significant impact on the E-commerce
            industry worldwide.
          </p>
          <Image src={pic1} alt="blog image1" className="md:py-7 py-4 w-full" />
          {/* paragraph 2 */}
          <p className="text-grayy font-normal md:text-base sm:text-sm text-xs">
            One of the biggest trends in the E-Commerce industry is the rise of
            mobile payments. With the increasing popularity of smartphones,
            consumers are now able to make payments quickly and easily using
            mobile payment apps. This has made it easier for consumers to shop
            online, as they no longer have to enter their credit card
            information every time they make a purchase.
          </p>
          {/* paragraph 3 */}
          <p className="text-grayy font-normal md:text-base sm:text-sm text-xs md:py-5 py-3">
            Another trend that is shaping the E-Commerce industry is the rise of
            cryptocurrency. Cryptocurrency is a digital currency that uses
            encryption techniques to regulate the generation of units of
            currency and verify the transfer of funds. This technology has the
            potential to revolutionize the way we make payments, as it provides
            a secure and decentralized way to transfer funds. Mobile payments,
            cryptocurrency and AI
          </p>
          <h2 className="font-bold text-darkgray md:text-2xl sm:text-xl text-lg">
            You Truly Believed In Justice
          </h2>
          {/* paragraph 4 */}
          <p className="text-grayy font-normal md:text-base sm:text-sm text-xs md:py-5 py-3">
            In addition to mobile payments and cryptocurrency, there are other
            technologies that are shaping the future of E-Commerce. For example,
            biometric authentication is becoming more prevalent, and this
            technology could make it easier for consumers to make payments
            securely without having to enter a password.
          </p>
          {/* paragraph 5 */}
          <li className="text-grayy font-normal md:text-base sm:text-sm text-xs">
            The use of artificial intelligence (AI) is also becoming more common
            in the E-Commerce industry.
          </li>
          <li className="text-grayy font-normal md:text-base sm:text-sm text-xs">
            AI can be used to personalize the shopping experience for consumers.
          </li>
          <li className="text-grayy font-normal md:text-base sm:text-sm text-xs">
            {" "}
            AI can be used to personalize the shopping experience for consumers.
          </li>
          {/* paragraph 6 */}
          <p className="text-grayy font-normal md:text-base sm:text-sm text-xs md:py-5 py-3">
            All of these technologies have the potential to make payments easier
            and more secure, which is good news for both consumers and
            merchants. However, it is important to note that there are still
            challenges to overcome, such as security and privacy concerns, as
            well as the need for widespread adoption of these new technologies.
          </p>
        </div>
        {/* technologies envolve */}
        <div>
          <h2 className="font-bold text-darkgray md:text-2xl sm:text-xl text-lg">
            Technologies continue to evolve
          </h2>
          {/* paragraph 7 */}
          <p className="text-grayy font-normal md:text-base sm:text-sm text-xs md:pt-5 pt-3">
            The e-commerce industry stands at the forefront of technological
            evolution, constantly adapting and growing with every new wave of
            innovation. In recent years, three major technological advancements
            have significantly impacted this dynamic sector: mobile payments,
            cryptocurrency, and Artificial Intelligence (AI).
          </p>
          <Image
            src={pic2}
            alt="bloge image2"
            className="w-full md:py-7 py-4"
          />
          {/* paragraph 8 */}
          <p className="text-grayy font-normal md:text-base sm:text-sm text-xs">
            Mobile payments have revolutionized the e-commerce landscape by
            offering unparalleled convenience and speed. With just a few taps on
            a smartphone, consumers can complete transactions anytime and
            anywhere, bypassing the traditional hassles of cash or card
            payments.
          </p>
          {/* paragraph 9 */}
          <p className="text-grayy font-normal md:text-base sm:text-sm text-xs md:py-5 py-3">
            Cryptocurrency has emerged as a potent force, challenging
            conventional financial systems and offering a new paradigm for
            online transactions. With its decentralized nature and robust
            encryption, cryptocurrencies provide a level of security and
            anonymity previously unavailable to online shoppers.
          </p>
          <h2 className="font-bold text-darkgray md:text-2xl sm:text-xl text-lg md:pb-5 pb-3">
            Conclusion
          </h2>
          {/* paragraph 10 */}
          <p className="text-grayy font-normal md:text-base sm:text-sm text-xs">
            As these technologies continue to evolve and interweave, the future
            of e-commerce looks not only more digital but also more secure,
            personalized, and accessible. The implications of these advancements
            extend beyond just consumer convenience, heralding a new era of
            digital commerce that is as exciting as it is unpredictable. The
            industry must stay agile and forward-thinking to harness these
            technologies' full potential and navigate the challenges they bring.
          </p>
        </div>
        {/* tags */}
        <div className="flex lg:flex-nowrap flex-wrap lg:gap-6 gap-3 md:pt-8 pt-4 md:pb-10 pb-5 border-b border-[#9CA3AF] ">
           <p className="capitalize text-lightgray font-semibold md:text-lg text-base">relevant tags:</p>
            <span className="font-medium text-grayy md:text-lg text-base">#Inpiration</span>
            <span  className="font-medium text-grayy md:text-lg text-base">#Technology</span>
            <span  className="font-medium text-grayy md:text-lg text-base">#AI</span>
        </div>
        {/* articles */}
        <Article/>
        {/* footer */}
        
      </section>
    </>
  );
};

export default BlogLeft;
