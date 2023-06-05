import React from "react";
import LogoText from "../assets/Logo/logo-text.png";
import { navLinks } from "../constant";

const Navigation = () => {
  return (
    <div className="bg-white px-[80px] items-center font-semibold z-10 font-inter py-[24px] flex justify-between ">
      <img src={LogoText} alt="logo" className="h-[32px] " />
      <ul className="flex gap-[40px]">
        {navLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          );
        })}
      </ul>
      <a href="#contact">Hubungi Kami</a>
    </div>
  );
};

export default Navigation;
