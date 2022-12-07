import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="bg-gray-300">
      <div className="flex justify-between  items-center h-20 container mx-auto">
        <div>
          <Link
            to="/"
            className="text-2xl text-[#1A191F] uppercase font-semibold tracking-widest"
          >
            Movie Series
          </Link>
        </div>
        <div className="space-x-5 text-[16px] text-[#1A191F] font-semibold uppercase">
          <Link to="/home">Home</Link>
          <Link to="/booking">Booking</Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
