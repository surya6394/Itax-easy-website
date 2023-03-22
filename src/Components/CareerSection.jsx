import React, { useState } from "react";
import { Link } from "react-scroll";
import image from "../images/hire.png";

const CareerSection = () => {
  return (
    <>
      <div id="career">
        <h1 className="text-3xl font-bold md:text-5xl text-center">
          Career With Us
        </h1>
        <div className="grid gap-4 md:grid-cols-2 items-center my-20">
          <div className="flex flex-col items-center gap-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold">
              Join our team at <br />
              <span className="-text--clr-accent-200 text-4xl">i</span>
              <span className="text-4xl">Tax Easy</span>
            </h1>
            <p className="text-xl px-12">
              Work around awesome people and achieve milestones with us.
            </p>
            <Link
              to="careerForm"
              smooth={true}
              duration={500}
              className="py-4 w-max cursor-pointer font-bold px-10 -text--clr-neutral-100 rounded-full -bg--clr-accent-400 hover:-bg--clr-accent-200"
            >
              Fill out our form
            </Link>
          </div>
          <div className="mt-5 grid place-items-center">
            <img src={image} alt="" className="w-2/3" />
          </div>
        </div>
        <div>
          <ApplicationForm />
        </div>
      </div>
    </>
  );
};

export default CareerSection;

const ApplicationForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [skills, setSkills] = useState();
  const [address, setAddress] = useState();
  const [gender, setGender] = useState();
  const [role, setRole] = useState();
  const [resume, setResume] = useState();
  const [] = useState();

  const data = [
    {
      name: name,
      email: email,
      phone: phone,
      skills: skills,
      address: address,
      gender: gender,
      role: role,
      resume: resume,
    },
  ];

  const submitForm = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  return (
    <>
      <div className="mx-auto px-2 grid md:py-5 md:mx-32" id="careerForm">
        <form
          onSubmit={submitForm}
          className="-bg--clr-accent-100 p-3 md:px-12 [&>div]:my-2 [&_label]:text-2xl [&_label]:my-3 [&_input]:p-3 [&_input]:border [&_input]:-border--clr-neutral-900 [&_input]:indent-2 [&_input]:rounded-lg flex gap-3 flex-col rounded-lg"
        >
          <h1 className="text-3xl font-semibold md:text-5xl text-center my-5">
            Application
          </h1>
          <div className="flex flex-col ">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              name=""
              id="name"
              placeholder="Enter Your Full Name"
              className="shadow-sm p-1 -border--clr-neutral-900"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              name=""
              id="email"
              placeholder="Enter Your Email"
              className="shadow-sm p-1"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone">Contact Number :</label>
            <input
              type="text"
              name=""
              id="phone"
              placeholder="Mobile Number"
              className="shadow-sm p-1"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="skills">Skills :</label>
            <input
              type="text"
              name=""
              id="skills"
              placeholder="Your Slills"
              className="shadow-sm p-1"
              onChange={(e) => {
                setSkills(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="address">Address :</label>
            <input
              type="text"
              name=""
              id="address"
              placeholder="Your Current Address"
              className="shadow-sm p-1"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col md:flex-row ">
            <p className="mr-2 text-xl">Gender :</p>

            <div className="flex [&_label]:text-xl">
              <div className="mx-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  id="male"
                  className="mr-1"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="mx-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  id="female"
                  className="mr-1"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
                <label htmlFor="female">Female</label>
              </div>
              <div className="mx-2">
                <input
                  type="radio"
                  name="gender"
                  value="others"
                  id="others"
                  className="mr-1"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
                <label htmlFor="others">Others</label>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row ">
            <p className="mr-2 text-xl">Applying For :</p>

            <div className="flex [&_label]:text-xl">
              <div className="mx-2">
                <input
                  type="radio"
                  name="role"
                  value="job"
                  id="job"
                  className="mr-1"
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                />
                <label htmlFor="job">Job</label>
              </div>
              <div className="mx-2">
                <input
                  type="radio"
                  name="role"
                  value="internship"
                  id="internship"
                  className="mr-1"
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                />
                <label htmlFor="internship">Internship</label>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="name">Resume :</label>
            <input
              type="file"
              name=""
              id="name"
              className="focus:outline-none file:border-0 file:-bg--clr-neutral-100 file:rounded file:-text--clr-neutral-900 focus:-border--clr-neutral-900"
              onChange={(e) => {
                setResume(e.target.value);
              }}
            />
          </div>

          <div className="flex gap-2 justify-center [&>*]:mr-2">
            <button
              type="submit"
              name=""
              id="name"
              className="py-3 border-none cursor-pointer font-bold px-10 -text--clr-neutral-100 rounded-lg -bg--clr-accent-400 hover:-bg--clr-accent-200"
            >
              Submit
            </button>
            <button
              type="reset"
              name=""
              id="name"
              className="py-3 border-none cursor-pointer font-bold px-10 -text--clr-neutral-100 rounded-lg -bg--clr-accent-400 hover:-bg--clr-accent-200"
            >Reset</button>
          </div>
        </form>
      </div>
    </>
  );
};
