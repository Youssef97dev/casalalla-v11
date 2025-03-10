"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div
      id="about"
      className="w-full flex flex-col gap-3 justify-center items-center text-center p-4"
    >
      <h1 className="text-[30px] leading-[40px]">{t("about.title")}</h1>
      <p className="text-[17px] leading-[26px] font-light px-3">
        {t("about.content_1")}
      </p>
      <p className="text-[17px] leading-[26px] font-light px-3">
        {t("about.content_2")}
      </p>
      <Link
        href="/booking"
        className="w-full rounded-full border border-border_color py-2 mt-5 font-medium hover:bg-book_btn_hover hover:text-white transition-all duration-200"
      >
        {t("about.button")}
      </Link>
    </div>
  );
};

export default About;
