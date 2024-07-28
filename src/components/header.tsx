import React from "react";

const header = () => {
  return (
    <header className="h-20 w-full py-4 px-8 bg-white flex justify-between items-center drop-shadow-lg">
      <h2>CareFinder</h2>
      <div>
        <ul className="flex gap-8">
          <li>Home</li>
          <li>About</li>
          <li>Find Hospital</li>
        </ul>
      </div>
      <div className="flex gap-8">
        <button className="bg-blue-800 rounded-lg text-white w-24 px-2 py-1">
          Sign In
        </button>
        <button className="bg-blue-800 rounded-lg text-white w-24 px-2 py-1">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default header;
