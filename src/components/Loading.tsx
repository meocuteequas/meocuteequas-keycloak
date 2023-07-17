import React from "react";
import Lottie, { useLottie } from "lottie-react";
import loadingAnimation from "../assets/loading.json";

export default function Loading() {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ height: "calc(100vh - 92px)" }}
    >
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        style={{ height: "300px" }}
      />
    </div>
  );
}
