import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Secured from "./components/Secured";

import NotFound from "./pages/404";
import Welcome from "./pages/welcome";
import Whatever from "./pages/dashboard";
import Confidential from "./pages/confidential";
import { Roles } from "./types";
import { useEffect, useState } from "react";
import { supabase } from "./libs/supabaseClient";
import { Session } from "@supabase/supabase-js";
import { createContext } from 'react';

export const AppContext = createContext<Session | null>(null);

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <AppContext.Provider value={session}>
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route
          path="/dashboard"
          element={
            <Secured
              children={<Whatever />}
            />
          }
        />

        <Route
          path="/confidential"
          element={
            <Secured children={<Confidential />} />
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
