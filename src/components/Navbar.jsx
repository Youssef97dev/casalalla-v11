"use client";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className={`w-full bg-white shadow-md`}>
      {/* Navbar Content */}
      <div className="max-w-screen-xl mx-auto md:px-4 p-0">
        {/* Desktop Navbar */}
        <div
          className={`hidden md:flex items-center justify-between space-y-0`}
        >
          <Link href="/" className="text-2xl font-semibold">
            <img src="/logo-1.png" className="w-24 h-24" alt="Logo" />
          </Link>
          <div className="flex space-x-4 text-[15px] leading-[60px] uppercase font-medium">
            <a
              href="#hero"
              className={`tracking-[0.3em] text-text_color hover:text-gray-500`}
            >
              {t("navbar.home")}
            </a>
            <a
              href="#about"
              className={`tracking-[0.3em] text-text_color hover:text-gray-500`}
            >
              {t("navbar.about")}
            </a>
            <a
              href="#gallery"
              className={`tracking-[0.3em] text-text_color hover:text-gray-500`}
            >
              {t("navbar.gallery")}
            </a>
            <a
              href="#activities"
              className={`tracking-[0.3em] text-text_color hover:text-gray-500`}
            >
              {t("navbar.activities")}
            </a>
            <a
              href={t("navbar.menu")}
              target="_blank"
              className={`tracking-[0.3em] text-text_color hover:text-gray-500`}
            >
              Menu
            </a>
            <a
              href="#contact"
              className={`tracking-[0.3em] text-text_color hover:text-gray-500`}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex justify-between items-center bg-white px-5 py-1">
          <Link href="/" className="text-2xl font-semibold">
            <img src="/logo-1.png" className="w-16 h-16" alt="Logo" />
          </Link>
          <button
            className="text-xl text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* Full-screen mobile menu */}
          <Transition
            show={isOpen}
            enter="transition ease-out duration-700"
            enterFrom="transform translate-x-full opacity-0"
            enterTo="transform translate-x-0 opacity-100"
            leave="transition ease-in duration-500"
            leaveFrom="transform translate-x-0 opacity-100"
            leaveTo="transform translate-x-full opacity-0"
          >
            <div className="fixed top-[4rem] right-0 z-10 w-full h-screen bg-white flex flex-col items-left justify-between px-20">
              <ul
                onClick={() => setIsOpen(false)}
                className="space-y-8 leading-[25px] text-[20px] mt-10 uppercase font-light"
              >
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="/">{t("navbar.home")}</Link>
                </li>
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="#about">{t("navbar.about")}</Link>
                </li>
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="#gallery">{t("navbar.gallery")}</Link>
                </li>
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="#activities">{t("navbar.activities")}</Link>
                </li>
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href={t("navbar.menu")} target="_blank">
                    Menu
                  </Link>
                </li>
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>
          </Transition>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
