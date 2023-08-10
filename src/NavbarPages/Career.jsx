import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Career() {
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
    <div>
      <div className="flex bg-about-banner flex-col items-center bg-no-repeat bg-center bg-cover bg-auto h-96 -mt-12 justify-center text-center">
        <h1 className="text-6xl font-bold drop-shadow-lg shadow-black">
          <span className="-text--clr-accent-200">Ca</span>reer
        </h1>
        <p className="text-xl font-semibold drop-shadow-lg shadow-black mt-1 font-mono">
          Discover Opportunities at Itax Solutions
        </p>
      </div>

    <div>
      <div className="items-center py-12 ">
        <h1 className="text-3xl text-center font-bold leading-tight mt-10 mx-12 -text--clr-gray-500">Make a lasting impact on the future of work.</h1>
        <div className="flex justify-center">
          <p className="text-center text-xl w-3/4 text-md mt-3 font-serif">At <span className="-text--clr-accent-200">i</span>Tax Solutions, we believe in building a strong team of passionate individuals who are dedicated to making a difference. We are committed to providing a collaborative and inclusive work environment that fosters creativity, innovation, and growth.</p>
        </div>
      </div>
    </div>

      <div className="flex justify-center lg:w-2/4 lg:ml-96 md:mx-10 -mx-36 pb-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="formName"
          className="px-2 w-1/2 overflow-hidden md:w-full py-10 md:px-12 [&_label]:text-xl shadow-xl bg-gradient-to-r -from--clr-accent-400 -to--clr-primary-400 md:[&_input]:p-3 [&_input]:py-2 [&_input]:outline-none [&_input]:border-b-2 [&_input]:-border--clr-neutral-100 [&_input]:indent-1 flex -text--clr-neutral-100 [&_input]:-text--clr-neutral-100 gap-5 flex-col"
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
                className="focus:outline-none sm:w-40 bg-gradient-to-r -from--clr-accent-400 -to--clr-primary-400 -text--clr-neutral-100 file:border-0 file:-bg--clr-neutral-100 file:rounded file:-text--clr-neutral-900 focus:-border--clr-neutral-900"
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
      </div>
    </div>
  );
}

export default Career;
