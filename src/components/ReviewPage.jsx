import { useNavigate } from "react-router-dom";
import React from "react";
function ReviewPage({ formData }) {

  const navigate = useNavigate();

  const confirmRegistration = () => {
    localStorage.setItem("registration", JSON.stringify(formData));
    navigate("/confirmation");
  };

  return (
    // <div>

    //   <h2>Review Your Registration</h2>

    //   <p>Name: {formData.name}</p>
    //   <p>Email: {formData.email}</p>
    //   <p>Phone: {formData.phone}</p>
    //   <p>Ticket: {formData.ticket}</p>

    //   <button onClick={() => navigate("/register")}>
    //     Edit
    //   </button>

    //   <button onClick={confirmRegistration}>
    //     Confirm Registration
    //   </button>

    // </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
  <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
    
    {/* Header */}
    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
      Review Your Registration
    </h2>

    {/* Registration Info */}
    <div className="space-y-3 text-gray-700">
      <p><span className="font-medium">Name:</span> {formData.name}</p>
      <p><span className="font-medium">Email:</span> {formData.email}</p>
      <p><span className="font-medium">Phone:</span> {formData.phone}</p>
      <p><span className="font-medium">Ticket:</span> {formData.ticket}</p>
    </div>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 mt-6 ">
      <button
        onClick={() => navigate("/register")}
        className="flex-1 bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Edit
      </button>

      <button
        onClick={confirmRegistration}
        className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
      >
        Confirm Registration
      </button>
    </div>

  </div>
</div>
  );
}

export default ReviewPage;