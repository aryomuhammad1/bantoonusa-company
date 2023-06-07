import React from "react";
import { aboutData } from "../constant";
import lightDivider from "../assets/Ilustrasi/Divider/Divider-Light.png";

const About = () => {
  return (
    <section className="relative py-16 text-center font-semibold about bg-dark min-h-[100vh] text-primary pt-24 px-40">
      <h2 className="text-[42px] font-source font-bold">
        Kenalan dengan Bantoonusa
      </h2>
      <p className=" mb-28 f text-xl font-medium text-white">
        Yuk, cari tahu manfaat bikin website di Bantoonusa
      </p>
      {aboutData.map((data, index) => {
        return (
          <div
            key={data.id}
            className={`${
              index % 2 == 0 ? "flex-row-reverse" : ""
            } flex items-center justify-center text-white mb-16`}
          >
            <div className="w-[50%] flex justify-center items-center">
              <img className="w-full" src={data.img} alt="" />
            </div>
            <div className="w-[50%] px-6 text-start">
              <h3 className="text-primary mb-4 text-4xl font-bold">
                {data.title}
              </h3>
              <p className="text-xl font-normal leading-8">{data.body}</p>
            </div>
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

export default About;
