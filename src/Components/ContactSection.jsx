import React from "react";
import { Link } from "react-router-dom";
import { Link as A } from "react-scroll";
import image from "../images/itax_logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import SocialIcons from "./SocialIcons";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const ContactSection = () => {
  const phoneNumber = "8770877270";
  const handlePhoneNumberClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <section
        className="-bg--clr-neutral-900 py-10 font-serif -text--clr-accent-100 px-10"
        id="contact"
      >
        <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-center">
          <div className="flex flex-col gap-6 pl-10 pt-10 justify-center p-3">
            <div>
              <Link to="/">
                <img src={image} alt="" width="30%" />
              </Link>
              <p className="text-lg mt-5">
                Discover innovative technology solutions tailored to elevate
                your business to new heights.Your Vision, Our IT Expertise.
                Elevate Your Business with US. Innovate, Transform, Succeed
              </p>
            </div>
            <hr className="border-1 ml-2 mt-5" width="80%" />
            <div className="flex gap-4">
              <p>Call Us :-</p>
              <div className="flex">
                <BsFillTelephoneFill size={25} className="pt-1" />
                <p className="ml-2 font-sans" onClick={handlePhoneNumberClick}>
                  {phoneNumber}
                </p>
              </div>
            </div>
            <div></div>
          </div>

          <div className="flex flex-col lg:pl-12">
            <h2 className="flex text-xl font-bold pt-10 pb-7 justify-center font-sans">
              <span className="border-b-2 -border--clr-accent-200">Off</span>ice
            </h2>
            <div className="pl-10">
              <h2 className="font-bold text-lg">Main Branch:-</h2>
              <address class="text-sm">
                G - 41, Gandhi Nagar, <br />
                Near Defence Colony,Padav Gwalior
                <br />
                474002 (M.P)
              </address>
            </div>
            <div className="pl-10 pt-4">
              <h2 className="font-bold text-lg">Second Branch:-</h2>
              <address class="text-sm">
                Sat 1 ,Flat - 811,
                <br />
                Logix Zest Blossom, Sector 143,
                <br />
                Noida 201306 ( U.P)
              </address>
            </div>
            <hr className="border-1 lg:ml-6 ml-12 mt-5" width="60%" />
            <div className="flex mt-5 lg:pl-5 pl-12 relative">
              <AiFillMail size={26} />
              <a className="pl-2" href="mailto:support@itaxeasy.com">
                support@itaxeasy.com
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="flex text-xl font-bold py-10 justify-center font-sans">
              <span className="border-b-2 -border--clr-accent-200">Quic</span>k
              Access
            </h2>
            <ul className="gap-4 flex flex-col items-center">
              <li>
                <Link
                  to="home"
                  smooth
                  duration={500}
                  offset={-120}
                  className="hover:-text--clr-accent-200 py-2 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth
                  duration={500}
                  offset={-120}
                  className="hover:-text--clr-accent-200 p-2 cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="journey"
                  smooth
                  duration={500}
                  offset={-120}
                  className="hover:-text--clr-accent-200 p-2 cursor-pointer"
                >
                  Journey
                </Link>
              </li>
              <li>
                <Link
                  to="career"
                  smooth
                  duration={500}
                  offset={-120}
                  className="hover:-text--clr-accent-200 p-2 cursor-pointer"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth
                  duration={500}
                  offset={-120}
                  className="hover:-text--clr-accent-200 p-2 cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth
                  duration={500}
                  offset={-120}
                  className="hover:-text--clr-accent-200 p-2 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  smooth
                  duration={500}
                  offset={-120}
                  className="hover:-text--clr-accent-200 p-2 cursor-pointer"
                >
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col pr-10">
            <h2 className="flex text-xl font-bold pt-10 pb-7 justify-center font-sans">
              <span className="border-b-2 -border--clr-accent-200">Get i</span>n
              Touch
            </h2>
            <div className="flex flex-col gap-6 justify-center items-center">
              <div className="flex flex-col items-center">
                <tr className="grid">
                  <td>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="py-2 px-4 -text--clr-neutral-900 rounded-lg indent-3"
                    />
                  </td>
                  <td>
                    <button className="mt-1 px-3 py-2 ml-1 rounded-lg -bg--clr-pink-500 hover:-bg--clr-pink-600 bg-fuchsia-700 tracking-tighter">
                      Get Started
                    </button>
                  </td>
                </tr>
              </div>
              <hr className="border-1 ml-5 mt-5" width="70%" />
              <div className="flex flex-col md:flex-row text-lg gap-4 items-center">
                <p className="">Follow us on: </p>
                {/* <SocialIcons /> */}
                <div className="flex justify-center space-x-4">
                  {/* WhatsApp */}
                  <Link
                    to="https://wa.me/your-whatsapp-number"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 py-2 rounded-md text-white font-semibold hover:bg-green-600 transition-all"
                    onMouseOver={({ target }) => (target.style.color = "green")}
                    onMouseOut={({ target }) => (target.style.color = "white")}
                  >
                    <FaWhatsappSquare size={35} className="inline-block" />
                  </Link>

                  {/* YouTube */}
                  <Link
                    to="https://www.youtube.com/your-channel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500 py-2 rounded-md text-white font-semibold hover:bg-red-600 transition-all"
                    onMouseOver={({ target }) => (target.style.color = "red")}
                    onMouseOut={({ target }) => (target.style.color = "white")}
                  >
                    <FaYoutubeSquare size={35} className="inline-block" />
                  </Link>

                  {/* Instagram */}
                  <Link
                    to="https://www.instagram.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500 py-2 rounded-md text-white font-semibold hover:bg-pink-600 transition-all"
                    onMouseOver={({ target }) =>
                      (target.style.color = "#DC143C")
                    }
                    onMouseOut={({ target }) => (target.style.color = "white")}
                  >
                    <FaInstagramSquare size={35} className="inline-block" />
                  </Link>

                  {/* Facebook */}
                  <Link
                    to="https://www.facebook.com/your-page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 py-2 rounded-md text-white font-semibold hover:bg-blue-600 transition-all"
                    onMouseOver={({ target }) =>
                      (target.style.color = "#1877f2")
                    }
                    onMouseOut={({ target }) => (target.style.color = "white")}
                  >
                    <FaFacebookSquare size={35} className="inline-block" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
