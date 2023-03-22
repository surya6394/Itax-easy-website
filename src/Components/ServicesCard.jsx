import React, { useState } from "react";
import cardImg from "../assets/media.svg";
import cardImg2 from "../assets/graphic.svg";
import cardImg3 from "../assets/android.svg";
import cardImg4 from "../assets/code.svg";
import cardImg5 from "../assets/strategy.svg";
import cardImg6 from "../assets/error.svg";
import cardImg7 from "../assets/money.svg";
import cardImg8 from "../assets/robot.svg";

const cardData = [
  {
    img: cardImg,
    title: "DIGITAL MARKETING",
    text: "Digital marketing refers to the use of various online platforms and channels to promote a product or service. Some common digital marketing strategies includes the following:",
  },
  {
    img: cardImg2,
    title: "GRAPHIC DESIGNING",
    text: " Graphic design is the process of visual communication and problem-solving through the use of typography, photography, and illustrations to make it more visualised .",
  },
  {
    img: cardImg3,
    title: "APP DEVELOPMENT",
    text: "App development is the process of creating software applications for various platforms such as mobile devices, tablets, and personal computers. Some common app development services include: ",
  },
  {
    img: cardImg4,
    title: "WEB DEVELOPMENT",
    text: "Website designing is the process of creating a visually appealing and functional website that effectively communicates a brand's message to others and meets the needs of its users. ",
  },
  {
    img: cardImg5,
    title: "ERP SOLUTIONS",
    text: "ERP (Enterprise Resource Planning) solutions are software systems that integrate and automate various business processes, such as accounting, human resources, procurement, customer relationship management, and supply chain management. ",
  },
  {
    img: cardImg6,
    title: "BACKEND DEVELOPMENT",
    text: "Backend development refers to the server-side of web development, and it involves building and maintaining the technology that powers the backend of web applications and websites. Some common services provided by companies that offer backend development include: ",
  },
  {
    img: cardImg7,
    title: "INVESTMENT PLANS",
    text: " Investment planning is the process of creating a strategy for managing financial resources in order to achieve specific financial goals.Investment Plannings helps you to achieve specific financial targets. Some common services provided by companies that offer investment",
  },
  {
    img: cardImg8,
    title: "FINANCE ADVISOR",
    text: "Financial advisor services are provided by professionals who help individuals and businesses make informed financial decisions. We provide best advice that assists you to achive specific financial goals. .Some common services provided by financial advisors include: ",
  },
];

const ServicesCard = () => {
  return (
    <>
      <div id="services">
        <div className="mt-12 px-4">
          <h1 className="text-3xl md:text-5xl text-center font-bold mb-12">
            Our Services
          </h1>
          <div className="grid md:grid-cols-3 px-5 gap-12">
            {cardData.map((data, index) => (
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

  let shortText = `${text.slice(0, 80)}...`;
  const learnMore = () => {
    setMoreData(!moreData);
  };

  return (
    <>
      <div className={`-bg--clr-neutral-200 shadow-lg`}>
        <div>
          <img
            src={image}
            className="rounded-md w-full aspect-square object-cover"
          />
          <div className="flex gap-4 justify-center relative flex-col p-2 py-4">
            <h4 className="font-semibold text-lg">{title}</h4>
            <p className="break-all">{moreData ? text : shortText}</p>
            <button
              className="py-3 max-w-fit cursor-pointer font-bold px-6 -text--clr-neutral-100 rounded-lg -bg--clr-accent-400 hover:-bg--clr-accent-200 tracking-tighter"
              onClick={learnMore}
            >
              {moreData ? "hide" : "know More"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
