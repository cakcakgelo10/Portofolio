import React from "react";
import { FaHome, FaCashRegister, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <aside className="w-64 h-screen bg-blue-600 text-white p-5 fixed">
      <h2 className="text-2xl font-bold mb-8">Kasir App</h2>
      <nav className="space-y-4">
        <Link to="/dashboard" className="flex items-center gap-2 hover:text-gray-300">
          <FaHome /> Dashboard
        </Link>
        <Link to="/transaksi" className="flex items-center gap-2 hover:text-gray-300">
          <FaCashRegister /> Transaksi
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 hover:text-gray-300"
        >
          <FaSignOutAlt /> Logout
        </button>
      </nav>
    </aside>
  );
}
