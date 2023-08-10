import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import image from "../images/hiring.png";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CareerSection = () => {
  return (
    <>
      <div id="career">
        <div className="bg-custom-image bg-no-repeat bg-center bg-cover bg-auto ">
          <h1 className="lg:text-5xl text-2xl pt-10 font-bold md:text-5xl text-center">
            Career With Us
          </h1>
          <div className="grid gap-4 md:grid-cols-2 items-center my-4 lg:my-10">
            <div className="flex flex-col items-center gap-8 text-center">
              <h1 className="lg:text-5xl text-3xl md:text-5xl font-bold">
                Join our team at <br />
                <span className="-text--clr-accent-200 text-4xl">i</span>
                <span className="text-4xl">Tax Easy</span>
              </h1>
              <p className="text-2xl px-12 font-serif">
                Work around awesome people and achieve milestones with us.
              </p>
              <Link
                to="careerForm"
                smooth
                duration={500}
                className="py-4 w-max cursor-pointer font-bold px-10 -text--clr-neutral-100 rounded-lg -bg--clr-pink-500 hover:-bg--clr-pink-600"
              >
                Fill out our form
              </Link>
            </div>
            <div className="grid place-items-center">
              <img src={image} alt="" className="w-100 bg-repeat-none" />
            </div>
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
  const [success, setSuccess] = useState(true);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    let maxlimit = 102400;
    const file = data.cv[0];

    let size = file.size;
    let type = file.type;

    if (!file) {
      throw new Error("Resume is required.");
    }

    if (size > maxlimit && type !== "application/pdf") {
      throw new Error("Only Pdf File Accetped and Should be less than 100 kb.");
    }
    setSuccess(false);
    setMessage("");
    setLoading(true);
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("skills", data.skills);
    formData.append("gender", data.gender);
    formData.append("email", data.email);
    formData.append("pin", data.pin);
    formData.append("address", data.address);
    formData.append("mobile", data.mobile);
    formData.append("cv", data.cv[0]);

    console.log(formData);

    const token = import.meta.env.VITE_APP_TOKEN;
    const myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    const res = await fetch(
      import.meta.env.VITE_APP_CREATE_JOB + "/career/application/apply",
      {
        method: "POST",
        headers: myHeaders,
        body: formData,
      }
    );
    const json = await res.json();
    console.log(json);
    if (!res.ok) {
      setSuccess(false);
    } else {
      setSuccess(true);
    }
    toast("Form Submitted Succefully", {
      type: "success",
    });
    setMessage(json.msg);
    setLoading(false);
  };

  return (
    <>
      <div
        className="px-1 grid md:grid-cols-2 lg:gap-0 gap-2 md:py-5"
        id="careerForm"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="formName"
          className="px-3 overflow-hidden md:w-full w-11/12 mx-auto py-10 md:px-12 [&_label]:text-xl shadow-xl bg-gradient-to-r -from--clr-accent-400 -to--clr-primary-400 md:[&_input]:p-3 [&_input]:py-2 [&_input]:outline-none [&_input]:border-b-2 [&_input]:-border--clr-neutral-100 [&_input]:indent-1 flex -text--clr-neutral-100 [&_input]:-text--clr-neutral-100 gap-5 flex-col"
        >
          <h1 className="text-3xl font-semibold md:text-4xl text-center my-3">
            Application
          </h1>
          <div className="flex flex-col relative">
            <input
              type="text"
              name="name"
              placeholder="Name"
              id="name"
              className="shadow-sm p-1 bg-gradient-to-r -from--clr-accent-400 -to--clr-primary-400 -border--clr-neutral-900"
              {...register("name", { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name?.type === "required" && (
              <p className="-text--clr-accent-250" role="alert">
                Name is required
              </p>
            )}
          </div>

          <div className="flex flex-col relative">
            <input
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              className="shadow-sm p-1 bg-gradient-to-r -from--clr-accent-400 -to--clr-primary-400"
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email?.type === "required" && (
              <p className="-text--clr-accent-250" role="alert">
                Email is required
              </p>
            )}
          </div>

          <div className="flex flex-col relative">
            <input
              type="text"
              name="skills"
              id="skills"
              placeholder="Your skills"
              className="shadow-sm bg-gradient-to-r -from--clr-accent-400 -to--clr-primary-400 p-1"
              {...register("skills", { required: true })}
              aria-invalid={errors.skills ? "true" : "false"}
            />
            {errors.skills?.type === "required" && (
              <p className="-text--clr-accent-250" role="alert">
                Mention your skills
              </p>
            )}
          </div>

          <div className="flex flex-col relative">
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              className="shadow-sm bg-gradient-to-r -from--clr-accent-400 -to--clr-primary-400 p-1"
              {...register("address", { required: true })}
              aria-invalid={errors.address ? "true" : "false"}
            />
            {errors.address?.type === "required" && (
              <p className="-text--clr-accent-250" role="alert">
                Address is required
              </p>
            )}
          </div>

          <div className="flex gap-3 justify-between">
            <div className="w-2/4">
              <input
                type="text"
                placeholder="Address Pin Code"
                className="w-full bg-gradient-to-r -from--clr-accent-400 -to--clr-primary-400"
                {...register("pin", { required: true })}
                aria-invalid={errors.address ? "true" : "false"}
              />
              {errors.address?.type === "required" && (
                <p className="-text--clr-accent-250" role="alert">
                  PIN Code is required
                </p>
              )}
            </div>
            <div className="flex w-2/4 flex-col relative">
              <input
                type="text"
                name="mobile"
                placeholder="Phone"
                id="moblie"
                className="shadow-sm bg-gradient-to-r -from--clr-accent-400 -to--clr-primary-400 p-1"
                {...register("mobile", { required: true })}
                aria-invalid={errors.mobile ? "true" : "false"}
              />
              {errors.mobile?.type === "required" && (
                <p className="-text--clr-accent-250" role="alert">
                  Contact number is required
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:[&>div]:basis-1/2 items-center lg:flex-row ">
            <div className="flex w-full mx-2">
              <p className="mr-2 text-lg">Gender :</p>
              <select
                className="py-2 [&>option]:-bg--clr-neutral-100 [&>option]:-text--clr-neutral-900 bg-gradient-to-r -from--clr-accent-400 -to--clr-primary-400 px-5"
                name="gender"
                id="gender"
                {...register("gender", { required: true })}
                aria-invalid={errors.gender ? "true" : "false"}
              >
                <option selected disabled hidden>
                  ---Select---
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
              {errors.gender?.type === "required" && (
                <p className="-text--clr-accent-250" role="alert">
                  Mention your gender
                </p>
              )}
            </div>

            <div className="flex w-full items-center [&_label]:text-xl">
              <p className="mr-2 text-lg">Role :</p>
              <select
                name="role"
                className="py-2 [&>option]:-bg--clr-neutral-100 [&>option]:-text--clr-neutral-900 bg-gradient-to-r -from--clr-accent-400 -to--clr-primary-400 px-5"
                id="role"
                {...register("role", { required: true })}
                aria-invalid={errors.role ? "true" : "false"}
              >
                <option selected disabled hidden>
                  --Select--
                </option>
                <option value="job">Job</option>
                <option value="internship">Internship</option>
              </select>
              {errors.role?.type === "required" && (
                <p className="-text--clr-accent-250" role="alert">
                  Select a role
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <label htmlFor="name">Resume :</label>
            </div>
            <div>
              <input
                type="file"
                name="cv"
                id="name"
                className="focus:outline-none sm:w-60 bg-gradient-to-r -from--clr-accent-400 -to--clr-primary-400 -text--clr-neutral-100 file:border-0 file:-bg--clr-neutral-100 file:rounded file:-text--clr-neutral-900 focus:-border--clr-neutral-100"
                {...register("cv", { required: true })}
                aria-invalid={errors.cv ? "true" : "false"}
              />
              {errors.cv?.type === "required" && (
                <p className="-text--clr-accent-250" role="alert">
                  CV / Resume is required
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-2 justify-center [&>*]:mr-2"></div>
          <button
            type="submit"
            name="submit"
            disabled={loading}
            id="submit"
            className="py-3 border-none cursor-pointer font-bold px-10 -text--clr-neutral-900 rounded-lg -bg--clr-neutral-100"
          >
            {loading ? (
              <span className="inline-block w-5 h-5 border-2 border-t-2 border-l-2 border-b-0 border-r-0 rounded-full animate-spin"></span>
            ) : (
              "Submit"
            )}
          </button>
          <button
            type="reset"
            form="formName"
            name="reset"
            id="submit"
            className="py-3 border-none cursor-pointer font-bold px-10 -text--clr-neutral-100 rounded-lg -bg--clr-accent-200"
          >
            Reset
          </button>
          {message && (
            <p
              className={`text-center font-bold mt-2 ${
                success ? "-text--clr-accent-150" : "-text--clr-accent-250"
              }`}
            >
              {message}.
            </p>
          )}
        </form>

        <div className="flex justify-center shadow-xl">
          <div className="px-12 py-10">
            <h2 className="text-3xl md:text-4xl">
              <span className="border-b-4 -border--clr-accent-200">Con</span>
              tact us
            </h2>
            <div className="text-lg flex my-4 [&>div]:flex [&>div]:items-center [&>div]:gap-5 flex-col gap-12">
              <p className="mt-8">
                We're open for any suggestion or any query..
              </p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>
                  G - 41, Gandhi Nagar, Near Defence Colony,Padav Gwalior 474002
                  (M.P)
                </p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>8770877270</p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <p>support@itaxeasy.com</p>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>https://itaxeasy.com/</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


