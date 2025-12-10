import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('/1513-hero-pic.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Soft overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.45)",
          backdropFilter: "blur(3px)",
        }}
      />

      {/* Content card */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          background: "rgba(255, 255, 255, 0.92)",
          padding: "40px 50px",
          borderRadius: "14px",
          width: "90%",
          maxWidth: "480px",
          textAlign: "center",
          boxShadow: "0px 8px 24px rgba(0,0,0,0.25)",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            marginBottom: "10px",
            color: "#3b3b3b",
            letterSpacing: "1px",
            fontWeight: 600,
          }}
        >
          Page Not Found
        </h1>

        <p
          style={{
            fontSize: "18px",
            marginBottom: "25px",
            color: "#5a5a5a",
            lineHeight: "1.6",
          }}
        >
          The page you're looking for doesn't seem to exist.<br />
          Let's get you back to something beautiful.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "12px 28px",
            borderRadius: "8px",
            backgroundColor: "#b68b5e", // Stone Creek accent color
            color: "white",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: 500,
            transition: "background 0.25s ease",
          }}
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
