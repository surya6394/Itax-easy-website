import React from "react";
import image1 from "../images/about1.jpg";
import image2 from "../images/about2.jpg";
import image3 from "../images/about3.jpg";
import image4 from "../images/about4.png";
import image5 from "../images/about-2.jpg";
import image6 from "../images/harshs.jpeg";
import image7 from "../images/rajeev.jpeg";

import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="about">
        <div className="flex bg-about-banner flex-col -mt-12 items-center bg-no-repeat bg-center bg-cover bg-auto h-96 justify-center text-center">
          <h1 className="text-6xl font-bold drop-shadow-lg shadow-black">
            <span className="-text--clr-accent-200">Ab</span>out Us
          </h1>
          <p className="text-xl font-semibold drop-shadow-lg shadow-black mt-1 font-mono">
            Transforming Visions into Reality. Explore our solutions today
          </p>
        </div>

        <div className="mb-11">
          <div className="grid md:grid-cols-2 gap-8 pt-5 pb-11 px-10">
            <div className="flex text-center md:text-start flex-col gap-5 pl-7 pr-10 pt-11 mt-11">
              <h2 className="md:text-5xl text-4xl font-bold">
                <span className="-text--clr-accent-200">Who</span> We Are
              </h2>

              <p className="font-serif tracking-wide -text--clr--200">
                Our vision at Itax Easy Private Limited is to empower
                individuals and businesses with innovative financial solutions,
                by leveraging technology and data to provide unparalleled access
                to financial services, including hassle-free tax planning and
                compliance. We aim to make day-to-day financial management easy
                and convenient for our customers, through the use of our
                cutting-edge mobile application. With our team of experienced
                professionals in the field of finance and technology, we strive
                to provide valuable insights, knowledge and skills to help
                customers navigate the market, identify opportunities, and
                overcome challenges. Our ultimate goal is to build a nation of
                fearless and tax-abiding citizens and contribute to the growth
                of India as a strong and fast-growing economy, all while
                providing a positive and seamless experience for our customers.
              </p>
              <h2 className="text-xl font-semibold drop-shadow-lg shadow-black font-mono">
                Crafting Software Solutions for Success
              </h2>
              <p className="font-serif">
                At{" "}
                <span className="-text--clr-accent-200 text-lg font-bold">
                  i
                </span>
                <span className="text-lg font-bold">Tax Easy</span>, we are
                passionate about harnessing the power of technology to drive
                innovation and transformation. With a diverse team of skilled
                professionals, we take pride in delivering top-notch IT
                solutions that cater to a wide range of industries and business
                needs.
              </p>
            </div>
            <div className="grid place-items-center">
              <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                <div class="-m-1 flex flex-wrap md:-m-2">
                  <div class="flex w-1/2 flex-wrap mt-8">
                    <div class="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block h-md w-full  object-cover object-center"
                        src={image2}
                      />
                    </div>
                    <div class="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block h-full w-full  object-cover object-center"
                        src={image3}
                      />
                    </div>
                  </div>
                  <div class="flex w-1/2 flex-wrap mb-8">
                    <div class="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block h-full w-full  object-cover object-center"
                        src={image1}
                      />
                    </div>
                    <div class="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block h-full w-full  object-cover object-center"
                        src={image4}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
        <div className="items-center -bg--clr-gray-200 py-12 px-12">
          <img
            src={image5}
            className="h-full w-full rounded-2xl drop-shadow-2xl"
            alt=""
          />

          <h1 className="lg:text-5xl md:text-4xl text-2xl text-center leading-tight mt-10 lg:mx-12 -text--clr-gray-500">
            Beauty happens with code not by chance. We employ creative tools,
            code, solid online branding and finance knowladge to build an
            elegant solutions for our clients.
          </h1>
          <div className="flex justify-center">
            <p className="text-center lg:w-2/5 text-md mt-3 font-semibold font-serif">
              Contact us today to learn more about our services and how we can
              help you leverage the power of technology for your success.
              Together, let's embrace the future of IT solutions and take your
              business to new heights.
            </p>
          </div>
          <div className="flex justify-center p-4">
            <button className="py-4 px-8 cursor-pointer max-w-max  font-bold -text--clr-neutral-100 rounded-lg -bg--clr-pink-500 hover:-bg--clr-pink-600 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <Link>Contact Us</Link>
            </button>
          </div>
        </div>

        <div className="my-5">
          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
            <dl className="grid max-w-screen-xl p-4 mx-auto text-gray-900 sm:grid-cols-2 xl:grid-cols-4 dark:text-white sm:p-6 space-y-4">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-5xl font-extrabold">100+</dt>
                <dd className="text-gray-500 text-2xl dark:text-gray-400">
                  Projects
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-5xl font-extrabold">60+</dt>
                <dd className="text-gray-500 text-2xl dark:text-gray-400">
                  Employees
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-5xl font-extrabold">2</dt>
                <dd className="text-gray-500 text-2xl dark:text-gray-400">
                  offices
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-5xl font-extrabold">70+</dt>
                <dd className="text-gray-500 text-2xl dark:text-gray-400">
                  Happy Clients
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="-bg--clr-green-300">
          <div className="flex justify-center pt-12 m-12">
            <h2 className="md:text-5xl text-4xl font-bold">
              <span className="-text--clr-accent-200">Mee</span>t Our Team
            </h2>
          </div>

          <div className="flex flex-col-3 justify-center space-x-10 pb-20">
            <div class="max-w-sm rounded overflow-hidden shadow-lg -bg--clr-neutral-200">
              <img class="w-full" src={image6} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Harsh Singh</div>
                <div class="font-semibold text-xl mb-2">ReactJs Developer</div>
                <p class="text-gray-700 text-base">
                Gain knowledge about the different phases of software development, including requirements gathering, design, development, testing, deployment, and maintenance.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Devloper
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Inventor
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Designer
                </span>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg -bg--clr-neutral-200">
              <img class="w-full" src={image7} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Bal Govind Maurya</div>
                <div class="font-semibold text-xl mb-2">Flutter Developer</div>
                <p class="text-gray-700 text-base">
                Gain knowledge about the different phases of software development, including requirements gathering, design, development, testing, deployment, and maintenance.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Devloper
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Inventor
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Designer
                </span>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg -bg--clr-neutral-200">
              <img class="w-full" src={image7} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Rajeev Kushwah</div>
                <div class="font-semibold text-xl mb-2">Accountant</div>
                <p class="text-gray-700 text-base">
                Learn about financial statements (balance sheets, income statements, cash flow statements), ledger entries, and journal entries.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Comptroller
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Cashier
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Calculator
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
