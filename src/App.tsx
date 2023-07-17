import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Secured from "./components/Secured";

import NotFound from "./pages/404";
import Welcome from "./pages/welcome";
import Whatever from "./pages/dashboard";
import Confidential from "./pages/confidential";
import { Roles } from "./types";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route
          path="/dashboard"
          element={
            <Secured
              roles={[Roles.Manager, Roles.Developer]}
              children={<Whatever />}
            />
          }
        />

        <Route
          path="/confidential"
          element={
            <Secured roles={[Roles.Manager]} children={<Confidential />} />
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
