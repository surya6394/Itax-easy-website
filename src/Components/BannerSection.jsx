import React, { useState } from "react";
import { Link } from "react-scroll";
import ReactTypingEffect from "react-typing-effect";
import BannerImg from "../images/banner2img.png";

const BannerSection = () => {

  return (
    <>
      <section className="min-h-[75vh] flex sm:m-5 sm:min-h-[50vh] px-5 lg:py-10 items-center" id="home">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex gap-2 py-10 pl-6 lg:mt-4 mb-10 md:items-start items-center flex-col ">
            <h2 className="text-4xl font-bold">
              <span className="-text--clr-accent-200">i</span>Tax Easy
            </h2>
            <h1 className="md:text-xl lg:text-5xl text-xl lg:mt-2 font-bold drop-shadow-md">
              <ReactTypingEffect
                text={["Elevate Your Business with US", "Innovate, Transform, Succeed","Your Vision, Our IT Expertise"]}
                speed={30}
                eraseSpeed={30}
                typingDelay={1500}
                eraseDelay={3000}
              />
            </h1>
            <h2 className="lg:text-2xl md:text-xl font-bold mt-5 font-mono">Your Trusted <span className="-text--clr-accent-200">I</span>T Solution Partner.</h2>
            <p className="lg:text-lg -text--clr-primary-400 font-serif drop-shadow-lg shadow-black">
            Discover innovative technology solutions tailored to elevate your business to new heights. Unlock your full potential with our cutting-edge expertise and empower your digital success. Explore our services and embark on a journey of digital transformation today!"
            </p>
            <div className="pt-5">
            <button className="py-4 cursor-pointer font-bold px-10 -text--clr-neutral-100 rounded-md -bg--clr-pink-500 hover:-bg--clr-pink-600 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <Link to={"career"} smooth duration={500} offset={-120}>
                Meet Our Services
              </Link>
            </button>
            </div>
          </div>
          <div className=" pr-5 ">
            <img src={BannerImg} alt="" className="object-cover rounded-tl-3xl"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerSection;
