import React from "react";
import Sample from "../Images/dunkirk.webp";

const BookingSit = () => {
  return (
    <div className="container mx-auto">
      <h1>Booking Form</h1>

      <div className="py-16 grid lg:grid-cols-12 lg:rounded-lg p-3 lg:p-0 md:p-0">
        <aside className="grid lg:col-span-7">
          <img
            className="lg:rounded-l-lg shadow-xl  rounded-t-lg lg:rounded-tr-none brightness-50"
            src={Sample}
            alt=""
          />
        </aside>
        <aside className="grid lg:col-span-5">
          <form className="w-full flex flex-col place-items-center space-y-3 mx-auto bg-slate-200 shadow-xl px-10 py-12 lg:rounded-r-lg">
            <h1 className="capitalize text-2xl">Booking user info</h1>
            <input
              type="text"
              name=""
              className="h-12 outline-none rounded-md w-full px-3"
              placeholder="Movies Name"
            />{" "}
            <br />
            <input
              type="text"
              name=""
              className="h-12 outline-none rounded-md w-full px-3"
              placeholder="Type Text"
              id=""
            />{" "}
            <br />
            <input
              type="text"
              name=""
              className="h-12 outline-none rounded-md w-full px-3"
              placeholder="Type Text"
            />{" "}
            <br />
            <input
              type="text"
              name=""
              className="h-12 outline-none rounded-md w-full px-3"
              placeholder="Type Text"
            />{" "}
            <br />
            <button className="bg-green-300 w-full py-2">Submit</button>
          </form>
        </aside>
      </div>
    </div>
  );
};

export default BookingSit;
