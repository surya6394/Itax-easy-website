import React from "react";
import { Link } from "react-router-dom";
import {
  BsFillTelephoneFill,
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsWhatsapp,
} from "react-icons/bs";

const ContactSection = () => {
  return (
    <>
      <section
        className="-bg--clr-accent-200 py-10 -text--clr-accent-100 px-10 "
        id="contact"
      >
        <div className="grid md:grid-cols-3 justify-center">
          <div className="flex flex-col gap-6 justify-center p-3 items-center">
            <div className="flex gap-4 items-center">
              <p>Call Us</p>
              <div className="flex items-center">
                <BsFillTelephoneFill />
                <p className="ml-2">+91 9650771730</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row text-2xl gap-4 items-center">
                <p className="">Follow us at</p>
                <div className="flex gap-4">
                  <Link
                    to={
                      "https://api.whatsapp.com/send/?phone=918318520053&text&type=phone_number&app_absent=0"
                    }
                    rel="noreferrer"
                    target="_blank"
                    className="hover:bg-green-600"
                  >
                    <BsWhatsapp />
                  </Link>
                  <Link
                    to={"https://www.youtube.com/@itaxeasy1171"}
                    rel="noreferrer"
                    target="_blank"
                    className="hover:bg-red-600"
                  >
                    <BsYoutube />
                  </Link>
                  <Link
                    to={"https://www.instagram.com/_itax_easy"}
                    rel="noreferrer"
                    target="_blank"
                    className="hover:bg-pink-600"
                  >
                    <BsInstagram />
                  </Link>
                  <Link
                    to={"https://www.facebook.com/sonaliitax"}
                    rel="noreferrer"
                    target="_blank"
                    className="hover:bg-blue-600"
                  >
                    <BsFacebook />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <ul className="gap-4 flex flex-col items-center">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-120}
                  className="hover:-text--clr-accent-400 py-2 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  offset={-120}
                  className="hover:-text--clr-accent-400 p-2 cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="journey"
                  smooth={true}
                  duration={500}
                  offset={-120}
                  className="hover:-text--clr-accent-400 p-2 cursor-pointer"
                >
                  Journey
                </Link>
              </li>
              <li>
                <Link
                  to="career"
                  smooth={true}
                  duration={500}
                  offset={-120}
                  className="hover:-text--clr-accent-400 p-2 cursor-pointer"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-120}
                  className="hover:-text--clr-accent-400 p-2 cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-120}
                  className="hover:-text--clr-accent-400 p-2 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 justify-center items-center p-6">
            <p>Get in Touch to get more updates.</p>
            <div className="flex flex-col items-center">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="py-3 px-4 -text--clr-neutral-900 rounded-full indent-3"
              />
              <button className="mt-8 max-w-max px-4 py-2 rounded-full -bg--clr-primary-400 uppercase bg-fuchsia-700 tracking-tighter">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
