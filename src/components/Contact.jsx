import React from "react";
import whatsappIcon from "../assets/Icons/Contact Us/logos_whatsapp-icon.png";
import { contactWA } from "../constant";

const Contact = () => {
  return (
    <section className="py-28 bg-dark relative flex flex-col items-center px-48 text-white">
      <h2 className="text-inter text-primary mb-6 text-5xl font-bold tracking-tighter text-center">
        Hubungi Kami dan Dapatkan Layanan Terbaik
      </h2>
      <p className="font-inter mb-16 text-xl font-medium">
        Tim kami siap membantu dalam mewujudkan website impianmu
      </p>
      <div className="flex items-center px-10 py-5 mb-12 border-2 border-white rounded-full">
        <img className="w-[36px] mr-4" src={whatsappIcon} alt="whatsapp-icon" />
        <p className=" text-2xl">{contactWA}</p>
      </div>
      <div className="font-normal text-center w-[60%]">
        <p>
          Dapatkan konsultasi gratis dengan tim Bantoonusa untuk memulai proyek
          website Anda <br /> (pemesanan dilakukan melalui Whatsapp)
        </p>
      </div>
    </section>
  );
};

export default Contact;
