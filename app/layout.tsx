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
    background: "linear-gradient(90deg, #e74c3c, #f39c12, #27ae60, #2980b9)",
    color: "white",
    padding: "10px 0",
    fontWeight: "bold",
    overflow: "hidden",
    whiteSpace: "nowrap",
    boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
  }}
>
  <div
    style={{
      display: "inline-block",
      paddingLeft: "100%",
      animation: "marquee 8s linear infinite",
      textShadow: "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6)",
    }}
  >
    🎓 Limited Seats Available! ✨ Admissions are OPEN 🚀 Enroll Now & Secure Your Future!
  </div>

  <style>{`
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-100%); }
    }
  `}</style>
</div>

        {/* Navigation bar */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px",
            background: "#801717ff",
          }}
        >
          {/* ✅ Logo */}
          <Link href="/" style={{ marginRight: "30px" }}>
            <Image
              src="/logo.png" // apna logo public folder me rakho e.g. public/logo.png
              alt="Logo"
              width={60}
              height={60}
              style={{ borderRadius: "7px" }}
            />
          </Link>

          {/* ✅ Navigation Links */}
          <b>
            <Link href="/" style={{ marginRight: "15px", color: "yellowgreen" }}>
              Home
            </Link>
          </b>
          <b>
            <Link
              href="/about"
              style={{ marginRight: "15px", color: "yellowgreen", fontSize: 20 }}
            >
              About
            </Link>
          </b>
          <Link
            href="/courses"
            style={{ marginRight: "15px", color: "yellowgreen", fontSize: 20 }}
          >
            Courses
          </Link>
          <b>
            <Link href="/contact" style={{ color: "yellowgreen",fontSize:20,marginRight:700 }}>
              Contact
            </Link>
          </b>
          <b>
            <Link href="/admin" style={{ color: "yellowgreen",fontSize:20,marginRight:15 }}>
              Dashboard
            </Link>
          </b>
          <b>
            <a
              href="mailto:shahibalti@gmail.com"
              style={{ color: "yellowgreen", fontSize: 20 }}
              title="For any query gmail : shahibalti@gmail.com"
            >
              Help (For any query gmail : shahibalti@gmail.com)
            </a>
          </b>
        </nav>

        {/* Page content */}
        <main style={{ padding: "25px" }}>{children}</main>
      </body>
    </html>
  );
}
