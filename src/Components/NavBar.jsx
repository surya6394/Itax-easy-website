import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <div className={`${showDropdown ? 'border-b-2': ''} md:border-0 -bg--clr-neutral-100 z-10`}>
        <nav className="flex justify-between py-8 items-center relative">
          <div>
            <img src={logo} alt="" className="w-20" />
          </div>
          <div>
            <ul className="gap-12 hidden md:flex">
              <li>
                <Link
                  to="home"
                  smooth
                  duration={500}
                  offset={-120}
                  className="hover:-text--clr-accent-200 p-2 cursor-pointer"
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
            </ul>
          </div>
          <div>
            <button>
              <Link
                to="contact"
                smooth
                duration={500}
                offset={-120}
                className="py-4 mr-4 ml-4 cursor-pointer font-bold px-10 -text--clr-neutral-100 rounded-full -bg--clr-accent-400 hidden md:block hover:-bg--clr-accent-200"
              >
                Contact
              </Link>
            </button>
          </div>
          <div className="block md:hidden p-4">
            <button
              className="flex items-center justify-center md:hidden p-2"
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

        <div className={`flex flex-col md:hidden transition-all duration-300 ${showDropdown ? 'h-80 overflow-auto':'h-0 overflow-hidden'} mb-10`}>
            <ul className="gap-8 flex flex-col items-center">
              <li>
                <Link
                  to="home"
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
                  to="services"
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
                  to="journey"
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
                  to="career"
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
                  to="about"
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
                  to="contact"
                  smooth
                  duration={500}
                  offset={-120}
                  className="py-4 cursor-pointer mx-auto font-bold px-10 -text--clr-neutral-100 rounded-full -bg--clr-accent-400 hover:-bg--clr-accent-200"
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
