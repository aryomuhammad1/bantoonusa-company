import React from "react";
import LevelCard from "./LevelCard";
import logoWhite from "../assets/Logo/logo-text-white.png";
import { prices, features } from "../constant";
import lightDivider from "../assets/Ilustrasi/Divider/Divider-Light.png";

const Prices = () => {
  return (
    <section className="relative min-h-[100vh] py-28 px-48 bg-dark text-white flex flex-col items-center">
      <h2 className="text-primary text-inter mb-6 text-5xl font-bold tracking-tighter text-center">
        Harga Pembuatan Website
      </h2>
      <p className="mb-28 text-xl font-semibold tracking-wide">
        Konsultasikan kebutuhan Anda dan dapatkan penawaran yang tepat.
      </p>
      <div className="flex w-full gap-6 mb-10">
        <div className="w-[21%]">
          <img className="h-[34px]" src={logoWhite} alt="logo-white" />
        </div>
        <LevelCard level={"Basic"} />
        <LevelCard level={"Beginner"} />
        <LevelCard level={"Intermediate"} />
        <LevelCard level={"Advanced+"} />
      </div>
      <div className="border-gray flex items-center w-full gap-6 text-xl border-b-[0.5px] border-solid">
        <div className="w-[21%]">
          <p className="font-semibold">Harga (Rp)</p>
        </div>
        {prices.map((price) => {
          return (
            <div
              key={price.id}
              className="w-[20%] flex flex-col justify-center aspect-[1/.65] text-center"
            >
              <p className="mb-3 text-2xl font-semibold">{price.price}</p>
              <p className="text-sm font-thin">{price.span}</p>
            </div>
          );
        })}
      </div>
      {features.map((feature) => {
        return (
          <div
            key={feature.id}
            className="border-gray flex items-center w-full gap-6 text-xl border-b-[0.5px] border-solid"
          >
            <div className="w-[21%]">{feature.featureType}</div>
            {feature.levels.map((level) => {
              return (
                <div className="w-[20%] flex items-center justify-center aspect-[1/.3] text-center">
                  {level.feature.icon ? (
                    <img
                      className="h-[26px]"
                      src={level.feature.icon}
                      alt="check"
                    />
                  ) : (
                    level.feature
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
      <img
        className="h-[48px] absolute bottom-0 left-0 right-0 "
        src={lightDivider}
        alt=""
      />
    </section>
  );
};

export default Prices;
