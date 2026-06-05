"use client";
import React from "react";
import Link from "next/link";

export default function CourseInfoPage() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
        backgroundColor: "#f5f6fa",
        minHeight: "100vh",
      }}
    >
      {/* Title Section */}
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "38px", color: "#2c3e50", fontWeight: "bold" }}>
          Certificate in IT (CIT)
        </h1>
        <p style={{ fontSize: "18px", color: "#7f8c8d", maxWidth: "700px", margin: "10px auto" }}>
          This professional program is designed to build strong IT foundations. 
          Students will learn essential computer applications, programming basics, and practical tools to start their IT journey.
        </p>
      </header>

      {/* Course Details Card */}
      <section
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
          padding: "30px",
          maxWidth: "900px",
          margin: "0 auto 40px",
        }}
      >
        <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#2980b9" }}>
          📌 Course Overview
        </h2>
        <p style={{ lineHeight: "1.7", color: "#444" }}>
          In this <b>6-month program</b>, you will gain hands-on skills in office applications, basic programming, and graphic designing. 
          By the end of the course, students will be able to apply IT knowledge in academic, business, and freelancing projects.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginTop: "25px",
          }}
        >
          {/* Duration */}
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "15px",
              borderRadius: "10px",
              borderLeft: "4px solid #3498db",
            }}
          >
            <h3 style={{ marginBottom: "8px", color: "#2c3e50" }}>⏳ Duration</h3>
            <p>6 Months</p>
          </div>

          {/* Fee */}
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "15px",
              borderRadius: "10px",
              borderLeft: "4px solid #e74c3c",
            }}
          >
            <h3 style={{ marginBottom: "8px", color: "#2c3e50" }}>💰 Course Fee</h3>
            <p>Installments: <b>36,000 PKR</b></p>
            <p>Advance: <b>32,000 PKR</b></p>
          </div>

          {/* Modules */}
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "15px",
              borderRadius: "10px",
              borderLeft: "4px solid #27ae60",
              gridColumn: "1 / span 2",
            }}
          >
            <h3 style={{ marginBottom: "8px", color: "#2c3e50" }}>📚 Modules Covered</h3>
            <ul style={{ margin: 0, paddingLeft: "20px" }}>
              <li>MS Office (Word, Excel, PowerPoint)</li>
              <li>C++ Programming (Basics)</li>
              <li>Graphic Designing (1 Module)</li>
              <li>Freelancing Introduction</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section
        style={{
          backgroundColor: "#ecf0f1",
          padding: "30px",
          borderRadius: "12px",
          maxWidth: "900px",
          margin: "0 auto 40px",
        }}
      >
        <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#2980b9" }}>
          🚀 Career Opportunities
        </h2>
        <p style={{ lineHeight: "1.7", color: "#444" }}>
          After completing this course, students can pursue:
        </p>
        <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
          <li>IT Assistant in offices and schools</li>
          <li>Junior Programmer</li>
          <li>Basic Graphic Designer</li>
          <li>Freelancer on Fiverr/Upwork</li>
        </ul>
      </section>

      {/* Buttons */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link href="/enroll">
          <button
            style={{
              backgroundColor: "#e74c3c",
              border: "none",
              color: "white",
              padding: "12px 25px",
              borderRadius: "25px",
              cursor: "pointer",
              marginRight: "15px",
              fontWeight: "bold",
            }}
          >
            Apply Now
          </button>
        </Link>
        <Link href="/courses">
          <button
            style={{
              backgroundColor: "#3498db",
              border: "none",
              color: "white",
              padding: "12px 25px",
              borderRadius: "25px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Back to Courses
          </button>
        </Link>
      </div>
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
    


