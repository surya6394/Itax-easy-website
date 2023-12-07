import React from "react";
import { BsArrowUp } from "react-icons/bs";
import { Link } from "react-scroll";
import ContactSection from "./ContactSection";
import SocialContacts from "./SocialContacts";

const FooterSection = () => {
  return (
    <>
      <section className="-bg--clr-primary-400 p-4 font-serif -text--clr-neutral-100">
        <div className="flex flex-col text-xl gap-4 items-center p-4">
          <p className="text-center px-1 text-2xl font-bold ">
            "Transforming Visions into Reality. Explore our solutions today."
          </p>
        </div>
        <div className="text-center [&>*]:my-2">
          <p>@2023 Itaxesay. All Rights Reserved.</p>
          <a href="/" className="block">
            Privacy Policy
          </a>
          <a href="/" className="block">
            Terms & Conditions
          </a>
        </div>
        <div
          className="hover:-bg--clr-accent-200 -bg--clr-neutral-900 w-12 h-12 p-2 pt-3 rounded-full fixed bottom-3 group right-4"
          title="Go To Top"
        >
          <Link to={"home"} smooth duration={500} offset={-120}>
            <BsArrowUp className="group-hover:animate-bounce w-full h-full" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default FooterSection;
