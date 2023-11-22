import React from "react";
import { Oswald, Inter } from "next/font/google";

const OswaldBold = Oswald({ weight: "700", subsets: ["latin"] });
const inter = Inter({ weight: "500", subsets: ["latin"] });
const WelcomeText = () => {
  return (
    <div className=" text-justify text-black lg:px-48 px-8 py-8 font-medium text-lg leading-relaxed bg-slate-300 ">
      <h1
        className={`text-center text-5xl font-bold pb-5 text-navbar-theme ${OswaldBold.className}`}
      >
        WELCOME TO WALCHAND COLLEGE OF ENGINEERING, SANGLI, MAHARASHTRA, INDIA
      </h1>
      <p className={`${inter.className} text-justify pt-2 pb-4 font-semibold`}>
        Walchand College of Engineering is situated midway between Sangli and Miraj cities at Vishrambag, Sangli. The WCE campus is located on about 90 acres of land on southern side of Sangli ? Miraj road.

      </p>
      <p className={`${inter.className} text-justify py-4 font-semibold`}>
        In 1947, the college made a modest beginning as New Engineering College, with a single program leading to B.E. (Civil) degree. In the year 1955, the College was renamed as Walchand College of Engineering as part of the new arrangements and pursuant to the Rehabilitation and Development Program mainly funded by Seth Walchand Hirachand Memorial Trust and the Government. The Government appointed an Ad Hoc Committee for conducting the college from May 1955, later replaced by the Administrative Council in 1956. The Ad Hoc Committee added two more degree programs in B.E. (Mechanical) and B.E. (Electrical) in 1955 with the intake of 20 each. Three Diploma programs also started in 1955 ? Civil (40 intake), Mechanical (20) and Electrical (20).
      </p>
      <p className={`${inter.className} text-justify py-4 font-semibold`}>
        Post Graduate programs in Civil, Mechanical and Electrical Engineering and Diploma program in Industrial Electronics were introduced in 1971. In 1986 the UG and PG programs in Electronics Engineering and UG program in Computer Science and Engineering were introduced.
      </p>
    </div>
  );
};

export default WelcomeText;
