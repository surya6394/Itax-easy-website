import React from "react";
import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";
import MainComponent from "./Components/MainComponent";
import AdminLogin from "./Components/AdminLogin";
import AddCard from "./Components/CardPage/AddCard";
import NavBar from "./Components/NavBar";
import ContactSection from "./Components/ContactSection";
import FooterSection from "./Components/FooterSection";
import About from "./NavbarPages/About";
import Services from "./NavbarPages/Services";
import Journey from "./NavbarPages/Journey";
import Career from "./NavbarPages/Career";
import Contact from "./NavbarPages/Contact";



function App() {
  return (
    <>
      
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/showdoc" element={<AddCard />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact/>}/>
          {/* <PrivateRoute path="/showdoc" element={<AddCard />} /> */}
        </Routes>
        <ContactSection />
      </BrowserRouter>
      
      
      <FooterSection />
    </>
  );
}

function PrivateRoute({ element }) {
  const navigate = useNavigate();

  // Check if the user is authenticated or has a valid token
  const isAuthenticated =
    !!localStorage.getItem("email") && !!localStorage.getItem("password");

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return <Route element={element} />;
}

export default App;
