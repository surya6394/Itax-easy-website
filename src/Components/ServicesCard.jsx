import React, { useState } from "react";
import data from '../Components/CardData';

const ServicesCard = () => {
  return (
    <>
      <div id="services" >
        <div className="mt-12 lg:py-10 lg:ml-10 lg:px-4 mb-10">
          <h1 className="text-3xl md:text-5xl text-center font-bold mb-12 drop-shadow-lg shadow-black">
           Meet Our Services
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:ml-10 ml-4 px-5 gap-10 pt-5">
            {data.cardData.map((data, index) => (
              <Card
                key={index}
                image={data.img}
                title={data.title}
                text={data.text}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({ image, title, text }) => {
  const [moreData, setMoreData] = useState(false);

  let shortText = `${text.slice(0, 90)}...`;
  const learnMore = () => {
    setMoreData(!moreData);
  };

  return (
    <>
      <div className={`-bg--clr-neutral-300 lg:p-3 rounded-lg w-80 h-70 shadow-lg`}>
        <div>
          <div className="flex justify-center">
          <img
            src={image}
            className="rounded-lg h-full w-64 aspect-square object-cover"
          />
          </div>
          <div className="flex gap-4 justify-center relative flex-col p-2 py-4">
            <h4 className="font-bold text-xl">{title}</h4>
            <p className="break-all font-serif">{moreData ? text : shortText}</p>
            <button
              className="py-3 max-w-fit cursor-pointer font-bold px-6 -text--clr-neutral-100 rounded-lg -bg--clr-pink-500 hover:-bg--clr-pink-600 tracking-tighter"
              onClick={learnMore}
            >
              {moreData ? "<< hide" : "know More >>"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
