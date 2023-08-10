import React from "react";
import { useState } from "react";
import data from "../Components/CardData";

function Journey() {
  return (
    <div>
      <div className="flex bg-about-banner flex-col items-center bg-no-repeat bg-center bg-cover bg-auto h-96 -mt-12 justify-center text-center">
        <h1 className="text-6xl font-bold drop-shadow-lg shadow-black">
          <span className="-text--clr-accent-200">Ou</span>r Journey
        </h1>
        <p className="text-xl font-semibold drop-shadow-lg shadow-black mt-1 font-mono">
          From Humble Beginnings to Great Heights
        </p>
      </div>

      <div className='text-center my-20  drop-shadow-lg'>
          <h1 className='text-3xl font-bold '>Empowering <span className='-text--clr-accent-200'>Fin</span>ancial Growth Together</h1>
          <div className='flex justify-center'>
            <p className='text-lg text-center font-semibold w-5/6 leading-tight mt-6 mx-12 -text--clr-gray-500'>From humble beginnings in 2018, Itax Easy Private Limited embarked on a remarkable journey to revolutionize the financial services landscape. The company's inception marked the birth of an idea that sought to simplify financial processes for individuals and businesses alike. As we traversed the development phase in 2019, our dedicated team worked tirelessly to lay the foundation for excellence in web and app development. In a pivotal move, we formed a strategic partnership with LIC, one of India's largest life insurance companies, in 2020. This collaboration enabled us to provide seamless tax filing services to LIC's customers, strengthening our foothold in the market. The year 2021 witnessed a significant milestone as we obtained a license to offer loans across India, further expanding our portfolio of financial solutions. Building on this success, we established another strategic alliance in 2022, joining forces with Yes Bank to extend our tax filing expertise to their vast customer base. Today, in 2023, we are proud to introduce 'ITAXEASY,' a cutting-edge mobile application empowering individuals to manage their finances effortlessly. Our journey has been one of constant innovation, driven by a commitment to empower financial growth and ensure financial well-being for all. Together, we embrace the future, relentlessly pursuing excellence and pioneering the way forward in the realm of financial services.</p>
          </div>
          
        </div>

      <div className="grid lg:grid-cols-3 px-8 gap-12 mx-12 mb-24">
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
  );
}

const JourneyCard = ({ year, title, text }) => {
  const [show, setShow] = useState(false);
  let shortText = `${text.slice(0, 190)}...`;

  const learnMore = () => {
    setShow(!show);
  };

  return (
    <>
      {/* <div className="shadow-lg [&>*]:my-4 -bg--clr-gray-300 p-4 px-8 rounded-lg">
        <h4 className="text-2xl font-semibold py-1 -text--clr-Black-100">
          <span className="font-bold text-2xl">{image}</span> : {title}
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
      </div> */}
      <div>
        <div className="p-6 -ml-9 md:-ml-0 rounded-lg md:w-lg h-70 shadow-2xl -bg--clr-cyan-200-00">
          <div>
            <div className="flex justify-center">
              <h4>
                <span className="-text--clr-blue-200 font-bold text-8xl font-serif">
                  {year}
                </span>
              </h4>
            </div>
            <div className="flex gap-4 justify-center  relative flex-col p-2 py-4">
              <h4 className="font-bold text-2xl text-center">{title}</h4>
              <p className="break-all font-serif">{show ? text : shortText}</p>
              <a
                className=" cursor-pointer font-bold text-center -text--clr-blue-200 tracking-tighter hover:underline"
                onClick={learnMore}
              >
                {show ? "<< Hide" : "know More >>"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
