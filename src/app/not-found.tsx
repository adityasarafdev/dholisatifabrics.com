import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist. Return to Shree Dholi Sati Fabrics to explore our industrial bags, tarpaulins, and packaging catalogue.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "96px 24px",
        background: "#f7f7f5",
        color: "#0a0a0a",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 520 }}>
        <p
          style={{
            fontSize: 12,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#737373",
            margin: 0,
          }}
        >
          Error 404
        </p>
        <h1
          style={{
            fontSize: 40,
            fontWeight: 600,
            lineHeight: 1.1,
            margin: "12px 0 16px",
          }}
        >
          Page not found
        </h1>
        <p style={{ color: "#404040", fontSize: 16, lineHeight: 1.55, margin: 0 }}>
          The page you&apos;re looking for has moved or never existed. Head back to the
          catalogue to explore our industrial bags, tarpaulins, and packaging.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            marginTop: 28,
            padding: "12px 22px",
            background: "#0a0a0a",
            color: "#fff",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
