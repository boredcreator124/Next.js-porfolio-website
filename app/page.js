import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className=" flex flex-col min-h-screen ">
      <Header/>
      <Hero/>
      <Experience/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
   
  );
}