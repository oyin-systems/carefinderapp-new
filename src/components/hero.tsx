import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <section className="h-[600px] w-full py-4 px-8 bg-[#E0E4EC]">
      <div className="flex items-center justify-between px-8 mt-8">
        <div className="gap-4 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-[#08299B] font-black text-center">
            Find the nearest hospital <br />
            to you and make an
            <br /> appointment
          </h1>
          <p className="text-2xl text-black font-semibold text-center my-4">
            Discover Your Perfect Care: <br />
            Find Your Hospital, Anytime, Anywhere!
          </p>
          <button className="bg-[#08299B] rounded-lg text-white w-fit px-4 py-2">
            GET STARTED
          </button>
          <p>
            Learn more
            <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none ml-2">
              -&gt;
            </span>
          </p>
        </div>
        <div className="rounded-lg w-[600px] h-[400px] outline-blue-950 outline-4 object-contain">
          <Image
            src="/images/injection.png"
            width={500}
            height={300}
            alt="Doctor injecting patient"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 mt-8">
        <p className="text-xl font-semibold">Find a nearby hospital:</p>
        <form className="flex items-center w-[500px]">
          <input
            type="text"
            placeholder="Enter hospital name here"
            className="border border-gray-300 w-full rounded-l-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Home;
