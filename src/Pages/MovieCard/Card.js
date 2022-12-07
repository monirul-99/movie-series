import React from "react";
import { Link } from "react-router-dom";
import Testing from "../Images/testing img.jpg";

const Card = ({ card }) => {
  console.log(card.show);
  const { image, name, rating, genres } = card.show;
  return (
    <div className="bg-white shadow-xl w-[350px] rounded-xl mx-auto">
      <div className="w-[350px] h-[450px] overflow-hidden  ">
        <img className="rounded-t-lg" src={image.original} alt="" />

        <p>{rating.average ? rating.average : "4.5"}</p>
      </div>
      <div className="p-5 bg-[#23212a] font-Poppins">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-xl text-white uppercase">{name}</h1>
          <div className="text-white tracking-wide uppercase text-[13px] flex items-center space-x-2">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>{" "}
            <span className="border-[#EE5A15] border rounded-sm text-white px-3">
              {rating.average ? rating.average : "4.9"}
            </span>
          </div>
        </div>
        <aside className="pt-2">
          <h3 className="tracking-widest text-[#eeaf42] text-[14px] font-Ubuntu">
            {genres[0]} {genres[1]}
          </h3>
        </aside>

        <button className="bg-[#EE5A15] text-[13px] text-white px-5 py-1.5 mt-3 rounded-sm">
          Movie Details
        </button>
      </div>
    </div>
  );
};

export default Card;
