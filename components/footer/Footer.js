import React from "react";
import LogoName from "./LogoName";
import CallIcon from "@mui/icons-material/CallSharp";
import MobileIcon from "@mui/icons-material/PhoneAndroidSharp";
//  import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import NavLogo from "../navbar/NavLogo";
// import Image from 'next/image';

const map_embed_link =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15274.436407530287!2d74.59596795115938!3d16.845737424761012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1237f52c65db5%3A0xa3535676176ded0a!2sWalchand%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1700632870100!5m2!1sen!2sin";
const Footer = () => {
  return (
    <>
      {/* Footer for PC */}
      <div className="lg:flex lg:flex-row bg-navbar-theme text-white items-center justify-between px-20 hidden ">
        <div className="flex flex-col w-3/4 ">
          <div className="flex flex-row justify-center">
            <LogoName className="self-center" />
          </div>
          <div className="flex flex-row text-lg px-4 justify-between items-center">
            <div className=" flex flex-col w-1/3 justify-center">
              <span className="text-lg">RJW2+7HW</span>
              <span className="text-lg">Walchand College of Engineering, Sangli</span>
              <span className="text-lg">Maharashtra - 416415</span>
            </div>
            <div>
              <p className="py-2">
                <a className="py-2" href="tel:08026584690">
                  <CallIcon className="m-2" />
                  080-26584690
                </a>
              </p>
              <p className="py-2">
                <a className="py-2" href="tel:8904525696">
                  <MobileIcon className="m-2" />
                  8904525696
                </a>
              </p>
            </div>
            <div>
              <p className="py-2">
                <a
                  className="py-2"
                  href="http://loyolacollegeblr.com/contact.html#"
                >
                  <EmailIcon className="m-2" /> walchandcollegeblr.com
                </a>{" "}
              </p>
              {/* <a href =''><Image src = {FacebookSharpIcon} height={50} width = {50}/> 080-26584690</a> */}
              <p className="py-2">
                <a
                  className="py-2"
                  href="https://www.instagram.com/loyoladegreeofficial/?hl=en"
                >
                  <InstagramIcon className="m-2" /> walchandcollegeofficial
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col py-6 px-8 m-4">
          <iframe
            className=""
            src={map_embed_link}
            height={250}
            width={500}
          ></iframe>
        </div>
      </div>

      {/* Footer for phones */}
      <div
        className={`lg:hidden flex flex-col justify-center py-4 bg-navbar-theme text-white`}
      >
        <div className="mx-16">
          <NavLogo />
        </div>
        <div className="flex flex-row text-xs px-4 py-2 justify-between items-center">
          <div className=" flex flex-col justify-center">
            <p className="font-semibold text-sm pb-1">Address:</p>
            <span >RJW2+7HW</span>
            <span >Walchand College of Engineering, Sangli</span>
            <span >Maharashtra - 416415</span>
          </div>
          {/* <div>
            <p className="py-2">
              <a className="py-2" href="tel:08026584690">
                <CallIcon className="m-2" />
                080-26584690
              </a>
            </p>
            <p className="py-2">	
              <a className="py-2" href="tel:8904525696">
                <MobileIcon className="m-2" />
                8904525696
              </a>
            </p>
          </div>
          <div>
            <p className="py-2">
              <a
                className="py-2"
                href="http://loyolacollegeblr.com/contact.html#"
              >
                <EmailIcon className="m-2" /> loyolacollegeblr.com
              </a>{" "}
            </p>
            {/* <a href =''><Image src = {FacebookSharpIcon} height={50} width = {50}/> 080-26584690</a> 
            <p className="py-2">
              <a
                className="py-2"
                href="https://www.instagram.com/loyoladegreeofficial/?hl=en"
              >
                <InstagramIcon className="m-2" /> loyoladegreeofficial
              </a>
            </p>
          </div> */}
          <div className="flex flex-col ">
            <p className="pb-1">
              <a href="tel:08026584690">
                <CallIcon />
                080-26584690
              </a>
            </p>
            <p className="pb-1">
              <a href="tel:8904525696">
                <MobileIcon />
                8904525696
              </a>
            </p>
            <p className="pb-1">
              <a href="http://loyolacollegeblr.com/contact.html#">
                <EmailIcon /> walchandcollegeblr.com
              </a>{" "}
            </p>
            <p className="pb-1">
              <a href="https://www.instagram.com/loyoladegreeofficial/?hl=en">
                <InstagramIcon /> walchandcollegeofficial
              </a>
            </p>
          </div>
        </div>
        {/* map embed */}
        <div className="flex flex-col items-center justify-center">
          <iframe
            className=""
            src={map_embed_link}
            height={180}
            width={300}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Footer;
