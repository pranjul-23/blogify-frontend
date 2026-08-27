"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-col justify-around items-center gap-2 sm:gap-0 sm:flex-row bg-blue-600 py-3">
      <Image src={assets.logo_light} width={120} alt="footer_logo" />
      <p className="text-sm text-white">
        All right reserved. Copyright @blogger
      </p>
      <div className="flex items-center gap-4">
        {/* GitHub Profile */}
        <a
          href="https://github.com/pranjul-23"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="text-white hover:opacity-80 transition"
        >
          <Image src={assets.github_icon} alt="github_icon" width={30} />
        </a>

        {/* LinkedIn Profile */}
        <a
          href="https://www.linkedin.com/in/pranjul-kumar-50b355132"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-white hover:opacity-80 transition"
        >
          <Image src={assets.linkedin_icon} alt="linkedin_icon" width={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
