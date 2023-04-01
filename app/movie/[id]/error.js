"use client";

import Link from "next/link";

export default function MovieError() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 192px)",
      }}
    >
      <h1>An error occured. Sorry for that!</h1>
      <Link
        href="/"
        style={{ textDecoration: "underline", fontSize: 20, marginTop: 4 }}
      >
        Go Home
      </Link>
    </div>
  );
}
