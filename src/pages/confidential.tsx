import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import keycloak from "../libs/keycloak";

export default function Confidential() {
  const { keycloak } = useKeycloak();

  const doThings = () => {
    fetch("https://localhost:7227/media/videos", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${keycloak.token}`,
      },
    })
      .then((response) => response.json())
      .then(console.log);
  };

  return (
    <div
      className="flex flex-col items-center justify-center px-16"
      style={{ height: "calc(100vh - 92px)" }}
    >
      <h1
        onClick={doThings}
        className="text-[300px] font-bold text-center text-green-400"
      >
        Success!
      </h1>
      <h1 className="text-6xl text-center mb-8">
        You're securely logged in. Now, let's unlock new opportunities and make
        the most of your journey with us. Enjoy exploring!
      </h1>
    </div>
  );
}
