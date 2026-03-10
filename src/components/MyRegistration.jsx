
import { useEffect, useState } from "react";
import React from "react";

function MyRegistration() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("registration"));
    setData(saved);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
        <p className="text-xl text-gray-700 font-medium">
          No registration found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-700 p-4 border m-4">
  <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">

    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
    Conference Registration
    </h2>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-500">Full Name</label>
        <input
          type="text"
          value={data.name}
          readOnly
          className="w-full mt-1 p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-500">Email</label>
        <input
          type="email"
          value={data.email}
          readOnly
          className="w-full mt-1 p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-500 ">Phone</label>
        <input
          type="number" required
          value={data.phone}
          readOnly
          className="w-full mt-1 p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-500">Ticket Type</label>
        <input
          type="text"
          value={data.ticket}
          readOnly
          className="w-full mt-1 p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-gray-500">Additional Notes</label>
        <textarea
          value={data.notes}
          readOnly
          rows="3"
          className="w-full mt-1 p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>

    </div>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-3 mt-6">
      <button
        className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Edit Registration
      </button>
      <button
        onClick={() => { localStorage.removeItem("registration"); window.location.reload(); }}
        className="flex-1 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
      >
        Cancel Registration
      </button>
    </div>

  </div>
</div>
  );
}

export default MyRegistration;
