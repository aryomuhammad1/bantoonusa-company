import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Prices from "./components/Prices";
import SpecialOffer from "./components/SpecialOffer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="wrapper relative max-w-[100vw] min-h-[100vh]">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Prices />
      <SpecialOffer />
      <Contact />
      {/*
       * Navigation
       * Hero
       * About
       * Services
       * Pricing
       * Promo
       * Contact
       * Footer
       */}
    </div>
  );
};

export default App;
