import React from "react";
import { services } from "../constant";
import ServiceCard from "../components/ServiceCard";
import darkDivider from "../assets/Ilustrasi/Divider/Divider-Dark.png";

const Services = () => {
  return (
    <section className="bg-cream text-dark relative w-full px-10 py-20 text-center">
      <h2 className="text-inter mb-6 text-5xl font-bold tracking-tighter">
        Beragam Website untuk Anda
      </h2>
      <p className="mb-24 text-xl font-semibold tracking-tight">
        Temukan jenis dan solusi yang tepat sesuai kebutuhan website Anda
      </p>
      <div className="flex flex-wrap justify-center w-full gap-6">
        {services.map((service) => {
          return (
            <ServiceCard
              key={service.id}
              title={service.title}
              body={service.body}
              img={service.img}
            />
          );
        })}
      </div>
      <img
        className="h-[48px] absolute bottom-0 left-0 right-0 "
        src={darkDivider}
        alt=""
      />
    </section>
  );
};

export default Services;
