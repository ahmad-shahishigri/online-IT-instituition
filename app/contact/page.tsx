"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Apna WhatsApp Number (country code ke sath)
  const phoneNumber = "923105855299"; // <- apna number daal dein

  const sendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    // User input ka message encode
    const text = `📩 New Contact Message:
Name: ${name}
Email: ${email}
Message: ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    // WhatsApp open hoga
    window.open(url, "_blank");
  };

  return (
    <main style={{ fontFamily: "'Roboto', sans-serif", background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)", minHeight: "100vh" }}>
      {/* Header */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          color: "#1a1a1a",
        }}
      >
        <h1 style={{ fontSize: "42px", fontWeight: "bold", marginBottom: "15px" }}>
          Contact Ideal Digital Institute
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6", color: "#2c3e50" }}>
          As a registered IT institution offering courses in Python, C & C++, JavaScript & Web Development, Artificial Intelligence, Data Science, and more, we're here to help you with your queries and guide your learning journey.
        </p>
      </section>

      {/* Contact Info */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
          backgroundColor:'#2575fc'
        }}
      >
        <h2 style={{ fontSize: "30px", marginBottom: "25px", color: "#1a1a1a" }}>
          Our Contact Details
        </h2>

        <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
          <div style={infoCard}>
            <h3 style={{ fontSize: "24px", marginBottom: "12px", color: "#1a1a1a" }}>📞 Phone</h3>
            <p style={{ fontSize: "18px", fontWeight: "500", color: "#2c3e50" }}>+92 310 585 5299</p>
          </div>
          <div style={infoCard}>
            <h3 style={{ fontSize: "24px", marginBottom: "12px", color: "#1a1a1a" }}>📧 Email</h3>
            <p style={{ fontSize: "18px", fontWeight: "500", color: "#2c3e50" }}>info@idealdigital.com</p>
          </div>
          <div style={infoCard}>
            <h3 style={{ fontSize: "24px", marginBottom: "12px", color: "#1a1a1a" }}>📍 Location</h3>
            <p style={{ fontSize: "18px", fontWeight: "500", color: "#2c3e50" }}>
              Double Road, Near Cricket Stadium, Rawalpindi, Pakistan
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div style={{ marginTop: "50px", maxWidth: "800px", margin: "50px auto 0", textAlign: "left" }}>
          <h3 style={{ fontSize: "24px", marginBottom: "20px", color: "#1a1a1a" }}>Office Hours</h3>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "16px", lineHeight: "1.8", color: "#2c3e50" }}>
            <li><b>Monday - Friday: 9:00 AM - 6:00 PM</b></li>
            <li><b>Saturday: 10:00 AM - 4:00 PM</b></li>
            <li><b>Sunday: Closed</b></li>
          </ul>
        </div>

        <div style={{ marginTop: "40px" }}>
          <h3 style={{ fontSize: "24px", marginBottom: "20px", color: "#1a1a1a" }}>Follow Us on Social Media</h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <a href="https://facebook.com/idealdigital" target="_blank" rel="noopener noreferrer" style={{ color: "#2575fc", fontSize: "28px" }}>📘</a>
            <a href="https://twitter.com/idealdigital" target="_blank" rel="noopener noreferrer" style={{ color: "#2575fc", fontSize: "28px" }}>🐦</a>
            <a href="https://linkedin.com/company/idealdigital" target="_blank" rel="noopener noreferrer" style={{ color: "#2575fc", fontSize: "28px" }}>💼</a>
            <a href="https://instagram.com/idealdigital" target="_blank" rel="noopener noreferrer" style={{ color: "#2575fc", fontSize: "28px" }}>📸</a>
            <a href="https://youtube.com/idealdigital" target="_blank" rel="noopener noreferrer" style={{ color: "#2575fc", fontSize: "28px" }}>🎥</a>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
          background: "rgba(255,255,255,0.9)",
          margin: "0 20px",
          borderRadius: "15px",
        }}
      >
        <h2 style={{ fontSize: "30px", marginBottom: "25px", color: "#1a1a1a" }}>
          Our Location
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.9999999999995!2d73.073707915209!3d33.651527980720!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9675aaaaaaab%3A0x6b172470e60ce3c!2sRawalpindi%20Cricket%20Stadium!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
          width="800"
          height="450"
          style={{ border: 0, maxWidth: "100%", borderRadius: "10px" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p style={{ fontSize: "16px", marginTop: "20px", color: "#2c3e50" }}>
          Visit us at Double Road, Near Cricket Stadium, Rawalpindi for in-person consultations.
        </p>
      </section>

      {/* Form Section */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "25px", color: "#1a1a1a" }}>
          Send Us a Message
        </h2>

        <form
          onSubmit={sendToWhatsApp}
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ ...inputStyle, height: "140px", resize: "none" }}
            required
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#2575fc",
              border: "none",
              padding: "14px 30px",
              fontSize: "16px",
              color: "white",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "20px",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1a5bb3")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#2575fc")}
          >
            Send Message ✉️
          </button>
        </form>
      </section>

      {/* Call to Action */}
      <section
        style={{
          backgroundColor: "#2575fc",
          color: "white",
          padding: "30px",
          borderRadius: "15px",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto 60px",
        }}
      >
        <h2 style={{ fontSize: "26px", marginBottom: "15px" }}>🚀 Start Your Journey Today!</h2>
        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
          Join Ideal Digital Institute and secure your career in IT with our certified courses in Python, C & C++, JavaScript, AI, Data Science, and more.
        </p>
        <Link href="/enroll" passHref>
          <button
            style={{
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              padding: "12px 25px",
              fontSize: "16px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#218838")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#28a745")}
          >
            Enroll Now
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#1a1a1a",
          color: "#ffffff",
          padding: "60px 20px 40px",
          fontFamily: "'Roboto', sans-serif",
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
          © {new Date().getFullYear()} Ideal Digital Institute | All Rights Reserved | <Link href="/privacy" style={{ color: "#ffffff", textDecoration: "none" }}>Privacy Policy</Link> | <Link href="/terms" style={{ color: "#ffffff", textDecoration: "none" }}>DESIGN BY AHMAD SHAHI</Link>
        </div>
      </footer>
    </main>
  );
}

/* ✅ Styles */
const infoCard: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.95)",
  padding: "25px",
  borderRadius: "15px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
  width: "280px",
  textAlign: "center",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px",
  margin: "12px 0",
  border: "1px solid #ddd",
  borderRadius: "8px",
  fontSize: "16px",
  boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
};