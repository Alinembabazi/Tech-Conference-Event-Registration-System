import { useNavigate } from "react-router-dom";
import React from "react";
function ReviewPage({ formData }) {

  const navigate = useNavigate();

  const confirmRegistration = () => {
    localStorage.setItem("registration", JSON.stringify(formData));
    navigate("/confirmation");
  };

  return (
    <div>

      <h2>Review Your Registration</h2>

      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <p>Ticket: {formData.ticket}</p>

      <button onClick={() => navigate("/register")}>
        Edit
      </button>

      <button onClick={confirmRegistration}>
        Confirm Registration
      </button>

    </div>
  );
}

export default ReviewPage;