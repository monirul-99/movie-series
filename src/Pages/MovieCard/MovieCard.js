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
  console.log(movieData);
  return (
    <div className="container mx-auto">
      <div className="uppercase font-Poppins mt-16">
        <div className="">
          <h1 className="uppercase px-1 mb-3 text-white text-3xl">
            most <span>watches Movies</span>
          </h1>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-10 pb-16">
        {movieData?.map((card, inx) => (
          <Card key={inx} card={card}></Card>
        ))}
      </div>
      <p className="text-red-400">{error}</p>
    </div>
  );
};

export default MovieCard;
