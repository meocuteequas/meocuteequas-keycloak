import React, { useEffect } from "react";
export default function Welcome() {
  return (
    <div
      className="flex flex-col items-center justify-center px-16"
      style={{ height: "calc(100vh - 92px)" }}
    >
      <h1 className="text-[300px] font-bold text-center text-blue-400">
        Welcome!
      </h1>
      <h1 className="text-6xl text-center mb-8">
        We're thrilled to have you here. We've worked hard to create a place
        where you can explore, connect, and grow. Dive in and let's make
        something extraordinary together!
      </h1>
    </div>
  );
}
