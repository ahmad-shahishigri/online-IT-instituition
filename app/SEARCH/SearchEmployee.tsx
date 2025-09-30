"use client";
import { useState } from "react";

export default function SearchEmployee() {
  // Employee data (example 10, aap 50 bana sakte ho)
  const employees = [
    { name: "Ali Khan", phone: "0300-1234567" },
    { name: "Sara Ahmed", phone: "0301-9876543" },
    { name: "Usman Malik", phone: "0302-4567890" },
    { name: "Ayesha Noor", phone: "0303-1122334" },
    { name: "Bilal Hussain", phone: "0304-2233445" },
    { name: "Hina Tariq", phone: "0305-5566778" },
    { name: "Zeeshan Raza", phone: "0306-9988776" },
    { name: "Maryam Khan", phone: "0307-4433221" },
    { name: "Imran Ali", phone: "0308-1112223" },
    { name: "Sadia Sheikh", phone: "0309-7654321" },
  ];

  const [query, setQuery] = useState("");
  const [result, setResult] = useState<{ name: string; phone: string } | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    const found = employees.find(
      (emp) => emp.name.toLowerCase() === query.toLowerCase()
    );

    if (found) {
      setResult(found);
      setNotFound(false);
    } else {
      setResult(null);
      setNotFound(true);
    }
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <input
        type="text"
        placeholder="Employee ka naam likho..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "5px 10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginRight: "10px",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "6px 12px",
          background: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Search
      </button>

      {/* Result Section */}
      <div style={{ marginTop: "15px" }}>
        {result && (
          <p>
            <b>{result.name}</b> ka number: {result.phone}
          </p>
        )}
        {notFound && <p style={{ color: "red" }}>Is naam ka koi record nahi hai ❌</p>}
      </div>
    </div>
  );
}
