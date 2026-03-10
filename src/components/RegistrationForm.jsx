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
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <select
        name="ticket"
        value={formData.ticket}
        onChange={handleChange}
      >
        <option>Standard</option>
        <option>VIP</option>
        <option>Student</option>
      </select>

      <button type="submit">Review Registration</button>

    </form>
  );
}

export default RegistrationForm;