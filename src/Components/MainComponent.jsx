import React from "react";
import AboutUsSection from "./AboutUsSection";
import BannerSection from "./BannerSection";
import CareerSection from "./CareerSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
import JourneySection from "./JourneySection";
import NavBar from "./NavBar";
import ServicesCard from "./ServicesCard";
import SocialContacts from "./SocialContacts";

const MainComponent = () => {
  return (
    <>
      <div className="-text--clr-primary-400 max-w-6xl mx-auto overflow-hidden">
        <NavBar />
        <BannerSection />
        <ServicesCard />
        <JourneySection />
        <CareerSection />
        <AboutUsSection />
      </div>
        <ContactSection />
        <SocialContacts  />
        <FooterSection />
    </>
  );
};

export default MainComponent;
