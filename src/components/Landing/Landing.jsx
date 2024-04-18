import React, { useEffect } from "react";
import Bg from "../../assets/bg.jpg";
import BgVideo from "../../assets/earth-bg.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Page/Navbar/Navbar.jsx";
import Hero from "../Page/Hero/Hero.jsx";
import HeroCard from "../Page/HeroCard/HeroCard.jsx";
import Rapidscat from "../Page/Rapidscat/Rapidscat.jsx";
import Satelite from "../Page/Satelite/Satelite.jsx";
import Footer from "../Page/Footer/Footer.jsx";
import Footer5 from "../Page/Footer/Footer5.jsx";
import Rapidscat1 from "../Page/Rapidscat/Rapidscat1.jsx"



const Landing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="">
      <div className="h-[700px] relative">
      <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <Navbar/>
        <Hero/>
      </div>
      <HeroCard/>
      <Rapidscat/> 
      <Satelite/>
      <Rapidscat1/>
   
   
      <Footer/>
      <Footer5/>
    </div>
  );
};

export default Landing;
