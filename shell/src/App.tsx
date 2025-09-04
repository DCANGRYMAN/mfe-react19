import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import { lazy, Suspense } from "react";
import { useAuth } from "./context/AuthContext";

const Micro2App = lazy(() => import("../micro2/src/App.tsx"));

export default function App() {
  const { user, login, logout } = useAuth();

  return (
    <Router>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/micro2">Micro2</Link>
      </nav>

      {user ? (
        <div>
          <p>Bem-vindo, {user}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Você não está logado.</p>
          <button onClick={() => login("Darlan")}>Login</button>
        </div>
      )}

      <Routes>
        <Route path="/" element={<h1>Shell Home</h1>} />
        <Route
          path="/micro2"
          element={
            user ? (
              <Suspense fallback={<div>Carregando Micro2...</div>}>
                <Micro2App />
              </Suspense>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}
