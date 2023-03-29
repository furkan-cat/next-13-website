import Link from "next/link";
import React from "react";

export default function Movie404() {
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
      <h1>We couldn&apos;t find the movie you looking for!</h1>
      <Link
        href="/"
        style={{ textDecoration: "underline", fontSize: 20, marginTop: 4 }}
      >
        Go Home
      </Link>
    </div>
  );
}
