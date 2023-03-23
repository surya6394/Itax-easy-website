import React, {useState} from "react";
const { register, formState: { errors }, handleSubmit } = useForm();

const CareerForm = () => {  
  const data = [
    {
      name,
      address,
      pin,
      email,
      mobile,
      skills,
      gender,
      cv,
    },
  ];

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="pb-5 grid place-items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" [&>div]:m-2 [&_div]:text-lg w-3/4 md:w-1/2 [&_label]:font-semi [&_label]:text-lg [&_input]:rounded [&_input]:border-2 [&_input]:border-white [&_input]:outline-none "
        >
          <h1 className="text-3xl md:text-5xl text-center my-5 text-fuchsia-700">
            Application
          </h1>

          <div className="flex flex-col ">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              name=""
              id="name"
              placeholder="Enter Your Full Name"
              className="shadow-sm p-1 focus:border-fuchsia-700"
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
              className="shadow-sm p-1 focus:border-fuchsia-700"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone">Contact Number :</label>
            <input
              type="number"
              name=""
              id="phone"
              placeholder="Mobile Number"
              className="shadow-sm p-1 focus:border-fuchsia-700"
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
              className="shadow-sm p-1 focus:border-fuchsia-700"
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
              className="shadow-sm p-1 focus:border-fuchsia-700"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col md:flex-row ">
            <p className="text-fuchsia-900 mr-2">Gender :</p>

            <div className="flex flex-row">
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
            <p className="text-fuchsia-900 mr-2">Apply For :</p>

            <div className="flex">
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
              className="focus:outline-none file:border-0 file:bg-fuchsia-200 file:rounded file:text-fuchsia-900 border-2 shadow-sm border-fuchsia-50 p-1 pl-2 bg-white focus:border-fuchsia-700"
              onChange={(e) => {
                setResume(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center [&>*]:w-full">
            <input
              type="submit"
              name=""
              id="name"
              className="text-lg shadow-sm p-2 md:mr-1 mt-2 bg-green-500 hover:bg-green-700 border-fuchsia-700"
            />
            <input
              type="reset"
              name=""
              id="name"
              className="text-lg shadow-sm p-2 md:ml-1 mt-2 bg-red-500 hover:bg-red-700"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default CareerForm;
