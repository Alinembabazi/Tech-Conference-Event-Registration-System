import { useNavigate } from "react-router-dom";
import React from "react";

function EventInfo() {

  const navigate = useNavigate();

  return (
    <div className="p-10 shadow-lg rounded-lg">
      <div className="bg-gray-900 w-full justify-center p-4 max-w-4xl mx-auto rounded-lg text-white mx-auto space-y-3">
      <h1 className="text-2xl font-bold p-4 text-center ">Tech Innovation Conference 2026</h1>

      <p className="text-xl ">Date: June 20, 2026</p>
      <p className="text-xl">Location: Kigali Convention Center</p>

      <p className="text-lg">
        Join developers, designers, and innovators to explore the future
        of technology.
      </p>

      <button onClick={() => navigate("/register")} className="m-4 p-6 py-3 bg-blue-950 text-white rounded-lg  ">
        Register Now
      </button>
      </div>
    </div>
  );
}

export default EventInfo;