import React from "react";

const Footer = () => {
  return (
    <footer className="h-[300px] w-full py-4 px-8 bg-blue-950 text-[#E0E4EC] flex justify-center items-center gap-20 ">
      <div className="flex flex-col gap-2 mr-20">
        <h3 className="text-lg font-bold uppercase text-blue-300">Locate Us</h3>
        <p>
          Plot 42, Adeola Odeku, <br />
          Victoria Island, <br />
          Lagos, Nigeria. <br />
          <strong>Tel:</strong> +234-810-123-4567 <br />
          <strong>Email:</strong> carefinder@gmail.com
        </p>
      </div>
      <div className="flex flex-col gap-2 mr-20">
        <h3 className="text-lg font-bold uppercase text-blue-300">About Us</h3>
        <ul className="">
          <li>News & Media</li>
          <li>How it works</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Partnerships</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 mr-20">
        <h3 className="text-lg font-bold uppercase text-blue-300">
          Quick Links
        </h3>
        <ul className="">
          <li>My Account</li>
          <li>Book an appointment</li>
          <li>Library</li>
          <li>Contact Us</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 mr-20">
        <h3 className="text-lg font-bold uppercase text-blue-300">Follow Us</h3>
        <ul className="">
          <li>Instagram</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Telegram</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
