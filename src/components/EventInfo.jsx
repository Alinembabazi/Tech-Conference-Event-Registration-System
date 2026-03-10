import { useNavigate } from "react-router-dom";
import React from "react";

function EventInfo() {

  const navigate = useNavigate();

  return (
    <div className="p-10  text-center  shadow-lg rounded-lg">
      <div className="bg-gray-800 w-96 justify-center p-4 justify-items-center rounded-lg text-white mx-auto space-y-3">
      <h1 className="text-2xl font-bold">Tech Innovation Conference 2026</h1>

      <p className="">Date: June 20, 2026</p>
      <p>Location: Kigali Convention Center</p>

      <p>
        Join developers, designers, and innovators to explore the future
        of technology.
      </p>

      <button onClick={() => navigate("/register")} className="m-4 p-6 py-3 bg-blue-500 text-white rounded-lg ">
        Register Now
      </button>
      </div>
    </div>
  );
}

export default EventInfo;