"use client";
import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main
      style={{
        fontFamily: "'Roboto', sans-serif",
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          color: "#1a1a1a",
        }}
      >
        <h1 style={{ fontSize: "42px", fontWeight: "bold", marginBottom: "15px" }}>
          About Ideal Digital Institute
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6", color: "#2c3e50" }}>
          Ideal Digital Institute is a registered educational platform dedicated to equipping students with modern digital skills and programming languages. Our mission is to empower students to become experts in technology and coding, while creating job opportunities for them.
        </p>
      </section>

      {/* Mission & Vision */}
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
          🎯 Mission & Vision
        </h2>
        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto", lineHeight: "1.7", color: "#2c3e50" }}>
          Our mission is to prepare every student for the digital world by providing strong coding skills. Our vision is for students to learn practical projects and market-demand skills to build their careers.
        </p>
      </section>
      {/* Why Choose Us */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
          background: "rgba(255,255,255,0.9)",
          margin: "0 20px",
          borderRadius: "15px",
        }}
      >
        <h2 style={{ fontSize: "30px", marginBottom: "30px", color: "#1a1a1a" }}>
          ✨ Why Choose Us?
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <div style={infoCard}>
            <h3 style={{ fontSize: "22px", marginBottom: "10px", color: "#1a1a1a" }}>
              Registered & Trusted Institute
            </h3>
            <p style={{ fontSize: "16px", color: "#2c3e50" }}>
              A certified platform with a proven track record in IT education.
            </p>
          </div>
          <div style={infoCard}>
            <h3 style={{ fontSize: "22px", marginBottom: "10px", color: "#1a1a1a" }}>
              Expert Teachers & Instructors
            </h3>
            <p style={{ fontSize: "16px", color: "#2c3e50" }}>
              Industry professionals delivering high-quality training.
            </p>
          </div>
          <div style={infoCard}>
            <h3 style={{ fontSize: "22px", marginBottom: "10px", color: "#1a1a1a" }}>
              Practical Training with Real Projects
            </h3>
            <p style={{ fontSize: "16px", color: "#2c3e50" }}>
              Hands-on experience to build portfolios and skills.
            </p>
          </div>
          <div style={infoCard}>
            <h3 style={{ fontSize: "22px", marginBottom: "10px", color: "#1a1a1a" }}>
              Job Opportunities & Career Guidance
            </h3>
            <p style={{ fontSize: "16px", color: "#2c3e50" }}>
              Support for placements and professional development.
            </p>
          </div>
          <div style={infoCard}>
            <h3 style={{ fontSize: "22px", marginBottom: "10px", color: "#1a1a1a" }}>
              Affordable Fees + Certificates
            </h3>
            <p style={{ fontSize: "16px", color: "#2c3e50" }}>
              Value-driven education with recognized certifications.
            </p>
          </div>
        </div>
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
          margin: "40px auto",
        }}
      >
        <h2 style={{ fontSize: "26px", marginBottom: "15px" }}>
          🚀 Start Your Journey Today!
        </h2>
        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
          Join Ideal Digital Institute and secure your career in IT.
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