import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, your message has been sent!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-[1197px] mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-bold mb-12 text-center text-blue-500">Get in Touch</h1>
        <p className="text-center text-lg text-gray-700 mb-16">
          Have a project in mind or just want to say hi? Drop me a message and I’ll get back to you.
        </p>

        {/* Contact Form */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 bg-white p-8 rounded-3xl shadow-2xl backdrop-blur-sm border border-gray-200 space-y-6"
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-bold text-xl rounded-2xl hover:bg-blue-600 hover:shadow-lg transition-all"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200 backdrop-blur-sm space-y-6">
              <h2 className="text-3xl font-bold text-blue-500">Contact Info</h2>
              <div className="flex items-center gap-4 text-gray-700">
                <FaEnvelope className="text-blue-500 text-2xl" />
                <span>solomonwondwosen54@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <FaPhone className="text-blue-500 text-2xl" />
                <span>+251 967 060 914</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <FaLinkedin className="text-blue-500 text-2xl" />
                <a href="https://linkedin.com/in/solomon-wondwesen-8b27a934b" className="hover:text-blue-600 transition-colors">linkedin.com/in/solomon</a>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <FaGithub className="text-blue-500 text-2xl" />
                <a href="https://github.com/swprograming" className="hover:text-blue-600 transition-colors">github.com/swprogramming</a>
              </div>
            </div>
            <p className="text-gray-700">
              Feel free to reach out for collaborations, freelance work, or just to say hi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
