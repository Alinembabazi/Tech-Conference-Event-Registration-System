// import { useEffect, useState } from "react";

// function MyRegistration() {

//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("registration"));
//     setData(saved);
//   }, []);

//   if (!data) {
//     return <p>No registration found.</p>;
//   }

//   return (
//     <div className="space-y-4 items-center bg-gray-700 border p-4">

//       <h2>Your Registration</h2>

//       <label>Name:<input type="text" value={data.name} readOnly /></label> <br />
//       <label>Email:<input type="email" value={data.email} readOnly /></label><br />
//       <label>Phone:<input type="tel" value={data.phone} readOnly /></label><br />
//       <label>Ticket:<input type="text" value={data.ticket} readOnly /></label>
//       <label>Notes:<textarea value={data.notes} readOnly /></label>

//     </div>
//   );
// }

// export default MyRegistration;
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
    <div className="min-h-screen flex items-center justify-center bg-red-700 p-6">

      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg p-8">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          🎟 Your Conference Registration
        </h2>

        <div className="space-y-4">

          <div>
            <label className="text-sm text-gray-500 font-medium">
              Full Name
            </label>
            <input
              type="text"
              value={data.name}
              readOnly
              className="w-full mt-1 p-3 border rounded-lg bg-gray-50 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500 font-medium">
              Email Address
            </label>
            <input
              type="email"
              value={data.email}
              readOnly
              className="w-full mt-1 p-3 border rounded-lg bg-gray-50"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              value={data.phone}
              readOnly
              className="w-full mt-1 p-3 border rounded-lg bg-gray-50"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500 font-medium">
              Ticket Type
            </label>
            <input
              type="text"
              value={data.ticket}
              readOnly
              className="w-full mt-1 p-3 border rounded-lg bg-gray-50"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500 font-medium">
              Additional Notes
            </label>
            <textarea
              value={data.notes}
              readOnly
              rows="3"
              className="w-full mt-1 p-3 border rounded-lg bg-gray-50"
            />
          </div>

        </div>

        <div className="flex gap-4 mt-6">

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Edit Registration
          </button>

          <button
            onClick={() => {
              localStorage.removeItem("registration");
              window.location.reload();
            }}
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
          >
            Cancel Registration
          </button>

        </div>

      </div>
    </div>
  );
}

export default MyRegistration;
