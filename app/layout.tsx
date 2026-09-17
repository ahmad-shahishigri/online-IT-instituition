import Link from "next/link";
import Image from "next/image"; // ✅ for logo


export const metadata = {
  title: "IT WEBSITES",
  description: "LEARN A CODING WITH EXPERT ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* 🔔 Admission Banner */}
        <div
          style={{
            background: "linear-gradient(90deg, #1e3a8a, #4c1d95)",
            color: "white",
            padding: "8px 0",
            fontWeight: 600,
            fontSize: 14,
            letterSpacing: 0.3,
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          <div
            style={{
              display: "inline-block",
              paddingLeft: "100%",
              animation: "marquee 16s linear infinite",
            }}
          >
            🎓 Limited Seats Available — Admissions are OPEN. Enroll Now &amp; Secure Your Future!
          </div>
        </div>

        {/* Navigation bar */}
        <nav
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 40px",
            background: "#ffffff",
            boxShadow: "0 1px 3px rgba(15, 23, 42, 0.08)",
          }}
        >
          {/* ✅ Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <Link
              href="/"
              style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}
            >
              <Image
                src="/logo.png"
                alt="Ideal Digital Institute logo"
                width={44}
                height={44}
                style={{ borderRadius: 8 }}
              />
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#0f172a",
                  letterSpacing: 0.2,
                }}
              >
                Ideal Digital Institute
              </span>
            </Link>

            {/* ✅ Navigation Links */}
            <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 28 }}>
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
              <Link href="/courses" className="nav-link">
                Courses
              </Link>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </div>
          </div>

          {/* ✅ CTA */}
          <Link href="/admin" className="nav-cta">
            Dashboard
          </Link>
        </nav>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }

          .nav-link {
            color: #334155;
            font-weight: 500;
            font-size: 15px;
            text-decoration: none;
            position: relative;
            padding-bottom: 2px;
            transition: color 0.2s ease;
          }
          .nav-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 0%;
            height: 2px;
            background: #f97316;
            transition: width 0.2s ease;
          }
          .nav-link:hover {
            color: #0f172a;
          }
          .nav-link:hover::after {
            width: 100%;
          }

          .nav-cta {
            background: #f97316;
            color: #ffffff;
            font-weight: 600;
            font-size: 14px;
            text-decoration: none;
            padding: 10px 22px;
            border-radius: 6px;
            transition: background 0.2s ease, transform 0.2s ease;
          }
          .nav-cta:hover {
            background: #ea580c;
            transform: translateY(-1px);
          }

          @media (max-width: 768px) {
            .nav-links { display: none !important; }
          }
        `}</style>

        {/* Page content */}
        <main style={{ padding: "25px" }}>{children}</main>
      </body>
    </html>
  );
}
