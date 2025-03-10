import React from "react";
import { FiMapPin } from "react-icons/fi";
import { FaInstagram, FaWhatsapp, FaMailBulk } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div
      id="contact"
      className="w-full h-full flex flex-col justify-center items-center gap-10 mt-10"
    >
      <div className="w-full px-4 py-4 lg:px-0 rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7698.180652510375!2d-8.13183847732848!3d31.353142798458677!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef4fcbd919cb%3A0x89922e232011bf59!2sCasa%20Lalla%20Takerkoust!5e0!3m2!1sfr!2sma!4v1729941797716!5m2!1sfr!2sma"
          height="500"
          style={{
            border: 0,
            width: "100%",
            borderRadius: "8px",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-2 px-10 py-5 mb-14 lg:hidden">
        <h1 className="uppercase text-[33.184px] leading-[46.4576px] ">
          {t("contact.title")}
        </h1>
        <div className="w-full flex justify-start items-center gap-3">
          <FiMapPin size={18} />
          <span>Casa Lalla Takerkoust, Marrakech 40000 Morocco</span>
        </div>
        <div className="w-full flex justify-start items-center gap-3">
          <FaInstagram size={18} />
          <span>@casa.lalla.takerkoust</span>
        </div>
        <div className="w-full flex justify-start items-center gap-3">
          <FaWhatsapp size={18} />
          <span>+212 6 75 48 01 03</span>
        </div>
        <div className="w-full flex justify-start items-center gap-3">
          <FaMailBulk size={18} />
          <span>reservations@casalallatakerkoust.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
