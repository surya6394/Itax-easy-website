import React, { useState } from "react";
import logo from "../images/itax_logo.png";
import { Link } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import { BsWhatsapp, BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const phoneNumber = "8770877270";
  const handlePhoneNumberClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <div className="md:border-0 sm:appearance-none top-nav px-12 z-10 -bg--clr-blue-200">
        <nav className="flex flex-col sm:flex-row gap-2 py-4 items-center sm:pl-4 relative -text--clr-neutral-200">
          <div className="flex items-center gap-2 ">
            <AiFillMail size={20} />
            <p>
              <a href="mailto:support@itaxeasy.com">support@itaxeasy.com</a>
            </p>
          </div>

          <div className="flex items-center gap-2 sm:mr-5">
            <AiFillPhone size={20} />
            <p onClick={handlePhoneNumberClick}>{phoneNumber}</p>
          </div>
          <div className="float-right hidden sm:block lg:pl-96">
            <div className="flex md:pl-40 gap-5 sm:ml-3 ">
              <Link
                to="https://api.whatsapp.com/send/?phone=918318520053&text&type=phone_number&app_absent=0"
                rel="noreferrer"
                target="_blank"
                className="rounded-tr-xl"
                onMouseOver={({ target }) => (target.style.color = "green")}
                onMouseOut={({ target }) => (target.style.color = "white")}
              >
                <BsWhatsapp size={20} pointerEvents="none" />
              </Link>
              <Link
                to="https://www.youtube.com/@itaxeasy1171"
                rel="noreferrer"
                target="_blank"
                className="rounded-tr-xl"
                onMouseOver={({ target }) => (target.style.color = "red")}
                onMouseOut={({ target }) => (target.style.color = "white")}
              >
                <BsYoutube size={20} pointerEvents="none" />
              </Link>
              <Link
                to="https://www.instagram.com/_itax_easy"
                rel="noreferrer"
                target="_blank"
                className="rounded-tr-xl"
                onMouseOver={({ target }) => (target.style.color = "#DC143C")}
                onMouseOut={({ target }) => (target.style.color = "white")}
              >
                <BsInstagram size={20} pointerEvents="none" />
              </Link>
              <Link
                to="https://www.facebook.com/sonaliitax"
                rel="noreferrer"
                target="_blank"
                className="rounded-tr-xl"
                onMouseOver={({ target }) => (target.style.color = "#1877f2")}
                onMouseOut={({ target }) => (target.style.color = "white")}
              >
                <BsFacebook size={20} pointerEvents="none" />
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div
        className={`${
          showDropdown ? "border-b-2" : ""
        } md:border-0 px-16 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] sticky top-0  z-10 -bg--clr-neutral-200`}
      >
        <nav className="flex justify-between py-6 items-center">
          <div>
            <Link to="/" smooth className="cursor-pointer">
              <img src={logo} alt="" className="w-20" />
            </Link>
          </div>
          <div>
            <ul className="gap-9 hidden md:flex font-bold">
              <li>
                <Link
                  to="/"
                  smooth
                  duration={500}
                  offset={-120}
                  className="hover:-text--clr-neutral-200 p-2 cursor-pointer hover:-bg--clr-accent-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  smooth
                  duration={500}
                  offset={-120}
                  className="hover:-text--clr-neutral-200 p-2 cursor-pointer hover:-bg--clr-accent-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  smooth
                  duration={500}
                  offset={-120}
                  className="hover:-text--clr-neutral-200 p-2 cursor-pointer hover:-bg--clr-accent-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/journey"
                  smooth
                  duration={500}
                  offset={-120}
                  className="hover:-text--clr-neutral-200 p-2 cursor-pointer hover:-bg--clr-accent-200"
                >
                  Journey
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  smooth
                  duration={500}
                  offset={-120}
                  className="hover:-text--clr-neutral-200 p-2 cursor-pointer hover:-bg--clr-accent-200"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  smooth
                  duration={500}
                  offset={-120}
                  className="hover:-text--clr-neutral-200 p-2 cursor-pointer hover:-bg--clr-accent-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button>
              <Link
                to="/"
                smooth
                duration={500}
                offset={-120}
                className="py-4 sm:mr-4 sm:ml-3 cursor-pointer font-bold px-10 -text--clr-neutral-200 rounded-lg hidden md:block -bg--clr-pink-500 hover:-bg--clr-pink-600 hover:-text--clr-neutral-100"
              >
                Contact
              </Link>
            </button>
          </div>
          <div className="block md:hidden -mr-6">
            <button
              className="flex items-center justify-center md:hidden "
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {showDropdown ? (
                <AiOutlineClose size={28} />
              ) : (
                <AiOutlineMenu size={28} />
              )}
            </button>
          </div>
        </nav>

        {/* mobile nav */}

        <div
          className={`flex flex-col md:hidden transition-all duration-300 ${
            showDropdown ? "h-80 overflow-auto" : "h-0 overflow-hidden"
          } mb-10`}
        >
          <ul className="gap-8 flex flex-col items-center">
            <li>
              <Link
                to="/"
                smooth
                duration={500}
                offset={-120}
                className="hover:-text--clr-accent-400 py-2 cursor-pointer"
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                smooth
                duration={500}
                offset={-120}
                className="hover:-text--clr-accent-400 p-2 cursor-pointer"
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                smooth
                duration={500}
                offset={-120}
                className="hover:-text--clr-accent-400 p-2 cursor-pointer"
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/journey"
                smooth
                duration={500}
                offset={-120}
                className="hover:-text--clr-accent-400 p-2 cursor-pointer"
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
              >
                Journey
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                smooth
                duration={500}
                offset={-120}
                className="hover:-text--clr-accent-400 p-2 cursor-pointer"
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
              >
                Career
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                smooth
                duration={500}
                offset={-120}
                className="py-4 cursor-pointer mx-auto font-bold px-10 text--clr-neutral-100 rounded-full -bg--clr-accent-400 hover:-bg--clr-accent-200"
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;

// <div>
//             <img src={logo} alt="" className="w-24" />
//           </div>
//           <div
//             className={`${
//               showDropdown
//                 ? "block absolute top-24 right-0 w-fit md:static place-items-center md:w-[60%]"
//                 : "hidden"
//             } md:grid place-items-center w-[60%]`}
//           >
//             <ul
//               className={`${
//                 showDropdown
//                   ? "flex-col md:flex-row w-[100%] bg-fuchsia-700 rounded-bl-xl border-t-2 md:border-0 transition-all duration-1000 md:bg-transparent "
//                   : "right-40"
//               } flex md:flex-row w-[100%] [&_li]:mx-1 justify-around p-7 [&_li]:text-lg [&_li]:text-fuchsia-100 [&_li]:p-1 [&_li]:transition-all  `}
//             >
//               <li>
//                 <Link
//                   to={"home"}
//                   smooth={true}
//                   duration={500}
//                   offset={-120}
//                   className="hover:text-black -900 "
//                   onClick={() => {
//                     setShowDropdown(!showDropdown);
//                   }}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to={"about"}
//                   smooth={true}
//                   duration={500}
//                   offset={-120}
//                   className="hover:text-black -900 "
//                   onClick={() => {
//                     setShowDropdown(!showDropdown);
//                   }}
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to={"career"}
//                   smooth={true}
//                   duration={500}
//                   offset={-120}
//                   className="hover:text-black -900 "
//                   onClick={() => {
//                     setShowDropdown(!showDropdown);
//                   }}
//                 >
//                   Career
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to={"services"}
//                   smooth={true}
//                   duration={500}
//                   offset={-120}
//                   className="hover:text-black -900 "
//                   onClick={() => {
//                     setShowDropdown(!showDropdown);
//                   }}
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to={"jpurney"}
//                   smooth={true}
//                   duration={500}
//                   offset={-120}
//                   className="hover:text-black -900 "
//                   onClick={() => {
//                     setShowDropdown(!showDropdown);
//                   }}
//                 >
//                   Journey
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to={"contact"}
//                   smooth={true}
//                   duration={500}
//                   offset={-120}
//                   className="hover:text-black -900 "
//                   onClick={() => {
//                     setShowDropdown(!showDropdown);
//                   }}
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div
//             className={`md:hidden h-10 w-10 text-3xl grid text-white place-items-center font-semibold`}
//             onClick={() => {
//               setShowDropdown(!showDropdown);
//             }}
//           >
//             {showDropdown ? (
//               <AiOutlineClose className="h-10" />
//             ) : (
//               <AiOutlineMenu />
//             )}
//           </div>
