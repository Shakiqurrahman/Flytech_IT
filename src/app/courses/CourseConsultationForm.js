"use client";

import { useState } from "react";

const CourseConsultationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
  });
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, number } = form;
    if (name && email && number) {
      const data = { ...form };
      console.log(data);
    } else {
      alert("All Fields Are Required!!!");
    }
  };
  return (
    <form
      className="w-full rounded-lg border border-blue-400 bg-[#141c2c] p-16"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center text-blue-400 font-semibold text-4xl">
        Get Your Free Consultation
      </h1>
      <p className="text-sm text-center mt-2 mb-5">
        Take the first step towards success. Schedule your free consultation
        today!
      </p>
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          className="block w-full text-sm p-4 rounded-lg outline-none bg-white text-black"
          placeholder="Your Name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="email"
          className="block w-full text-sm p-4 rounded-lg outline-none bg-white text-black"
          placeholder="Your Email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="number"
          className="block w-full text-sm p-4 rounded-lg outline-none bg-white text-black"
          placeholder="Your Phone Number"
          name="number"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="block w-full p-4 rounded-lg outline-none bg-blue-400"
        >
          Schedule Now
        </button>
      </div>
    </form>
  );
};

export default CourseConsultationForm;
