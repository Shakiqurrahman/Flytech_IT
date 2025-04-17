"use client";

import { useState } from "react";
import formBg from "/public/images/smoke.jpg";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    if (name && email && subject && message) {
      console.log(form);
    }
  };

  return (
    <form
      className="rounded-lg overflow-hidden border border-slate-800 -mt-[200px] relative"
      onSubmit={handleSubmit}
    >
      <h1
        className="p-12 text-center text-sm md:text-base"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${formBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        Connect with us for any inquiries, feedback, or support. We’re just a
        message away!
      </h1>
      <div className="p-5 pt-10 pb-8 bg-gradient-to-b from-body via-[#4f0239]/75 to-[#0d0258]/55">
        <div className="grid sm:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            className="block p-3 rounded font-thin text-sm outline-none text-black bg-white"
            placeholder="Your Name"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            className="block p-3 rounded font-thin text-sm outline-none text-black bg-white"
            placeholder="Your Email"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            className="block p-3 rounded font-thin text-sm outline-none text-black bg-white"
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="block p-3 rounded font-thin text-sm outline-none text-black bg-white"
            required
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            className="block p-3 rounded font-thin text-sm sm:col-span-2 resize-none min-h-[100px] outline-none text-black bg-white"
            onChange={handleChange}
          ></textarea>
          <button className="block p-3 rounded text-sm sm:col-span-2 outline-none bg-blue-500 hover:bg-blue-500/85 duration-300">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
