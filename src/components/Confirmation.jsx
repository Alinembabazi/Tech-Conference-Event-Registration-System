
import React from "react";

function Confirmation() {

  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
  <div className="bg-green-700 text-white rounded-xl shadow-lg p-8 max-w-xl text-center w-full">
    
    <h2 className="text-2xl md:text-3xl font-bold mb-4">
      Registration Successful!
    </h2>

    <p className="text-green-100 text-base md:text-lg">
      Thank you for registering for the Tech Innovation Conference.
    </p>

  </div>
</div>
  );
}

export default Confirmation;