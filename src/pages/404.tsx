import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center px-16"
      style={{ height: "calc(100vh - 92px)" }}
    >
      <h1 className="text-[300px] font-bold text-center text-red-400">404</h1>
      <h1 className="text-6xl text-center">
        Oops! The page you're looking for has taken a detour.
      </h1>
      <Link
        to="/"
        className="text-6xl text-center mt-8 font-semibold cursor-pointer"
        style={{ textDecoration: "underline" }}
      >
        Go to home
      </Link>
    </div>
  );
}
