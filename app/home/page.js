import React, { Fragment } from "react";
import Hero from "./components/Hero";
import SliderFirst from "./components/SliderFirst";
import Services from "./components/Services";
import Articles from "./components/Articles";
import World from "./components/World";
import Team from "./components/Team";
import SliderSecond from "./components/Projects";
import InTouch from "./components/InTouch";
import FooterTop from "@/components/FooterTop";



export const Home = () => {
  return (
    <Fragment>
      <Hero/>
       <SliderFirst/> 
      <Services/>
      <SliderSecond/>
      <Articles/>
      <World/>
      <Team/>
      <InTouch/>
      <FooterTop/>
    </Fragment>
  );
};
