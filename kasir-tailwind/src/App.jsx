import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Transaksi from "./pages/Transaksi";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Lindungi halaman berikut */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transaksi"
          element={
            <ProtectedRoute>
              <Transaksi />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
