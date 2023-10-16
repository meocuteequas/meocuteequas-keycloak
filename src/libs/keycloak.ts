import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  realm: "meocuteequas",
  clientId: "meocutee-api",
  
  url: "http://localhost:8080/auth",
  
});

export default keycloak;
