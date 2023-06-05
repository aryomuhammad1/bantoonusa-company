import React, { useEffect, useRef } from "react";
import Hero_6 from "../assets/Ilustrasi/Hero/Hero_6.png";
import Hero_5 from "../assets/Ilustrasi/Hero/Hero_5.png";
import Hero_4 from "../assets/Ilustrasi/Hero/Hero_4.png";
import Hero_3_desktop from "../assets/Ilustrasi/Hero/Hero_3_desktop.png";
import Hero_2_desktop from "../assets/Ilustrasi/Hero/Hero_2_desktop.png";
import Hero_1 from "../assets/Ilustrasi/Hero/Hero_1.png";
import arrowRight from "../assets/Icons/Components/arrow-right.png";
import About from "./About";

const Hero = () => {
  //   const bigLogoRef = useRef(null);
  //   const horizonRef = useRef(null);
  //   const hill1Ref = useRef(null);
  //   const hill2Ref = useRef(null);
  //   const peopleRef = useRef(null);
  //   const bushesRef = useRef(null);

  //   useEffect(() => {

  // 	const parallax = (e)=>{
  // 		let value = window.scrollY;

  // 	}
  // 	window.addEventListener('scroll', parallax)
  //   }, []);

  return (
    <section className="hero max-w-[100vw] h-[100vh] relative flex justify-center items-center">
      <div
        className="hero-div"
        style={{ backgroundImage: `url(${Hero_6})` }}
        id="bigLogo"
      />
      <div
        className="hero-div"
        style={{ backgroundImage: `url(${Hero_5})` }}
        id="horizon"
      />
      <div
        className="hero-div"
        style={{ backgroundImage: `url(${Hero_4})` }}
        id="hill1"
      />
      <div
        className="hero-div"
        style={{ backgroundImage: `url(${Hero_3_desktop})` }}
        id="hill2"
      />
      <div
        className="hero-div"
        style={{ backgroundImage: `url(${Hero_2_desktop})` }}
        id="people"
      />
      <div
        className="hero-div"
        style={{ backgroundImage: `url(${Hero_1})` }}
        id="bushes"
      />
      {/* <div id="text"> */}
      <div
        id="text"
        className="w-[60%] text-center font-inter flex flex-col justify-center items-center"
      >
        <div className="px-[20px]">
          <h1 className="mb-6 text-5xl font-bold leading-[64px]">
            Bangun Identitas Online Anda dengan Web yang Memukau
          </h1>
        </div>
        <h2 className="text-gray mb-8 text-2xl font-semibold tracking-wide">
          Solusi Profesional untuk Situs Web yang Menarik dan Terjangkau
        </h2>
        <button className="bg-light-primary text-xl font-semibold flex justify-center items-center gap-[16px] px-[40px] cursor-pointer py-[24px] rounded-full">
          <p>Pelajari lebih lanjut</p>
          <img src={arrowRight} className="h-[32px]" alt="arrowicon" />
        </button>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Hero;
