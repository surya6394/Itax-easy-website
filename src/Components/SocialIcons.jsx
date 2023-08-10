import React from "react";
import {FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialIcons = () => {
  return (
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
        <FaYoutubeSquare size={35} className="inline-block"/>
      </Link>

      {/* Instagram */}
      <Link
        to="https://www.instagram.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 py-2 rounded-md text-white font-semibold hover:bg-pink-600 transition-all"
        onMouseOver={({ target }) => (target.style.color = "#DC143C")}
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
        onMouseOver={({ target }) => (target.style.color = "#1877f2")}
        onMouseOut={({ target }) => (target.style.color = "white")}
      >
        <FaFacebookSquare size={35} className="inline-block" />
      </Link>
    </div>
  );
};

export default SocialIcons;
