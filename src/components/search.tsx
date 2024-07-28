import React from "react";
import Image from "next/image";

interface Card {
  id: number;
  name: string;
  address: string;
  imageSrc: string;
}
const Search = () => {
  const card: Card[] = [
    {
      id: 1,
      name: "Ruby Valley Hospital",
      address: "32, Admiralty Way, Lekki Phase One, Lagos.",
      imageSrc: "/images/hospital1.png",
    },
    {
      id: 2,
      name: "Hill Crest Medical Center",
      address: "Plot 2B, Madiem Avenue, Victoria Island, Lagos.",
      imageSrc: "/images/hospital2.png",
    },
    {
      id: 3,
      name: "Willow Gardens Clinic",
      address: "17, Warren Trail Crescent, Ikoyi, Lagos.",
      imageSrc: "/images/hospital3.png",
    },
    {
      id: 4,
      name: "Meadowview Hospital",
      address: "No 16, Ben Carson Street, Lekki Phase 1, Lagos.",
      imageSrc: "/images/hospital4.png",
    },
  ];
  return (
    <section className="h-fit w-full py-8 px-8 bg-white">
      <div className="relative flex items-center justify-center rounded-lg w-full h-[600px] outline-blue-950 outline-4 object-fit object-contain">
        <Image
          src="/images/map.png"
          fill
          alt="blood pressure"
          className="h-[450px] w-[300px] rounded-2xl absolute top-10 right-20 opacity-50"
        />
        <h1 className="absolute top-10 text-center font-bold text-black text-2xl">
          SEARCH FOR HOSPITALS
        </h1>
        {/* SEARCH FORM */}
        <div className="absolute top-25 flex flex-col justify-center items-center gap-4 mt-8">
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 px-8">
        {card.map((item) => (
          <div
            key={item.id}
            className="max-w-sm h-[250px] py-8 px-4 rounded-lg overflow-hidden shadow-lg bg-[#E0E4EC] flex flex-col items-center justify-center"
          >
            <Image
              src={item.imageSrc}
              alt={item.name}
              width={100}
              height={100}
            />

            <div className="px-2 py-4 flex flex-col items-center justify-center text-center">
              <div className="font-semibold text-lg mb-2">{item.name}</div>
              <p className="text-gray-700 text-sm">{item.address}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Search;
