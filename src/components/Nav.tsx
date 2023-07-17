import { useKeycloak } from "@react-keycloak/web";
import { Link } from "react-router-dom";

export default function Nav() {
  const { keycloak } = useKeycloak();

  const login = () =>
    keycloak.login({
      scope: "videos_read",
      redirectUri: "http://localhost:5173/secured",
    });

  const logout = async () =>
    keycloak.logout({ redirectUri: "http://localhost:5173/" });

  return (
    <div className="flex justify-between items-center text-4xl font-semibold w-screen p-4 px-16">
      <Link to="/" className="cursor-pointer text-6xl text-red-400 font-bold">
        meocuteequas-react-app
      </Link>
      <div className="flex">
        <Link
          to="/confidential"
          className="me-8"
          style={{ textDecoration: "underline" }}
        >
          Confidential
        </Link>

        <Link
          to="/dashboard"
          className="me-8"
          style={{ textDecoration: "underline" }}
        >
          Dashboard
        </Link>

        {keycloak.authenticated ? (
          <div
            className="cursor-pointer  me-8"
            onClick={logout}
            style={{ textDecoration: "underline" }}
          >
            Logout
          </div>
        ) : (
          <div
            className="cursor-pointer"
            onClick={login}
            style={{ textDecoration: "underline" }}
          >
            Login
          </div>
        )}
      </div>
    </div>
  );
}
