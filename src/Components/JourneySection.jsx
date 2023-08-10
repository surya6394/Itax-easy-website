import React, { useState } from "react";
import data from '../Components/CardData';

const JourneySection = () => {
  return (
    <>
      <section className="mb-32" id="journey">
        <div className="mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-14">
            Our Journey
          </h1>
          <div className="grid lg:grid-cols-3 px-8 gap-8">
            {data.JourneyCardData.map((data, index) => (
              <JourneyCard
                key={index}
                title={data.title}
                year={data.year}
                text={data.text}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const JourneyCard = ({ year, title, text }) => {
  const [show, setShow] = useState(false);
  let shortText = `${text.slice(0, 200)}...`;

  const learnMore = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="shadow-lg [&>*]:my-4 -bg--clr-gray-300 p-4 px-8 rounded-lg">
        <h4 className="text-2xl font-semibold py-1 -text--clr-Black-100">
          <span className="font-bold text-2xl">{year}</span> : {title}
        </h4>
        <p className="font-serif">{show ? text : shortText}</p>
        <div className="flex">
        <a
              className=" cursor-pointer font-bold -text--clr-blue-200 tracking-tighter hover:underline"
              onClick={learnMore}
            >
              {show ? "<< Hide" : "know More >>"}
            </a>
            
        </div>
      </div>
    </>
  );
};

export default JourneySection;
