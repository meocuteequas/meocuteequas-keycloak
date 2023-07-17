import React from "react";
import ReactDOM from "react-dom/client";

import keycloak from "./libs/keycloak.js";
import { ReactKeycloakProvider } from "@react-keycloak/web";

import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ReactKeycloakProvider
    authClient={keycloak}
    autoRefreshToken={true}
    initOptions={{
      onLoad: "check-sso",
      silentCheckSsoRedirectUri:
        window.location.origin + "/silent-check-sso.html",
      pkceMethod: "S256",
    }}
  >
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ReactKeycloakProvider>
);
