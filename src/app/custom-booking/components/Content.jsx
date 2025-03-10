"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Content = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="w-full mt-36 lg:mt-32 flex flex-col justify-center items-center gap-3 px-5 lg:px-80 text-center text-bg_intro">
        <h1 className="text-[30.57px] leading-[33.22px]">{`Get in Touch`}</h1>
        <p className="text-[16px] leading-[22.5px]">{`For gatherings, special celebrations, photo-shoots or more information about us please send us a message by using the contact form below`}</p>
        <div className="text-[16px] leading-[22.5px] flex flex-col lg:flex-row justify-center items-center gap-2">
          <span>{`To email us : `} </span>
          <Link href="#">{`reservations@casalallatakerkoust.com`}</Link>
        </div>
        <div className="text-[16px] leading-[22.5px] flex justify-center items-center gap-2">
          <span>Tel :</span>
          <Link href="#">{`+212 675-480103`}</Link>
        </div>
      </div>
    )
  );
};

export default Content;
