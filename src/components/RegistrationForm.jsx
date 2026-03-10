import { useNavigate } from "react-router-dom";
import React from "react";
function RegistrationForm({ formData, setFormData }) {

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/review");
  };

  return (
   <form 
  onSubmit={handleSubmit} 
  className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md"
>
  <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
    Registration Form
  </h2>

  <input
    type="text"
    name="name"
    placeholder="Full Name"
    value={formData.name}
    onChange={handleChange}
    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <input
    type="email"
    name="email"
    placeholder="Email"
    value={formData.email}
    onChange={handleChange}
    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <input
    type="text"
    name="phone"
    placeholder="Phone"
    value={formData.phone}
    onChange={handleChange}
    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <select
    name="ticket"
    value={formData.ticket}
    onChange={handleChange}
    className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option>Standard</option>
    <option>VIP</option>
    <option>Student</option>
  </select>

  <button
    type="submit"
    className="w-full bg-blue-950 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors font-semibold"
  >
    Review Registration
  </button>
</form>
  );
}

export default RegistrationForm;