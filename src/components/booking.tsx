import React from "react";
import Image from "next/image";

interface Doctors {
  id: number;
  name: string;
  title: string;
  imageSrc: string;
  hospital: string;
}

const Booking = () => {
  const doctors: Doctors[] = [
    {
      id: 1,
      name: "Joan Williams",
      title: "Gynaecologist",
      imageSrc: "/images/joan.png",
      hospital: "Ruby Valley Hospital",
    },
    {
      id: 2,
      name: "Brandon Mitchell",
      title: "Neurologist",
      imageSrc: "/images/brandon.png",
      hospital: "Hill Crest Medical Center",
    },
    {
      id: 3,
      name: "Olivia Brown",
      title: "Oncologist",
      imageSrc: "/images/olivia.png",
      hospital: "Willow Gardens Clinic",
    },
    {
      id: 4,
      name: "Tyler Davis",
      title: "Paediatrician",
      imageSrc: "/images/tyler.png",
      hospital: "Meadowview Hospital",
    },
  ];
  return (
    <section className="flex items-center justify-between h-[600px] w-full py-8 px-8 bg-[#E0E4EC]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-center justify-between px-8 ml-8">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={doctor.imageSrc}
              alt="Doctor's image"
              width={100}
              height={100}
            />
            <div className="text-center space-y-1 mt-4">
              <h3 className="text-xl font-bold text-blue-800 uppercase">
                {doctor.name}
              </h3>
              <p className="text-base italic font-semibold">{doctor.title}</p>
              <p className="text-lg font-bold">{doctor.hospital}</p>
            </div>
          </div>
        ))}
      </div>

      {/* BOOKING FORM */}
      <div className="flex flex-col justify-center items-center gap-4 mt-8 mr-8">
        <p className="text-2xl font-bold text-blue-800 uppercase">
          BOOK AN APPOINTMENT
        </p>
        <form className="flex flex-col items-center w-[500px] gap-4">
          <input
            type="text"
            placeholder="Enter address here"
            className="border border-gray-300 h-11 w-full rounded-xl text-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Choose hospital"
            className="border border-gray-300 h-11 w-full rounded-xl text-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Choose department"
            className="border border-gray-300 h-11 w-full rounded-xl text-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Enter your full name"
            className="border border-gray-300 h-11 w-full rounded-xl text-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Enter your email address"
            className="border border-gray-300 h-11 w-full rounded-xl text-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Select preferred date"
            className="border border-gray-300 h-11 w-full rounded-xl text-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Select preferred time"
            className="border border-gray-300 h-11 w-full rounded-xl text-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
