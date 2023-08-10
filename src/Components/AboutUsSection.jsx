import React from "react";
import { Link } from "react-scroll";
import image from "../images/about3-img.png";

const AboutUsSection = () => {
  return (
    <>
      <section className="bg-custom-image bg-no-repeat bg-center bg-cover bg-auto py-10 " id="about">
        <h1 className="text-5xl text-center mb-6 md:mb-12 font-bold">
          About Us
        </h1>
        <div className="grid md:grid-cols-2 gap-8 py-10 ">
        <div className="grid place-items-center">
            <img src={image} alt="image" height="450vh" />
          </div>

          <div className="flex text-center md:text-start flex-col gap-7 pl-7 pr-10">
          
            <h2 className="md:text-5xl text-4xl font-bold">
              <span className="-text--clr-accent-200">Who</span> We Are
            </h2>
            <p className="font-serif tracking-wide -text--clr--200">
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
            <button className="px-10 py-4 cursor-pointer lg:max-w-max md:max-w-max  font-bold -text--clr-neutral-100 rounded-lg -bg--clr-pink-500 hover:-bg--clr-pink-600 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <Link to={"contact"} smooth duration={500} offset={-120}>
                Our Contact
              </Link>
            </button>
          </div>
          </div>
      </section>
    </>
  );
};

export default AboutUsSection;
