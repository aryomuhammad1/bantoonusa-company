import React from "react";
import { specialOffers } from "../constant";
import darkDivider from "../assets/Ilustrasi/Divider/Divider-Dark.png";

const SpecialOffer = () => {
  return (
    <section className="relative min-h-[100vh] py-28 px-48 bg-cream text-dark flex flex-col items-center">
      <h2 className="text-inter mb-6 text-5xl font-bold tracking-tighter text-center">
        Paket Khusus yang Tidak Terbatas
      </h2>
      <p className="font-source mb-24 text-xl font-bold tracking-tight">
        Buat website Anda sepenuh hati dengan layanan pembuatan website custom
        kami
      </p>
      <div className="flex flex-wrap items-center w-full mb-10">
        {specialOffers.map((offer) => {
          return (
            <div
              key={offer.id}
              className="flex items-center w-[50%] gap-4 mb-8"
            >
              <img className="h-[32px]" src={offer.img} alt="calculator-icon" />
              <p className="font-source text-base font-medium tracking-wide">
                {offer.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className=" bg-dark text-light-primary flex items-center justify-center w-full py-5 mb-12 text-2xl font-medium rounded-full">
        Paket spesial mulai dari Rp 15jt+
      </div>
      <div className="font-medium text-center w-[60%]">
        <p>
          Buat website impianmu dengan paket custom kami, yang menawarkan
          konsultasi intensif, 6 bulan pemeliharaan, dan fleksibilitas biaya dan
          waktu
        </p>
      </div>
      <img
        className="h-[48px] absolute bottom-0 left-0 right-0 "
        src={darkDivider}
        alt=""
      />
    </section>
  );
};

export default SpecialOffer;
