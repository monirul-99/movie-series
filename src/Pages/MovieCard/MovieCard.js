import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const MovieCard = () => {
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=all`)
      .then((res) => setMovieData(res.data))
      .catch((error) => {
        setError(error.message);
      });
  }, []);
  return (
    <div className="container mx-auto">
      <div className="uppercase font-Poppins mt-16">
        <div className="">
          <h1 className="uppercase px-6 mb-3 text-white lg:text-3xl">
            most <span>watches Movies</span>
          </h1>
        </div>
      </div>

      <div className="grid xl:grid-cols-4 lg:gap-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 sm:gap-12 gap-12 md:ga-12 pb-16 p-5">
        {movieData?.map((card, inx) => (
          <Card key={inx} card={card}></Card>
        ))}
      </div>
      <p className="text-red-400">{error}</p>
    </div>
  );
};

export default MovieCard;
