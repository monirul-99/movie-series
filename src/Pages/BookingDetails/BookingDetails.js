import React, { useEffect, useState } from "react";

const BookingDetails = () => {
  const [getData, setTest] = useState([]);

  useEffect(() => {
    const getDataX = JSON.parse(localStorage.getItem("movie-data"));
    setTest(getDataX);
  }, []);

  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <div className="">
        <aside className="grid grid-cols-12 gap-10">
          <div className="grid col-span-5 justify-items-center">
            <img className="w-3/5" src={getData?.image?.original} alt="" />
          </div>
          <div className="grid col-span-7 text-white">
            <h1 className="text-2xl">{getData?.name}</h1>
            <p>{getData?.summary?.slice(3, -4)}</p>

            {getData.name && (
              <div className="flex space-x-10 -mb-16">
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
              <div className="flex space-x-10 -mt-8">
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
              <form action="" className="space-x-3">
                <input
                  className="text-black py-2 w-2/6 rounded-sm px-4"
                  defaultValue={getData?.name}
                  type="text"
                  name=""
                  id=""
                />

                <select className="select select-bordered text-black py-2 w-1/6 rounded-sm">
                  {getData?.schedule?.days.map((space) => (
                    <option className="ml-5">{space}</option>
                  ))}
                  {!getData?.schedule?.days.length && (
                    <option className="px-3">Not Available</option>
                  )}
                </select>

                <input
                  className="bg-green-300 px-5 py-2 rounded-sm text-black"
                  type="button"
                  value="Booking Now"
                />
              </form>
            )}
          </div>
        </aside>
        <aside></aside>
      </div>
    </div>
  );
};

export default BookingDetails;
