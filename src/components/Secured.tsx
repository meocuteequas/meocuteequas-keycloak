import { ReactNode, useContext } from "react";
import UnAuthorized from "../pages/403";
import { AppContext } from "../App";

const Secured = ({ children }: { children: ReactNode }) => {
  const session = useContext(AppContext);
  return session ? children : <UnAuthorized />;
};

export default Secured;
