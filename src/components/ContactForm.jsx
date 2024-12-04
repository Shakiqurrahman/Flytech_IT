"use client";

import formBg from "@/assets/images/smoke.jpg";
import { useState } from "react";

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
      className="rounded-lg overflow-hidden border -mt-[200px] relative"
      onSubmit={handleSubmit}
    >
      <h1
        className="p-10 text-center text-sm md:text-base"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${formBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eos illo
        reiciendis omnis ab? Perferendis ullam distinctio quod accusamus quia.
      </h1>
      <div className="p-5 pt-10">
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
          <button className="block p-3 rounded text-sm sm:col-span-2 outline-none bg-blue-500">
            Send Message
          </button>
        </div>
        <p className="text-center mt-6 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          magnam!
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
