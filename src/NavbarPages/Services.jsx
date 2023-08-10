import React, { useState } from 'react';
import data from '../Components/CardData';
import image from '../images/services-1.jpg'
import image2 from '../images/services-2.jpg'


function Services() {
  return (
    <div>
      <div className="flex bg-about-banner flex-col items-center bg-no-repeat shadow-[inset_-18px_-10px_50px_#46464620] bg-center bg-cover bg-auto -mt-12 h-96 justify-center text-center">
          <h1 className='text-6xl font-bold drop-shadow-lg shadow-black'><span className='-text--clr-accent-200'>Ou</span>r Services</h1>
          <p className='text-xl font-semibold drop-shadow-lg shadow-black mt-1 font-mono'>Delivering Excellence and Solutions</p>
        </div>

        <div className="py-10 -bg--clr-green-300">
        <div className='text-center my-12 drop-shadow-lg'>
          <h1 className='text-3xl font-bold '>Our <span className='-text--clr-accent-200'>Fe</span>ature and Services</h1>
          <div className='flex justify-center'>
          <p className='md:text-3xl text-2xl text-center md:w-2/3 md:px-0 px-5 leading-tight mt-6 md:mx-10 -text--clr-gray-500'>Empowering businesses with a diverse suite of IT services - custom software development, Website Development, Digital Marketing, Graphics and expert IT consulting. We align our solutions with your vision to deliver exceptional results.</p>
          </div>
          <div className='flex justify-center'>
            <p className='text-lg text-center font-semibold drop-shadow-sm md:w-1/2 md:px-0 px-3 leading-tight mt-6 mx-12 -text--clr-gray-500'>We offer a comprehensive range of IT services, tailored to meet the unique requirements of our clients. We work closely with our clients to understand their goals and challenges, ensuring that our solutions align perfectly with their vision.</p>
          </div>
          
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 flex gap-10 flex items-center md:mx-12 md:px-12 mx-8 mb-12'>
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

      <div className="mb-11">
          <div className="grid md:grid-cols-2 gap-8 pt-5 pb-11 px-10">
            <div className="flex text-center md:text-start flex-col gap-5 pl-7 pr-10 pt-11 mt-11">
              <h2 className="md:text-5xl text-4xl font-bold">
                <span className="-text--clr-accent-200">Dis</span>cover Our Services
              </h2>
              
              <p className="font-serif tracking-wide -text--clr--200">
                Our vision at Itax Easy Private Limited is to empower
                individuals and businesses with innovative financial solutions,
                by leveraging technology and data to provide unparalleled access
                to financial services, including hassle-free tax planning and
                compliance. We offer a comprehensive range of IT services, tailored to meet the unique requirements of our clients. From custom software development to cloud solutions, cybersecurity to IT consulting, our team of experts is equipped with the knowledge and expertise to deliver exceptional results. We work closely with our clients to understand their goals and challenges, ensuring that our solutions align perfectly with their vision.
              </p>
              <h2 className="text-xl font-semibold drop-shadow-lg shadow-black font-mono">
              Our Comprehensive Offerings to Meet Your Needs.
                </h2>
            </div>
            <div className="grid place-items-center">
              <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                <div class="-m-1 flex flex-wrap md:-m-2">
                  <div class="flex flex-wrap mt-8">
                    <img src={image} alt="" />
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mx-4'> 
        <hr className='mx-12 -text--clr-gray-200'/>
        </div>
        <div className="mb-11">
          <div className="grid md:grid-cols-2 gap-8 pt-5 pb-11 px-10">
          <div className="grid place-items-center">
              <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                <div class="-m-1 flex flex-wrap md:-m-2">
                  <div class="flex flex-wrap mt-8">
                    <img src={image2} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex text-center md:text-start flex-col gap-5 pl-7 pr-10 pt-11 mt-11">
              <h2 className="md:text-5xl text-4xl font-bold">
                <span className="-text--clr-accent-200">Our</span> Expertise and Services
              </h2>
              
              <p className="font-serif tracking-wide -text--clr--200">
                Our vision at Itax Easy Private Limited is to empower
                individuals and businesses with innovative financial solutions,
                by leveraging technology and data to provide unparalleled access
                to financial services, including hassle-free tax planning and
                compliance. We offer a comprehensive range of IT services, tailored to meet the unique requirements of our clients. From custom software development to cloud solutions, cybersecurity to IT consulting, our team of experts is equipped with the knowledge and expertise to deliver exceptional results. We work closely with our clients to understand their goals and challenges, ensuring that our solutions align perfectly with their vision.
              </p>
              <h2 className="text-xl font-semibold drop-shadow-lg shadow-black font-mono">
              Services to Empower Your Success
                </h2>
            </div>
            
          </div>
        </div>

    </div>
  )
}

const Card = ({ image, title, text }) => {
  const [moreData, setMoreData] = useState(false);

  let shortText = `${text.slice(0, 90)}...`;
  const learnMore = () => {
    setMoreData(!moreData);
  };

  return (
    <>
      <div className="p-3 rounded-lg w-lg h-70 shadow-lg -bg--clr-neutral-50">
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
              className="py-2.5 max-w-fit cursor-pointer font-bold px-6 -text--clr-neutral-100 rounded-lg -bg--clr-pink-500 hover:-bg--clr-pink-600 tracking-tighter"
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

export default Services;