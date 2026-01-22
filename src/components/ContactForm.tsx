"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "",
          message: "",
        });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="w-full px-4 py-3 border border-gray-light bg-primary-white text-primary-black placeholder-gray-medium focus:outline-none focus:border-accent transition-colors"
        />
      </div>
      
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full px-4 py-3 border border-gray-light bg-primary-white text-primary-black placeholder-gray-medium focus:outline-none focus:border-accent transition-colors"
        />
      </div>
      
      <div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full px-4 py-3 border border-gray-light bg-primary-white text-primary-black placeholder-gray-medium focus:outline-none focus:border-accent transition-colors"
        />
      </div>
      
      <div>
        <select
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-light bg-primary-white text-primary-black focus:outline-none focus:border-accent transition-colors"
        >
          <option value="">I'm interested in...</option>
          <option value="semi-private">Semi-Private Training</option>
          <option value="group-fitness">Group Fitness</option>
          <option value="private-training">1:1 Private Training</option>
          <option value="question">Just have a question</option>
        </select>
      </div>
      
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-light bg-primary-white text-primary-black placeholder-gray-medium focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>
      
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-6 py-3 bg-accent text-primary-white font-semibold text-sm uppercase tracking-wide hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
      </button>
      
      {status === "success" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-green-600"
        >
          Thanks for reaching out! We'll get back to you soon.
        </motion.p>
      )}
      {status === "error" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-red-600"
        >
          Something went wrong. Please try again.
        </motion.p>
      )}
    </form>
  );
}

