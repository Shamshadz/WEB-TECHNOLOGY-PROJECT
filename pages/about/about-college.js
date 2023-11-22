import React from "react";
import Image from "next/image";
import founderImg from "../../public/about/founder.webp";
import logoImg from "../../public/about/ldcLogo.webp";

import { Inter, Oswald, Lobster_Two } from "next/font/google";

const mainHeading = Lobster_Two({ subsets: ["latin"], weight: "400" });
const generalHeaders = Oswald({ subsets: ["latin"] });
const generalText = Inter({ subsets: ["latin"] });

const Founder = () => {
  return (
    <div className={`grid auto-rows-max grid-cols-15 gap-0 justify-center`}>
      <Image
        src={founderImg}
        className={`pl-5 pt-5 col-start-1 col-end-4 md:col-start-2 md:col-end-2 lg:col-start-2 lg:col-end-2 xl:col-start-2 xl:col-end-2 xl:w-4/5 xl:pt-3`}
      />
      <div
        className={`flex flex-col gap-2 px-5 py-2 col-start-1 col-end-10 md:col-start-3 md:col-end-10 lg:col-start-3 lg:col-end-10 xl:col-start-3 xl:col-end-10 xl:pl-0 xl:pr-9`}
      >
        <h2
          className={`text-xl ${generalHeaders.className} uppercase font-medium underline underline-offset-2 decoration-dotted decoration-red-400`}
        >
          Founder
        </h2>
        <p className={`text-m ${generalText.className} tracking-tight`}>
          Ajit Gulabchand is Chairman and Managing Director of HCC - one of India’s leading construction companies, founded by industrialist Seth Walchand Hirachand in 1926. A catalytic factor in the infrastructure growth of India, HCC has accomplished various pioneering achievements in the engineering and construction industry under his leadership.
          A graduate from Mumbai university, he began his career as the Chief Executive of Indian Hume Pipe Co. Ltd. and subsequently moved on to Ravalgaon Sugar Farm Ltd. as Managing Director, steering the company towards a fast-track growth.
        </p>
      </div>
    </div>
  );
};

const History = () => {
  return (
    <div className={`grid auto-rows-max grid-cols-15 gap-0 justify-center`}>
      <Image
        src={logoImg}
        className={`pl-8 pt-3 col-start-1 col-end-3 md:col-start-2 md:col-end-2 lg:col-start-2 lg:col-end-2 xl:col-start-2 xl:col-end-2 xl:w-4/5`}
      />
      <div
        className={`flex flex-col gap-2 px-5 py-2 col-start-1 col-end-10 md:col-start-3 md:col-end-10 lg:col-start-3 lg:col-end-10 xl:col-start-3 xl:col-end-10 xl:pl-0 xl:pr-9`}
      >
        <h2
          className={`text-xl ${generalHeaders.className} uppercase font-medium underline underline-offset-2 decoration-dotted decoration-red-400`}
        >
          History
        </h2>
        <ul
          className={`text-m ${generalText.className} tracking-tight grid grid-rows-2 gap-5 pb-5`}
        >
          <li className={`row-span-1 `}>
            Walchand College of Engineering became autonomous in 2007. The college revamped its academic structure and contents, in consultation with few US and IIT academic experts. Accordingly nomenclature of B.E and M.E programs has been changed to B Tech and M Tech programs. After completion of the first term of six years, the College has now received extension of autonomous status for the second term of six years till 2019-20. It participated in the World Bank funded, Government of India scheme, namely, Technical Education Quality Improvement Program (TEQIP) in Phase I from 2005-2009, wherein it stood all-India 2nd out of 127 participating institutions in terms of program impact performance. The college is presently participating in Phase II of TEQIP with outstanding performance
          </li>
          <li className={`row-start-2`}>
            Walchand College of Engineering became autonomous in 2007. The college revamped its academic structure and contents, in consultation with few US and IIT academic experts. Accordingly nomenclature of B.E and M.E programs has been changed to B Tech and M Tech programs. After completion of the first term of six years, the College has now received extension of autonomous status for the second term of six years till 2019-20. It participated in the World Bank funded, Government of India scheme, namely, Technical Education Quality Improvement Program (TEQIP) in Phase I from 2005-2009, wherein it stood all-India 2nd out of 127 participating institutions in terms of program impact performance. The college is presently participating in Phase II of TEQIP with outstanding performance
          </li>
        </ul>
      </div>
    </div>
  );
};

const AboutUni = () => {
  return (
    <div
      className={`grid grid-rows-15 items-center justify-center bg-[url('~/public/backgrounds/bgTwo.webp')] bg-cover bg-center bg-fixed text-black xl:gap-7`}
    >
      <div className={`bg-red-50/80`}>
        <h1
          className={`row-span-4 custom-letter-spacing-wider py-5 text-5xl text-center ${mainHeading.className} text-shadow-sm-red sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl xl:pb-0`}
        >
          About College
        </h1>
        <Founder />
        <History />
      </div>
    </div>
  );
};

export default AboutUni;
