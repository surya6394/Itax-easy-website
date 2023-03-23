import React, { useState } from "react";

const JourneyCardData = [
  {
    year: "2018",
    title: "The Beginning",
    text: "The Beginning The founder develops an idea, registers the company with the government, obtains the necessary legal documents and licenses, and obtains any necessary approvals or clearances from both state and central government agencies.",
  },
  {
    year: "2019",
    title: "The Beginning",
    text: "In December 2019, Itax Easy Private Limited began development of the company's web and app development. We have prepared all the things that are needed to develop our company and idea. Itax Easy Private Limited has a great team and every member is very dedicated in his/her work. The team members are very professional, honest and hardworking. They always do their best to make sure that everything is done on time.",
  },
  {
    year: "2020",
    title: "The Beginning",
    text: "In 2020, Itaxeasy Pvt Ltd announced a partnership with LIC, one of the largest life insurance companies in India. As part of the partnership, Itaxeasy would provide tax filing services to LIC's customers, making it easier for them to comply with their tax obligations. The partnership was expected to benefit both companies, as Itaxeasy would gain access to LIC's large customer base and expand its reach in the market, while LIC would be able to offer its customers a more comprehensive range of services. The partnership was seen as a strategic move for both companies, as it combined Itaxeasy's expertise in tax filing with LIC's strong brand and market position in the insurance industry",
  },
  {
    year: "2021",
    title: "The Beginning",
    text: "The founder develops an idea, registers the company with the government, obtains the necessary legal documents and licenses, and obtains any necessary approvals or clearances from both state and central government agencies.",
  },
  {
    year: "2022",
    title: "The Beginning",
    text: "Itaxeasy Pvt Ltd, a company that provides online tax filing and compliance services, announced a partnership with Yes Bank in 2022. As part of the partnership, Yes Bank will offer Itaxeasy's services to its customers, making it easier for them to file their taxes online. Itaxeasy, in turn, will benefit from the partnership by gaining access to Yes Bank's customer base and expanding its reach in the market. The partnership is expected to be mutually beneficial for both companies, as it combines Itaxeasy's expertise in tax filing with Yes Bank's strong customer base and banking services.",
  },
  {
    year: "2023",
    title: "The Beginning",
    text: "At Itax Easy Private Limited, we believe that everyone deserves to have access to the financial services they need. That's why we've created 'ITAXEASY', a mobile application that makes it easy for you to manage your finances--and make sure you're paying the right amount of taxes. We know that going through the process of filing your taxes can be confusing and time-consuming, but with our easy-to-use app, it's never been easier. You can get all the information you need about your taxes in one place, from start to finish--and then just click 'submit' when it's done! And if you ever want to learn more about how taxes work or what might be affecting them in your particular situation? Our team of experts is here for you. We'll help answer any questions or concerns you might have about how things were calculated or what other factors might be affecting your tax return.",
  },
];

const JourneySection = () => {
  return (
    <>
      <section className="mb-32" id="journey">
        <div className="mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-14">
            Our Journey
          </h1>
          <div className="grid lg:grid-cols-3 px-8 gap-8">
            {JourneyCardData.map((data, index) => (
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
      <div className="shadow-lg [&>*]:my-4 p-4 px-8">
        <h4 className="text-center text-2xl py-1 -bg--clr-primary-400 -text--clr-neutral-100 border-2 rounded-lg ">
          {year}
        </h4>
        <p className="text-center font-semibold text-xl">
          {title}
        </p>
        <p className="text-center">{show ? text : shortText}</p>
        <div className="flex justify-center">
        <button
              className="py-2 cursor-pointer mt-2 font-bold px-6 -text--clr-neutral-100 rounded-lg -bg--clr-primary-400 hover:-bg--clr-accent-200 tracking-tighter"
              onClick={learnMore}
            >
              {show ? "hide" : "know More"}
            </button>
        </div>
      </div>
    </>
  );
};

export default JourneySection;
