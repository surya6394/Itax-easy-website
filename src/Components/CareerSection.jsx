import React, {useState} from "react";
import { Link } from "react-scroll";
import image from "../images/hire.png";
import { useForm } from "react-hook-form";

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
              smooth
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
  const [success, setSuccess] = useState(true);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const token = import.meta.env.VITE_APP_TOKEN;
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Basic ${token}`);

    const res = await fetch(import.meta.env.VITE_APP_CREATE_JOB + '/career/application/apply', {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data)
    });
    const json = await res.json();

    if (res.ok) {
      setSuccess(true);
    } else {
      setSuccess(false)
    }
    setMessage(json.msg);
    setLoading(false);
  };

  return (
    <>
      <div className="mx-auto px-2 grid md:py-5 md:mx-32" id="careerForm">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="-bg--clr-accent-100 p-3 md:px-12 [&>div]:my-2 [&_label]:text-2xl [&_label]:my-3 [&_input]:p-3 [&_input]:border [&_input]:-border--clr-neutral-900 [&_input]:indent-2 [&_input]:rounded-lg flex gap-3 flex-col rounded-lg"
        >
          <h1 className="text-3xl font-semibold md:text-5xl text-center my-5">
            Application
          </h1>
          <div className="flex flex-col ">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Full Name"
              className="shadow-sm p-1 -border--clr-neutral-900"
              {...register("name", { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name?.type === "required" && (
              <p className="-text--clr-accent-250" role="alert">
                Name is required
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="shadow-sm p-1"
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email?.type === "required" && (
              <p className="-text--clr-accent-250" role="alert">
                Email is required
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone">Contact Number :</label>
            <input
              type="text"
              name="mobile"
              id="moblie"
              placeholder="Mobile Number"
              className="shadow-sm p-1"
              {...register("mobile", { required: true })}
              aria-invalid={errors.mobile ? "true" : "false"}
            />
            {errors.mobile?.type === "required" && (
              <p className="-text--clr-accent-250" role="alert">
                Contact number is required
              </p>
            )}
          </div>

          <div className="flex flex-col ">
            <label htmlFor="skills">Skills :</label>
            <input
              type="text"
              name=""
              id="skills"
              placeholder="Your Slills"
              className="shadow-sm p-1"
              {...register("skills", { required: true })}
              aria-invalid={errors.skills ? "true" : "false"}
            />
            {errors.skills?.type === "required" && (
              <p className="-text--clr-accent-250" role="alert">
                Mention your skills
              </p>
            )}
          </div>

          <div className="flex flex-col ">
            <label htmlFor="address">Address :</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Your Current Address"
              className="shadow-sm p-1"
              {...register("address", { required: true })}
              aria-invalid={errors.address ? "true" : "false"}
            />
            {errors.address?.type === "required" && (
              <p className="-text--clr-accent-250" role="alert">
                Address is required
              </p>
            )}
            <label htmlFor="pin">Address Pin Code :</label>
            <input
              type="number"
              {...register("pin", { required: true })}
              aria-invalid={errors.address ? "true" : "false"}
            />
            {errors.address?.type === "required" && (
              <p className="-text--clr-accent-250" role="alert">
                PIN Code is required
              </p>
            )}
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
                  {...register("gender", { required: true })}
                  aria-invalid={errors.gender ? "true" : "false"}
                />
                <label htmlFor="male">Male</label>
                {errors.gender?.type === "required" && (
                  <p className="-text--clr-accent-250" role="alert">
                    Gender is required
                  </p>
                )}
              </div>
              <div className="mx-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  id="female"
                  className="mr-1"
                  {...register("gender", { required: true })}
                  aria-invalid={errors.gender ? "true" : "false"}
                />
                <label htmlFor="female">Female</label>
                {errors.gender?.type === "required" && (
                  <p className="-text--clr-accent-250" role="alert">
                    Gender is required
                  </p>
                )}
              </div>
              <div className="mx-2">
                <input
                  type="radio"
                  name="gender"
                  value="others"
                  id="others"
                  className="mr-1"
                  {...register("gender", { required: true })}
                  aria-invalid={errors.gender ? "true" : "false"}
                />
                <label htmlFor="others">Others</label>
                {errors.gender?.type === "required" && (
                  <p className="-text--clr-accent-250" role="alert">
                    Gender is required
                  </p>
                )}
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
                  {...register("role", { required: true })}
                  aria-invalid={errors.role ? "true" : "false"}
                />
                <label htmlFor="job">Job</label>
                {errors.role?.type === "required" && (
                  <p className="-text--clr-accent-250" role="alert">
                    A role is required
                  </p>
                )}
              </div>
              <div className="mx-2">
                <input
                  type="radio"
                  name="role"
                  value="internship"
                  id="internship"
                  className="mr-1"
                  {...register("role", { required: true })}
                  aria-invalid={errors.gender ? "true" : "false"}
                />
                <label htmlFor="internship">Internship</label>
                {errors.role?.type === "required" && (
                  <p className="-text--clr-accent-250" role="alert">
                    A role is required
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="name">Resume :</label>
            <input
              type="file"
              name="cv"
              id="name"
              className="focus:outline-none file:border-0 file:-bg--clr-neutral-100 file:rounded file:-text--clr-neutral-900 focus:-border--clr-neutral-900"
              {...register("cv", { required: true })}
              aria-invalid={errors.cv ? "true" : "false"}
            />
            {errors.cv?.type === "required" && (
              <p className="-text--clr-accent-250" role="alert">
                CV / Resume is required
              </p>
            )}
          </div>

          <p className={`text-center ${success ? '-text--clr-accent-200':'-text--clr-accent-250'}`}>{message}</p>
          <div className="flex gap-2 justify-center [&>*]:mr-2">
            <button
              type="submit"
              name="submit"
              disabled={loading}
              id="name"
              className="py-3 border-none cursor-pointer font-bold px-10 -text--clr-neutral-100 rounded-lg -bg--clr-accent-400 hover:-bg--clr-accent-200"
            >
              Submit
            </button>
            <button
              type="reset"
              disabled={loading}
              name="reset"
              id="name"
              className="py-3 border-none cursor-pointer font-bold px-10 -text--clr-neutral-100 rounded-lg -bg--clr-accent-400 hover:-bg--clr-accent-200"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
