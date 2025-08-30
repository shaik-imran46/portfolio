"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Update form state
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Open default mail client
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const mailtoLink = `mailto:imransaki5184@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
        {/* Horizontal Inputs */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium mb-1 text-center">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium mb-1 text-center">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="subject" className="text-sm font-medium mb-1 text-center">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none"
            required
          ></textarea>
        </div>

        {/* Stylish Submit Button */}
        <button
          type="submit"
          className="w-full mt-2 px-6 py-2 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition duration-300"
        >
          Submit
        </button>

        {/* Contact Info under Submit */}
        <div className="mt-8 space-y-8">
          <div className="flex items-center gap-4">
            <FaEnvelope className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-semibold">Email:</h3>
              <Link
                href="mailto:imransaki5184@gmail.com"
                className="text-secondary hover:text-primary"
              >
                imransaki5184@gmail.com
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-semibold">Phone:</h3>
              <Link
                href="tel:+917382545184"
                className="text-secondary hover:text-primary"
              >
                +91 7382545184
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkedAlt className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-semibold">Location:</h3>
              <p className="text-secondary">India, Hyderabad</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
