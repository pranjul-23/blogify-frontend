import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-col justify-around items-center gap-2 sm:gap-0 sm:flex-row bg-black py-3">
      <Image src={assets.logo_light} width={120} alt="footer_logo" />
      <p className="text-sm text-white">
        All right reserved. Copyright @blogger
      </p>
      <div className="flex">
        <Image src={assets.facebook_icon} alt="facebook_icon" width={40} />
        <Image src={assets.twitter_icon} alt="facebook_icon" width={40} />
        <Image src={assets.googleplus_icon} alt="facebook_icon" width={40} />
      </div>
    </div>
  );
};

export default Footer;
