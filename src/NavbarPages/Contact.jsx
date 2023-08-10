import React from "react";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import SocialIcons from "../Components/SocialIcons";

function Contact() {
  const phoneNumber = "8770877270";
  const handlePhoneNumberClick = () => {
    winndow.location.href = `tel:${phoneNumber}`;
  };

  // const FormExample = () => {
  //   const [formData, setFormData] = useState({
  //     name: '',
  //     email: '',
  //     message: '',
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // You can perform your form submission logic here
  //     console.log('Form data submitted:', formData);
  //   };

  return (
    <div>
      <div
        className="flex bg-about-banner flex-col items-center bg-no-repeat bg-center
           bg-cover -mt-12 bg-auto h-96 justify-center text-center"
      >
        <h1 className="text-6xl font-bold drop-shadow-lg shadow-black">
          <span className="-text--clr-accent-200">Co</span>ntact Us
        </h1>
        <p className="text-xl font-semibold drop-shadow-lg shadow-black mt-1 font-mono">
          Connect with Our Team
        </p>
      </div>

      <div className="py-10 -bg--clr-green-300">
        <div className="text-center my-12 drop-shadow-lg">
          <h1 className="text-3xl font-bold ">
            Connect <span className="-text--clr-accent-200">wi</span>th Our Team
          </h1>
          <div className="flex justify-center">
            <p className="text-lg text-center font-semibold drop-shadow-sm md:text-2xl w-2/3 leading-tight mt-6 mx-12 -text--clr-gray-500">
              We are thrilled to hear from you! Whether you have inquiries about
              our services, want to explore potential collaborations, or require
              any assistance, our dedicated team is here to help. Feel free to
              reach out to us using the contact form below or directly via email
              or phone. We are eager to start the conversation and discover how
              we can support you in achieving your goals.
            </p>
          </div>
        </div>

        {/* Contact Form */}

        <div className="flex w-full min-h-screen justify-center items-center ">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 -bg--clr-cyan-700 w-full max-w-6xl p-8 sm:mx-2 md:mx-4 lg:mx-0 sm:p-12 rounded-xl shadow-lg -text--clr-neutral-200 overflow-hidden">
            <div className="flex flex-col space-y-8 justify-between">
              <div>
                <h1 className="font-bold text-4xl tracking-wide">
                  Get In Touch
                </h1>
                <p className="pt-2 -text--clr-cyan-100 text-l">
                  We are eager to hear from you! Whether you have questions
                  about our services, want to discuss potential collaboration,
                  or simply need assistance, our team is ready to assist. Fill
                  out the form below or reach out to us directly via email or
                  phone.
                </p>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="inline-flex space-x-2 items-center ">
                  <AiFillPhone className="-text--clr-teal-300 text-xl" />
                  <p onClick={handlePhoneNumberClick}>{phoneNumber}</p>
                </div>
                <div className="inline-flex space-x-2 items-center ">
                  <AiFillMail className="-text--clr-teal-300 text-xl" />
                  <a href="mailto:support@itaxeasy.com">support@itaxeasy.com</a>
                </div>
                <div className="inline-flex space-x-2 items-center ">
                  <FaMapMarkerAlt className="-text--clr-teal-300 text-xl" />
                  <p>
                    G - 41, Gandhi Nagar, Near Defence
                    <br /> Colony,Padav Gwalior 474002 (M.P)
                  </p>
                </div>
              </div>
              <div className="flex space-x-4 text-lg">
                <SocialIcons />
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-0 w-40 h-40 -bg--clr-teal-300 rounded-full -right-28 -top-28"></div>
              <div className="absolute z-0 w-40 h-40 -bg--clr-teal-300 rounded-full -left-28 -bottom-16"></div>

              <div className="relative z-1 -bg--clr-neutral-200 rounded-lg shadow-lg p-8 -text--clr-gray-500 md:w-96">
                <form action="" className="flex flex-col space-y-4">
                  <div>
                    <label htmlFor="" className="text-md">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="ring-1 -ring--clr-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:-ring--clr-teal-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-md">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="ring-1 -ring--clr-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:-ring--clr-teal-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-md">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="ring-1 -ring--clr-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:-ring--clr-teal-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-md">
                      Message
                    </label>
                    <textarea
                      placeholder="Type Your Message Here"
                      rows="4"
                      className="ring-1 -ring--clr-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:-ring--clr-teal-300"
                    ></textarea>
                  </div>
                  <button className="inline-block -bg--clr-cyan-700 -text--clr-neutral-200 font-bold rounded-md px-6 py-2 uppercase text-md">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* end 2 */}
      </div>

      <div className="flex flex-col justify-center items-center mt-16 text-4xl">
        <h1 className="md:text-4xl text-3xl font-bold drop-shadow-lg shadow-black">
        Reach <span className="-text--clr-accent-200">Ou</span>t Using Maps
          </h1>
        </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center my-14 md:pl-28 ml-12">
          <div>
            <div className="flex flex-col justify-center">
              <div>
                <h1 className="md:text-3xl text-2xl font-bold tracking-wide mb-4">
                  Main Branch
                </h1>
                <p className="text-lg mb-6">
                  G - 41, Gandhi Nagar, Near Defence
                  <br /> Colony, Padav Gwalior 474002 (M.P)
                </p>
              </div>
            </div>
            <div>
              <iframe
                className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-3/4 lg:mb-0 mb-12"
                width="700"
                height="400"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=G%20-%2041,%20Gandhi%20Nagar,%20Near%20Defence%20Colony,Padav%20Gwalior%20474002%20(M.P)+(iTax%20Easy)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/population/">
                  Population Estimator map
                </a>
              </iframe>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center">
              <div>
                <h1 className="md:text-3xl text-2xl font-bold tracking-wide mb-4">
                  Second Branch
                </h1>
                <p className="text-lg mb-6">
                Sat 1 ,Flat - 811, Logix Zest Blossom, 
                  <br /> Sector 143, Noida 201306 ( U.P)
                </p>
              </div>
            </div>
            <div>
              <iframe
                className=" shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-3/4"
                width="700"
                height="400"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sat%201%20,Flat%20-%20811,%20Logix%20Zest%20Blossom,%20Sector%20143,%20Noida%20201306%20(%20U.P)+(iTax%20Easy)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/population/">
                  Population calculator map
                </a>
              </iframe>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Contact;
