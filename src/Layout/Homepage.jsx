import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "../components/About/About";
import CarList from "../components/CarList/CarList";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Testimonial from "../components/Testimonial/Testimonial";
import Work from "../components/Work/Work";

const Homepage = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  // dark mode end

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Hero theme={theme} />
      <Work />
      <About />
      <CarList />
      <Services />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Homepage;
