"use client";
import Image from "next/image";
import Accordion from "./Accordion";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Activities = () => {
  const { t } = useTranslation();
  return (
    <div
      id="activities"
      className="w-full h-full flex flex-col justify-center items-center gap-10"
    >
      <div className="w-full h-full">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/hnwydmpvhljw0eietnnw"
          alt={`Image casa lalla`}
          height={1000}
          width={1000}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-3 px-8 py-2 text-center">
        <h1 className="uppercase text-[30px] leading-[40px] font-light mb-5">
          Expérience <br /> Casa Lalla
        </h1>
        <Accordion />
        <Link
          href="/custom-booking"
          className="w-full rounded-full border border-border_color py-2 mt-5 font-light uppercase hover:bg-book_btn_hover hover:text-white transition-all duration-200"
        >
          {t("activities.book_experience")}
        </Link>
      </div>
    </div>
  );
};

export default Activities;
