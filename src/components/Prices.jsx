import React from "react";
import LevelCard from "./LevelCard";
import logoWhite from "../assets/Logo/logo-text-white.png";
import { prices } from "../constant";

const Prices = () => {
  return (
    <section className="min-h-[100vh] py-16 px-48 bg-dark text-white flex flex-col items-center">
      <h2 className="text-primary text-inter mb-6 text-5xl font-bold tracking-tighter">
        Harga Pembuatan Website
      </h2>
      <p className="mb-28 text-xl font-semibold tracking-wide">
        Konsultasikan kebutuhan Anda dan dapatkan penawaran yang tepat.
      </p>
      <div className="flex w-full gap-6">
        <div className="mr-[18px]">
          <img className="h-[34px]" src={logoWhite} alt="logo-white" />
        </div>
        <LevelCard level={"Basic"} />
        <LevelCard level={"Beginner"} />
        <LevelCard level={"Intermediate"} />
        <LevelCard level={"Advanced+"} />
      </div>
    </section>
  );
};

export default Prices;
