import React from "react";
import Image from "next/image";
import Header from "@components/header";

const SignIn = () => {
  return (
    <div>
      <Header />
      <section className="flex items-center justify-between h-[600px] w-full py-8 px-8 bg-[#E0E4EC]">
        <div className="relative w-[500px] h-[350px] outline-blue-950 outline-4 object-contain ml-20">
          <Image
            src="/images/signin.jpg"
            //   width={500}
            //   height={600}
            fill
            alt="Consultation"
            className="rounded-3xl opacity-40"
          />
          <div className="absolute left-10 top-[120px] w-[400px]">
            <h1
              className="text-2xl text-white font-bold uppercase text-center tracking-wider mb-2"
              style={{
                textShadow: "0 0 3px #0000FF, 0 0 5px #0000FF",
              }}
            >
              Welcome back to Your One Stop Online Health Manager.
            </h1>
            <h3
              className="text-lg text-white font-semibold capitalize text-center"
              style={{
                textShadow: "0 0 3px #0000FF, 0 0 5px #0000FF",
              }}
            >
              Sign in to your account
            </h3>
          </div>
        </div>

        {/* SIGNIN FORM */}
        <div className="flex flex-col justify-center items-center gap-4 mt-8 mr-8">
          <p className="text-2xl font-bold text-blue-800 capitalize">
            Sign in for personalized premium experience
          </p>
          <form className="flex flex-col items-center w-[500px] gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 text-gray-400 h-11 w-full rounded-xl text-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 text-gray-400 h-11 w-full rounded-xl text-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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

export default SignIn;
