import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";

function App() {
  const [user, setUser] = useState(null);

  //useeffect for getuser
  useEffect(() => {
    const u = localStorage.getItem("user");
    u && JSON.parse(u) ? setUser(true) : setUser(false);
  }, []);

  //useeffect for set user
  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);
  const handleLogout = () => {
    setUser(false);
  };
  return (
    <>
      <Routes>
        {!user && (
          <Route path="/" element={<Auth auth={() => setUser(true)} />} />
        )}

        {user && (
          <>
            <Route
              path="/profile"
              element={<Profile handleLogout={handleLogout} />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
          </>
        )}
        <Route path="*" element={<Navigate to={user ? "/profile" : "/"} />} />
      </Routes>
    </>
  );
}

export default App;
