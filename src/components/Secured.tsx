import { useKeycloak } from "@react-keycloak/web";
import { ReactNode } from "react";
import NotFound from "../pages/404";
import Loading from "./Loading";
import UnAuthorized from "../pages/403";
import { Roles } from "../types";

const Secured = ({
  children,
  roles,
}: {
  children: ReactNode;
  roles: Roles[];
}) => {
  const { initialized, keycloak } = useKeycloak();
  if (initialized) {
    if (keycloak.authenticated){
      return roles.some((role) => keycloak.hasResourceRole(Roles[role])) ? (
        children
      ) : (
        <UnAuthorized />
      );
    }

    return <NotFound />;
  }

  return <Loading />;
};

export default Secured;
