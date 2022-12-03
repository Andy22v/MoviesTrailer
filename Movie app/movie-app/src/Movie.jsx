import React, { useState } from "react";
import Popup from "./popup";

export default function Movie({ movie }) {
  const [popup, setPopup] = useState(false);

  return (
    <div>
      <div className="flex w-full flex-wrap card  justify-center flex-col">
        <div
          style={{ width: 200, height: 300 }}
          className="  m-0 object-center items-center  "
        >
          <img
            className=" items-center img rounded-md   object-cover "
            src={movie?.image}
            alt=""
          />
        </div>
        <button
          onClick={() => setPopup(true)}
          className=" btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Trailer
        </button>
      </div>
      {popup && <Popup setPopup={setPopup} movie={movie} />}
    </div>
  );
}
