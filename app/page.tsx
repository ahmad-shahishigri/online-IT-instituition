"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaLaptopCode, FaUserTie, FaProjectDiagram, FaHeadset } from "react-icons/fa";
import { FaBookOpen, FaCertificate, FaUsers, FaCloud } from "react-icons/fa";


export default function HomePage() {
  // ✅ Background vedeo
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      {/* ✅ Hero Section */}
      <section
        style={{
          position: "relative",
          textAlign: "center",
          padding: "120px 20px",
          color: "white",
          overflow: "hidden",
          minHeight: "90vh",
        }}
      >
        {/* ✅ Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover", // video ko fullscreen cover karega
            zIndex: -1,
            filter: "brightness(0.5) contrast(1.2) saturate(1.2)", 
            // thoda dark + colorful effect taake text readable ho
          }}
        >
          <source src="/bgvedeo.mp4" type="video/mp4" />
        </video>

        {/* ✅ Text Content */}
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            marginBottom: "20px",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          Welcome to Ideal Digital Institute
        </h1>
        <p
          style={{
            fontSize: "22px",
            maxWidth: "750px",
            margin: "0 auto",
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
          }}
        >
          Learn coding, AI, and digital skills from industry experts.
          Build your career with hands-on projects and job opportunities.
        </p>

        <Link href="/enroll">
          <button
            style={{
              marginTop: "40px",
              background: "linear-gradient(135deg, #e67e22, #d35400)",
              border: "none",
              padding: "16px 35px",
              fontSize: "20px",
              color: "white",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              transition: "transform 0.3s, background 0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.08)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            Get Started 🚀
          </button>
        </Link>
      </section>
   
      {/* ✅ Why Choose Us */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#f9f9f9",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "40px", color: "#2c3e50" }}>
          Why Choose Us?
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
            background: "linear-gradient(135deg, #3498db, #9b59b6)"
            // backgroundColor: "#f4f6f9"

           
          }}
        >
          <Card icon={<FaLaptopCode size={40} color="#3498db"/>} title="Hands-on Coding" text="Practical projects to build real-world experience." />
          <Card icon={<FaUserTie size={40} color="#e67e22" />} title="Expert Mentors" text="Learn directly from industry professionals." />
          <Card icon={<FaProjectDiagram size={40} color="#2ecc71" />} title="Career Growth" text="Skills that align with IT jobs & freelancing." />
         <Card icon={<FaHeadset size={40} color="#9b59b6" />} title="24/7 Support" text="Get guidance and support anytime you need." /><br></br>
         <Card 
  icon={<FaBookOpen size={40} color="#f39c12" />} 
  title="Updated Curriculum" 
  text="Always learn the latest tools & technologies." 
/>

<Card 
  icon={<FaCertificate size={40} color="#1abc9c" />} 
  title="Certified Training" 
  text="Get certificates that strengthen your career profile." 
/>

<Card 
  icon={<FaUsers size={40} color="#e74c3c" />} 
  title="Community Learning" 
  text="Be part of a strong network of learners & professionals." 
/>

<Card 
  icon={<FaCloud size={40} color="#2980b9" />} 
  title="Cloud Ready Skills" 
  text="Master modern IT infrastructure & cloud technologies." 
/>

         </div>
      </section>
{/* ✅ Footer */}
<footer
  style={{
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
    padding: "60px 20px 40px",
    marginTop: "60px",
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
       
        <li style={{ marginBottom: "10px" }}><Link href="/contact" style={{ color: "#ffffff", textDecoration: "none", opacity: "0.85" }}>Contact</Link></li>
        <li style={{ marginBottom: "10px" }}><Link href="/enroll" style={{ color: "#ffffff", textDecoration: "none", opacity: "0.85" }}>Enroll Now</Link></li>
     
      </ul>
    </div>

    {/* Contact */}
    <div style={{ flex: "1 1 200px", marginBottom: "30px" }}>
      <h3 style={{ fontSize: "18px", marginBottom: "15px", fontWeight: "bold" }}>Contact Us</h3>
      <p style={{ fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", opacity: "0.85" }}>
        <span style={{ marginRight: "10px" }}>📍</span> Rawalpindi, Islamabad, Pakistan
      </p>
      <p style={{ fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", opacity: "0.85" }}>
        <span style={{ marginRight: "10px" }}>📍</span> Agha Hadi Chock, Skardu
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
     © {new Date().getFullYear()} DESIGN BY | AHMAD SHAHI | <Link href="/privacy" style={{ color: "#ffffff", textDecoration: "none" }}>Privacy Policy</Link> | <Link href="/terms" style={{ color: "blue", textDecoration: "none" }}>DESIGN BY AHMAD SHAHI</Link>

  </div>
</footer>
    </main>
  );
}

/* ✅ Card Component */
function Card({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        width: "250px",
        textAlign: "center",
        transition: "transform 0.3s ease",
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={{ marginBottom: "15px" }}>{icon}</div>
      <h3 style={{ fontSize: "20px", marginBottom: "10px", color: "#2c3e50" }}>{title}</h3>
      <p style={{ fontSize: "14px", color: "#7f8c8d" }}>{text}</p>
    </div>
    
  );<button
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
}
