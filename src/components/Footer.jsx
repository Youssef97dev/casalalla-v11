"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaMailBulk,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white flex flex-col justify-center items-center text-center px-20 pt-5 pb-16">
      <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6">
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/logo-2.png"
            width={170}
            height={170}
            className="cursor-pointer w-36 h-36 lg:w-52 lg:h-52"
          />
          <p>{`Lalla Takerkoust, Marrakech 40000 Morocco`}</p>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center gap-3">
          <span className="uppercase">FOLLOW US</span>
          <div className="flex flex-row justify-center items-center gap-4">
            <Link href="http://wa.me/212675480103" target="_blank">
              <FaWhatsappSquare size={25} />
            </Link>
            <Link
              href="https://www.instagram.com/casa.lalla.takerkoust"
              target="_blank"
            >
              <FaInstagramSquare size={25} />
            </Link>
            <Link
              href="mailto:reservations@casalallatakerkoust.com"
              target="_blank"
            >
              <FaMailBulk size={25} />
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-3 ">
          <span className="uppercase">Newsletter</span>
          <span className="italic">Recevez toutes nos actualités</span>
          <input
            type="text"
            placeholder="Entrez votre Email"
            className="w-full p-3 outline-none"
          />
          <button className="uppercase px-4 py-2 bg-white text-black w-full">
            Envoyer
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
