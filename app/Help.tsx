"use client";

import { useState } from "react";

export default function Help() {
  const [open, setOpen] = useState(false);

  return (
    <span style={{ position: "relative" }}>
      <b>
        <span
          onClick={() => setOpen((prev) => !prev)}
          style={{ color: "yellowgreen", fontSize: 20, cursor: "pointer" }}
        >
          Help
        </span>
      </b>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "35px",
            right: 0,
            background: "white",
            color: "#801717ff",
            padding: "15px",
            borderRadius: "7px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
            whiteSpace: "nowrap",
            zIndex: 10,
          }}
        >
          WhatsApp msg only for any query :: 0349552565
        </div>
      )}
    </span>
  );
}
