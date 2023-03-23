import React from "react";
import { Link } from "react-scroll";
import image from "../images/hero23.jpg";

const AboutUsSection = () => {
  return (
    <>
      <section className="my-10 p-5" id="about">
        <h1 className="text-5xl text-center mb-6 md:mb-12 font-bold">
          About Us
        </h1>
        <div className="grid md:grid-cols-2 gap-8 py-10">
          <div className="flex text-center md:text-start flex-col gap-10">
            <h1 className="md:text-6xl text-5xl font-bold">
              <span className="-text--clr-accent-200">i</span>Tax Easy
            </h1>
            <p className="">
              Our vision at Itax Easy Private Limited is to empower individuals
              and businesses with innovative financial solutions, by leveraging
              technology and data to provide unparalleled access to financial
              services, including hassle-free tax planning and compliance. We
              aim to make day-to-day financial management easy and convenient
              for our customers, through the use of our cutting-edge mobile
              application. With our team of experienced professionals in the
              field of finance and technology, we strive to provide valuable
              insights, knowledge and skills to help customers navigate the
              market, identify opportunities, and overcome challenges. Our
              ultimate goal is to build a nation of fearless and tax-abiding
              citizens and contribute to the growth of India as a strong and
              fast-growing economy, all while providing a positive and seamless
              experience for our customers
            </p>
            <button className="p-4 cursor-pointer max-w-max mx-auto font-bold -text--clr-neutral-100 rounded-lg -bg--clr-accent-400 hover:-bg--clr-accent-200">
              <Link to={"contact"} smooth duration={500} offset={-120}>
                Our Contact
              </Link>
            </button>
          </div>
          <div className="grid place-items-center">
            <img src={image} alt="image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;
