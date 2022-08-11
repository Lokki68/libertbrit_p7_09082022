import { Route, Routes } from "react-router-dom";

import Container from "./components/Layout/Container/Container.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./components/User/Login.jsx";
import Register from "./components/User/Register.jsx";
import RequireAuth from "./utils/RequireAuth.jsx";
import Annuaire from "./components/Annuaire/Annuaire.jsx";

function App() {
  return (
    <div className="h-[100vh] text-center bg-[url('assets/photo_entreprise.jpg')] bg-center bg-cover">
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth withAuth={true}>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/login"
            element={
              <RequireAuth withAuth={false}>
                <Login />
              </RequireAuth>
            }
          />
          <Route
            path="/register"
            element={
              <RequireAuth withAuth={false}>
                <Register />
              </RequireAuth>
            }
          />
          <Route
            path="/annuaire"
            element={
              <RequireAuth withAuth={true}>
                <Annuaire />
              </RequireAuth>
            }
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
