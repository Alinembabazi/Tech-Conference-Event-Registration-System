import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import EventInfo from "./components/EventInfo";
import RegistrationForm from "./components/RegistrationForm";
import ReviewPage from "./components/ReviewPage";
import Confirmation from "./components/Confirmation";
import MyRegistration from "./components/MyRegistration";
import React from "react";
function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    ticket: "",
    diet: "",
    notes: ""
  });

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<EventInfo />} />

        <Route
          path="/register"
          element={<RegistrationForm formData={formData} setFormData={setFormData} />}
        />

        <Route
          path="/review"
          element={<ReviewPage formData={formData} />}
        />

        <Route path="/confirmation" element={<Confirmation />} />

        <Route path="/my-registration" element={<MyRegistration />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;