"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function EnrollPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    course: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit - UPDATED FOR SUPABASE
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // Updated condition for Supabase response
      if (res.ok) {
        setStatus("✅ Your enrollment has been submitted successfully!");
        setFormData({ 
          name: "", 
          email: "", 
          contact: "", 
          address: "", 
          course: "", 
          message: "" 
        });
      } else {
        setStatus(`❌ Error: ${data.error || "Something went wrong. Try again."}`);
      }
    } catch (error) {
      setStatus("⚠️ Network error. Please try later.");
    }
  };

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "50px 20px",
        background: "linear-gradient(135deg, #74ebd5, #9face6)",
        minHeight: "100vh",
      }}
    >
      {/* Heading */}
      <section
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#2c3e50",
        }}
      >
        <h1 style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "10px" }}>
          🎓 Enroll at Ideal Digital Institute
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto" }}>
          Shape your future with modern technologies. Fill out the form below to
          reserve your spot in our professional courses.
        </p>
      </section>

      {/* Form */}
      <form
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          style={inputStyle}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          style={inputStyle}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Enter your contact number"
          style={inputStyle}
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          style={inputStyle}
          value={formData.address}
          onChange={handleChange}
          required
        />
        <select
          name="course"
          style={inputStyle}
          value={formData.course}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Course --</option>
          <option value="python">Python Development</option>
          <option value="web">Full Stack Web Development</option>
          <option value="cpp">C / C++ Programming</option>
          <option value="ai">Artificial Intelligence</option>
          <option value="adk">Google ADK</option>
        </select>
        <textarea
          name="message"
          placeholder="Your Message (Optional)"
          style={{ ...inputStyle, height: "120px", resize: "none" }}
          value={formData.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#3498db",
            border: "none",
            padding: "14px 25px",
            fontSize: "16px",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer",
            width: "100%",
            marginTop: "15px",
            fontWeight: "bold",
          }}
        >
          🚀 Submit Enrollment
        </button>
      </form>

      {/* Status Message */}
      {status && (
        <p style={{ 
          textAlign: "center", 
          marginTop: "20px", 
          fontWeight: "bold",
          padding: "15px",
          borderRadius: "8px",
          backgroundColor: status.includes("✅") ? "#d4edda" : "#f8d7da",
          color: status.includes("✅") ? "#155724" : "#721c24",
          maxWidth: "600px",
          margin: "20px auto"
        }}>
          {status}
        </p>
      )}

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#1a1a1a",
          color: "#ffffff",
          padding: "60px 20px 40px",
          fontFamily: "'Roboto', sans-serif",
          marginTop: "40px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            maxWidth: "1200px",
            margin: "0 auto",
            gap: "20px",
          }}
        >
          {/* About Section */}
          <div style={{ flex: "1 1 300px", marginBottom: "30px", textAlign: "left" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "15px", fontWeight: "bold" }}>Ideal Digital Institute</h3>
            <p style={{ fontSize: "14px", lineHeight: "1.7", opacity: "0.85" }}>
              Empowering the next generation with cutting-edge IT skills, coding expertise, and real-world projects. Join us to launch your tech career.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ flex: "1 1 200px", marginBottom: "30px" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "15px", fontWeight: "bold" }}>Quick Links</h3>
            <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
              <li style={{ marginBottom: "10px" }}><Link href="/courses" style={{ color: "#ffffff", textDecoration: "none", opacity: "0.85" }}>Courses</Link></li>
              <li style={{ marginBottom: "10px" }}><Link href="/about" style={{ color: "#ffffff", textDecoration: "none", opacity: "0.85" }}>About Us</Link></li>
              <li style={{ marginBottom: "10px" }}><Link href="/blog" style={{ color: "#ffffff", textDecoration: "none", opacity: "0.85" }}>Blog</Link></li>
              <li style={{ marginBottom: "10px" }}><Link href="/contact" style={{ color: "#ffffff", textDecoration: "none", opacity: "0.85" }}>Contact</Link></li>
              <li style={{ marginBottom: "10px" }}><Link href="/enroll" style={{ color: "#ffffff", textDecoration: "none", opacity: "0.85" }}>Enroll Now</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div style={{ flex: "1 1 200px", marginBottom: "30px" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "15px", fontWeight: "bold" }}>Contact Us</h3>
            <p style={{ fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", opacity: "0.85" }}>
              <span style={{ marginRight: "10px" }}>📍</span> Double Road, Near Cricket Stadium, Rawalpindi, Pakistan
            </p>
            <p style={{ fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", opacity: "0.85" }}>
              <span style={{ marginRight: "10px" }}>📧</span> info@idealdigital.com
            </p>
            <p style={{ fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", opacity: "0.85" }}>
              <span style={{ marginRight: "10px" }}>📧</span> shahibalti@gmail.com
            </p>
            <p style={{ fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", opacity: "0.85" }}>
              <span style={{ marginRight: "10px" }}>📞</span> +92 310 585 5299
            </p>
          </div>

          {/* Social Media */}
          <div style={{ flex: "1 1 200px", marginBottom: "30px" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "15px", fontWeight: "bold" }}>Follow Us</h3>
            <div style={{ display: "flex", gap: "23px" }}>
              <a href="https://www.facebook.com/idealdigitalinstitute" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/32px-Facebook_f_logo_%282019%29.svg.png"
                  alt="Facebook"
                  style={{ width: "16px", height: "16px", opacity: "0.85" }}
                />
              </a>
              
              <a href="https://www.facebook.com/idealdigitalinstitute" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/32px-LinkedIn_icon.svg.png"
                  alt="LinkedIn"
                  style={{ width: "16px", height: "16px", opacity: "0.85" }}
                />
              </a>
              <a href="https://www.facebook.com/idealdigitalinstitute" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/32px-Instagram_logo_2016.svg.png"
                  alt="Instagram"
                  style={{ width: "16px", height: "16px", opacity: "0.85" }}
                />
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            fontSize: "13px",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: "20px",
            opacity: "0.7",
          }}
        >
          © {new Date().getFullYear()} Ideal Digital Institute | All Rights Reserved | <Link href="/privacy" style={{ color: "#ffffff", textDecoration: "none" }}>Privacy Policy</Link> | <Link href="/terms" style={{ color: "blue", textDecoration: "none" }}>DESIGN BY AHMAD SHAHI</Link>
        </div>
      </footer>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "16px",
};