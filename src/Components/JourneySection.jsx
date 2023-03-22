import React from "react";

const JourneyCardData = [
  {
    year: "2018",
    title: "The Beginning",
    text: "The founder develops an idea, registers the company with the government, obtains the necessary legal documents and licenses, and obtains any necessary approvals or clearances from both state and central government agencies.",
  },
  {
    year: "2019",
    title: "The Beginning",
    text: "The founders registered a company with all the necessary legal documentation and started offering web development and mobile application services from their office in Noida, with their head office located in Gwalior in 2019",
  },
  {
    year: "2020",
    title: "The Beginning",
    text: "In the year 2020, the company started meeting people and took Lic of india as well as star health and started doing business In the year 2020, the company started meeting people and took Lic of india as well as star health and started doing business",
  },
  {
    year: "2021",
    title: "The Beginning",
    text: "The founder develops an idea, registers the company with the government, obtains the necessary legal documents and licenses, and obtains any necessary approvals or clearances from both state and central government agencies.",
  },
  {
    year: "2022",
    title: "The Beginning",
    text: "The founder develops an idea, registers the company with the government, obtains the necessary legal documents and licenses, and obtains any necessary approvals or clearances from both state and central government agencies.",
  },
  {
    year: "2023",
    title: "The Beginning",
    text: "The founder develops an idea, registers the company with the government, obtains the necessary legal documents and licenses, and obtains any necessary approvals or clearances from both state and central",
  },
];

const JourneySection = () => {
  return (
    <>
      <section className="my-32" id="journey">
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
  return (
    <>
      <div className="shadow-lg [&>*]:my-4 p-4 px-8">
        <h4 className="text-center text-2xl py-1 -bg--clr-primary-400 -text--clr-neutral-100 border-2 rounded-lg ">
          {year}
        </h4>
        <p className="text-center font-semibold text-xl">
          {title}
        </p>
        <p className="text-center">{text}</p>
      </div>
    </>
  );
};

export default JourneySection;
