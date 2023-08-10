import React from "react";
import lic from "../assets/lic.svg";
import hdfc from "../assets/hdfc.svg";
import yesBank from "../assets/yesBank.svg";
import postOffice from "../assets/postOffice.png";
import starHealth from "../assets/starHealth.png";
import yesSecurity from "../assets/yesSecurity.png";

const logos = [lic, yesBank, starHealth, yesSecurity, hdfc, postOffice];

const Partners = () => {
  return (
    <section className="mt-28 py-10">
      <h2 className="text-3xl font-bold md:text-5xl text-center">Become Our Partner</h2>
      <div className="grid gap-10 px-2 sm:grid-cols-6 grid-cols-2 my-24 justify-around">
        {logos.map((link, i) => (
          <div key={i} className='flex justify-center items-center'>
                <img src={link} className='w-32 object-cover' alt="partner-logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
