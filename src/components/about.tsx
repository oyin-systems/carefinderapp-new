import React from "react";
import Image from "next/image";

interface Card {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}
const About = () => {
  const card: Card[] = [
    {
      id: 1,
      title: "Search Doctors",
      description: "Effortlessly find the Best Hospitals near you.",
      imageSrc: "/images/hospital.png",
    },
    {
      id: 2,
      title: "Search Hospitals",
      description: "Effortlessly find the Best Doctors near you.",
      imageSrc: "/images/doctor.png",
    },
    {
      id: 3,
      title: "Export Hospitals",
      description: "Save list of hospitals.",
      imageSrc: "/images/export.png",
    },
    {
      id: 4,
      title: "Share Hospitals",
      description: "Share the list of hospitals with others.",
      imageSrc: "/images/share.png",
    },
  ];
  return (
    <section className="h-fit w-full py-8 px-8 bg-white">
      <div className="flex items-center justify-between px-8 mt-8">
        <div className="relative flex rounded-lg w-[700px] h-[600px] outline-blue-950 outline-4 object-fit object-contain">
          <Image
            src="/images/patient.jpg"
            width={200}
            height={500}
            alt="patient"
            className="h-[450px] w-[300px] rounded-2xl absolute top-0 left-0"
          />
          <Image
            src="/images/bp.jpg"
            width={200}
            height={500}
            alt="blood pressure"
            className="h-[450px] w-[300px] rounded-2xl absolute top-10 right-20"
          />
        </div>

        <div className="space-y-8 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-[#08299B] font-extrabold text-center">
            Welcome to <br />
            CareFinder
          </h1>
          <p className="text-base text-black font-semibold text-center mb-8 leading-8">
            Carefinder is a platform where users can search for hospitals
            <br />
            in their areas, export hospital details for your
            <br />
            records and enhance your healthcare <br />
            experience by connecting with others
            <br /> and sharing valuable resources.
          </p>
          <button className="bg-[#08299B] rounded-lg text-white w-fit px-4 py-2">
            OUR SERVICES
          </button>
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
              alt={item.title}
              width={100}
              height={100}
            />

            <div className="px-6 py-4 flex flex-col items-center justify-center text-center">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
