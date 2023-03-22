import React from "react";
import { Link } from "react-router-dom";
import { BsWhatsapp, BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";

const SocialContacts = () => {
  return (
    <>
      <div
        className="fixed hidden md:block top-1/3 z-10
     [&_a]:p-2 [&_a]:block -text--clr-neutral-100 -bg--clr-primary-400 rounded-r-xl"
      >
        <Link
          to={
            "https://api.whatsapp.com/send/?phone=918318520053&text&type=phone_number&app_absent=0"
          }
          rel="noreferrer"
          target="_blank"
          className="rounded-tr-xl"
          onMouseOver={({ target }) => (target.style.color = "green")}
          onMouseOut={({ target }) => (target.style.color = "white")}
        >
          <BsWhatsapp size={20} pointerEvents="none" />
        </Link>
        <Link
          to={"https://www.youtube.com/@itaxeasy1171"}
          rel="noreferrer"
          target="_blank"
          onMouseOver={({ target }) => (target.style.color = "red")}
          onMouseOut={({ target }) => (target.style.color = "white")}
        >
          <BsYoutube size={20} pointerEvents="none" />
        </Link>
        <Link
          to={"https://www.instagram.com/_itax_easy"}
          rel="noreferrer"
          target="_blank"
          onMouseOver={({ target }) => (target.style.color = "#DC143C")}
          onMouseOut={({ target }) => (target.style.color = "white")}
        >
          <BsInstagram size={20} pointerEvents="none" />
        </Link>
        <Link
          to={"https://www.facebook.com/sonaliitax"}
          rel="noreferrer"
          target="_blank"
          className="rounded-br-xl"
          onMouseOver={({ target }) => (target.style.color = "#1877f2")}
          onMouseOut={({ target }) => (target.style.color = "white")}
        >
          <BsFacebook size={20} pointerEvents="none" />
        </Link>
      </div>
    </>
  );
};

export default SocialContacts;
