import React from "react";

export default function UnAuthorized() {
  return (
    <div
      className="flex flex-col items-center justify-center px-16"
      style={{ height: "calc(100vh - 92px)" }}
    >
      <h1 className="text-[300px] font-bold text-center text-red-400">403</h1>
      <h1 className="text-6xl text-center">
        Sorry, it seems you've wandered off the trail. You don't have permission
        to access this page. Let's guide you back to familiar terrain.
      </h1>
      <h1
        onClick={() => (window.location.href = "/")}
        className="text-6xl text-center mt-8 font-semibold cursor-pointer"
        style={{ textDecoration: "underline" }}
      >
        Back to home
      </h1>
    </div>
  );
}
