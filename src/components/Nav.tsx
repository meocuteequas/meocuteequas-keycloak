import { Link } from "react-router-dom";
import { supabase } from "../libs/supabaseClient";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Nav() {
  const session = useContext(AppContext)

  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "tom@meocuteequas.com",
      password: "123",
    });
  };

  const logout = async () => {};

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

        {session ? (
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
