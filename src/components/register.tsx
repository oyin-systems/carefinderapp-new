import React from "react";
import Image from "next/image";
import Header from "@components/header";

const SignUp = () => {
  return (
    <div>
      <Header />
      <section className="flex items-center justify-between h-[600px] w-full py-8 px-8 bg-[#E0E4EC]">
        <div className="relative w-[500px] h-[350px] outline-blue-950 outline-4 object-contain ml-20">
          <Image
            src="/images/signup.jpg"
            //   width={500}
            //   height={600}
            fill
            alt="Consultation"
            className="rounded-3xl pacity-40"
          />
          <div className="absolute left-20 top-[120px]">
            <h1 className="text-2xl text-blue-800 font-bold uppercase text-center tracking-wider mb-2">
              Welcome to enjoying
              <br /> the best of health
            </h1>
            <h3
              className="text-lg text-white font-semibold capitalize text-center"
              style={{
                textShadow: "0 0 3px #0000FF, 0 0 5px #0000FF",
              }}
            >
              Sign up to enjoy premium services
            </h3>
          </div>
        </div>

        {/* SIGNUP FORM */}
        <div className="flex flex-col justify-center items-center gap-4 mt-8 mr-8">
          <p className="text-2xl font-bold text-blue-800 capitalize">
            Sign up to enjoy the best of healthcare
          </p>
          <form className="flex flex-col items-center w-[500px] gap-4">
            <input
              type="text"
              placeholder="Enter your full name"
              className="border border-gray-300 text-gray-400 h-11 w-full rounded-xl text-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 text-gray-400 h-11 w-full rounded-xl text-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Create a password"
              className="border border-gray-300 text-gray-400 h-11 w-full rounded-xl text-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Confirm your password"
              className="border border-gray-300 text-gray-400 h-11 w-full rounded-xl text-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* <label className="block text-lg font-semibold">Select Gender</label> */}
            <select
              id="gender"
              name="gender"
              className="border border-gray-300 text-gray-400 h-11 w-full rounded-xl text-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Create Account
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
