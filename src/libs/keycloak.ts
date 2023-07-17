import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  realm: "dc-20",
  clientId: "meocuteequas-react-app",
  url: "https://meocuteequas-keycloak.azurewebsites.net/auth",
  
});

export default keycloak;
