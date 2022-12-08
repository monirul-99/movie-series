import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const BookingDetails = () => {
  const [getData, setTest] = useState([]);

  useEffect(() => {
    const getDataX = JSON.parse(localStorage.getItem("movie-data"));
    setTest(getDataX);
  }, []);

  const userDataSaveLocal = (event) => {
    event.preventDefault();
    const form = event.target;
    const movieName = form.movieName.value;
    const schedule = form.space.value;
    const userInfo = { movieName: movieName, schedule: schedule };
    localStorage.setItem("user-info", JSON.stringify(userInfo));
    toast.success("Booking Successfully!");
  };

  return (
    <div className="container mx-auto lg:h-screen flex justify-center items-center">
      <div className="p-5">
        <aside className="grid lg:grid-cols-12 gap-10">
          <div className="grid lg:col-span-5 justify-items-center">
            <img className="lg:w-3/5" src={getData?.image?.original} alt="" />
          </div>
          <div className="grid lg:col-span-7 text-white ">
            <h1 className="text-2xl">{getData?.name}</h1>
            <p>{getData?.summary?.slice(3, -4)}</p>

            {getData.name && (
              <div className="flex flex-col lg:flex-row lg:space-x-10 lg:-mb-16 space-y-5 lg:space-y-0  mt-5 lg:mt-0">
                <p className="uppercase">
                  Language : <span className="">{getData?.language}</span>
                </p>
                <p className="uppercase">
                  Country :{" "}
                  <span className="">
                    {getData?.network?.country?.name
                      ? getData?.network?.country?.name
                      : "Not Found"}
                  </span>
                </p>
                <p className="uppercase">
                  Time Zone :{" "}
                  <span className="">
                    {getData?.network?.country?.timezone
                      ? getData?.network?.country?.timezone
                      : "Not Found"}
                  </span>
                </p>
              </div>
            )}
            {getData.name && (
              <div className="flex flex-col lg:flex-row lg:space-x-10 lg:-mt-8 space-y-5 lg:space-y-0 mt-5 mb-5 ">
                <p className="uppercase">
                  Official Site Link :
                  <span className="">
                    {getData?.network?.officialSite
                      ? getData.network.officialSite
                      : "Not Found"}
                  </span>
                </p>
                <p className="uppercase">
                  Premiered Date :{" "}
                  <span className="">
                    {getData?.premiered?.premiered
                      ? getData?.premiered?.premiered
                      : "Not Found"}
                  </span>
                </p>
                <p className="uppercase">
                  Status :{" "}
                  <span className="">
                    {getData?.status?.status
                      ? getData?.status?.status
                      : "Not Found"}
                  </span>
                </p>
              </div>
            )}

            {getData.name && (
              <form
                className="lg:space-x-3 flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:h-11"
                onSubmit={userDataSaveLocal}
              >
                <input
                  className="text-black py-2 lg:w-2/6 w-full rounded-sm px-4"
                  defaultValue={getData?.name}
                  type="text"
                  name="movieName"
                  id=""
                />

                <select
                  name="space"
                  className="select select-bordered text-black py-2 lg:w-1/6 w-full rounded-sm"
                >
                  {getData?.schedule?.days.map((space, inx) => (
                    <option key={inx} value={space} className="ml-5">
                      {space}
                    </option>
                  ))}
                  {!getData?.schedule?.days.length && (
                    <option value="Not Available" className="px-3">
                      Not Available
                    </option>
                  )}
                </select>

                <input
                  className="bg-green-300 px-5 py-2 rounded-sm text-black"
                  type="Submit"
                  value="Booking Now"
                />
              </form>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BookingDetails;
