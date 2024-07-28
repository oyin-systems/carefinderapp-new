import React from "react";
import Image from "next/image";

interface TestimonyCard {
  id: number;
  name: string;
  testimony: string;
  imageSrc: string;
}
const Testimonials = () => {
  const testimonycard: TestimonyCard[] = [
    {
      id: 1,
      name: "Sarah M.",
      testimony:
        "Finding the right hospital has never been easier! With this website, I was able to locate a nearby hospital quickly and efficiently. The search feature is user-friendly, and it provided me with all the essential information I needed. Highly recommended.",
      imageSrc: "/images/sarah.png",
    },
    {
      id: 2,
      name: "John D.",
      testimony:
        "While traveling, I required emergency medical attention, and CareFinder quickly assisted me in finding the closest hospital. In addition to saving me a great deal of time, the precise results and thorough instructions made sure I got the attention I required.",
      imageSrc: "/images/john.png",
    },
    {
      id: 3,
      name: "Emily T.",
      testimony:
        "I recently moved to a new place and didn't know where to go for medical help. My friend used the CareFinder website to share with me some hospital's information. It made my life easier because I could easily find trustworthy hospitals in my area. I heartily endorse.",
      imageSrc: "/images/emily.png",
    },
  ];
  return (
    <section className="h-[600px] w-full py-8 px-8 md:px-10 bg-white">
      <h1 className="text-center text-3xl font-bold text-blue-800 capitalize mt-10 mb-5">
        What our users have to say
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonycard.map((item) => (
          <div
            key={item.id}
            className=" mt-8 px-8 w-[400px] h-[400px] py-8 rounded-lg overflow-hidden shadow-lg bg-[#E0E4EC] flex flex-col items-center justify-center"
          >
            <Image
              src={item.imageSrc}
              alt={item.name}
              width={100}
              height={100}
            />

            <div className="px-6 py-4 flex flex-col items-center justify-center text-center">
              <div className="font-bold text-xl mb-2">{item.name}</div>
              <p className="text-gray-700 text-base italic">{item.testimony}</p>
              <p className="mt-2 text-xl">⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
