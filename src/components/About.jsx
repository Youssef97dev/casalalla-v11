import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="w-full flex flex-col gap-3 justify-center items-center text-center p-4"
    >
      <h1 className="text-[30px] leading-[40px]">{`Discover Casa Lalla Takerkoust`}</h1>
      <p className="text-[17px] leading-[26px] font-light px-3">{`Casa Lalla Takerkoust Restaurant is a unique dining and social destination where the vibe of your favorite jet-setting hotspots of Mykonos, Ibiza `}</p>
      <p className="text-[17px] leading-[26px] font-light px-3">{`and other Balearic Islands converge with the crystal clear waters of Lalla Takerkoust and the backdrop of the High Atlas Mountains only 30 minutes away from Marrakech.`}</p>
      <Link
        href="/booking"
        className="w-full rounded-full border border-border_color py-2 mt-5 font-medium hover:bg-book_btn_hover hover:text-white transition-all duration-200"
      >{`Book a table`}</Link>
    </div>
  );
};

export default About;
