"use client";
import React from "react";
import Link from "next/link";

export default function CoursesPage() {
  const courses = [
    {
      title: "Certificate in IT",
      feeInstall: "36,000/- PKR",
      feeAdvance: "32,000/- PKR",
      duration: "6 Months",
      modules: ["Ms Office", "C++", "Graphic 1 Module"],
      icon: "CIT",
    },
    {
      title: "C#",
      feeInstall: "25,000/- PKR",
      feeAdvance: "18,000/- PKR",
      duration: "3 Months",
      modules: ["Basic C#", "Visual Programming", "Setup of Software"],
      icon: "C#",
    },
    {
      title: "Adobe Illustrator",
      feeInstall: "12,000/- PKR",
      feeAdvance: "9,000/- PKR",
      duration: "1 Month",
      modules: ["Flyer Designing", "Visiting Card Designing", "Logo Designing"],
      icon: "Ai",
    },
    {
      title: "Artificial Intelligence",
      feeInstall: "45,000/- PKR",
      feeAdvance: "40,000/- PKR",
      duration: "4 Months",
      modules: ["Machine Learning", "Deep Learning", "AI Tools"],
      icon: "AI",
    },
    {
      title: "Web Development",
      feeInstall: "30,000/- PKR",
      feeAdvance: "25,000/- PKR",
      duration: "3 Months",
      modules: ["HTML, CSS, JS", "React.js", "Next.js"],
      icon: "🌐",
    },
    {
      title: "Data Science",
      feeInstall: "50,000/- PKR",
      feeAdvance: "45,000/- PKR",
      duration: "5 Months",
      modules: ["Python", "Pandas & Numpy", "Data Visualization"],
      icon: "📊",
    },
  ];

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
        backgroundColor: "#f5f6fa",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#2c3e50" }}>
        <b><u>Our Courses</u></b>
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
        }}
      >
        {courses.map((course, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
              overflow: "hidden",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            {/* Top Icon */}
            <div
              style={{
                backgroundColor: "#3498db",
                padding: "20px",
                borderBottomLeftRadius: "50%",
                borderBottomRightRadius: "50%",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "#e74c3c",
                  border: "2px solid red",
                }}
              >
                {course.icon}
              </div>
            </div>

            {/* Title */}
            <h2 style={{ color: "#2980b9", margin: "20px 0 10px" }}>
              {course.title}
            </h2>

            {/* Fee */}
            <p style={{ color: "red", fontWeight: "bold" }}>
              Total Fee that Pay in Installment <br />
              {course.feeInstall}
            </p>
            <p style={{ fontWeight: "bold", color: "red" }}>
              Discounted Fee if Pay in Advance <br />
              {course.feeAdvance}
            </p>

            {/* Modules */}
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "10px" }}>
              {course.modules.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>

            {/* Duration */}
            <p style={{ color: "red", fontWeight: "bold" }}>
              Course Duration: {course.duration}
            </p>

            <p style={{ fontWeight: "bold" }}>
              Start Freelancing with this course
            </p>
            <div style={{ marginTop: "10px" }}>
               <Link href="/courses/courseinfo">
              <button
                style={{
                  backgroundColor: "red",
                  border: "none",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                Course Detail
              </button></Link>
              <Link href="/enroll">
                <button
                  style={{
                    backgroundColor: "blue",
                  border: "none",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  marginRight: "10px",
                  }}
                >
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        ))}
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
