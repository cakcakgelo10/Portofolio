import React from "react";
import { FaHome, FaCashRegister, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-blue-600 text-white p-5 fixed">
      <h2 className="text-2xl font-bold mb-8">Kasir App</h2>
      <nav className="space-y-4">
        <a href="#" className="flex items-center gap-2 hover:text-gray-300">
          <FaHome /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-gray-300">
          <FaCashRegister /> Transaksi
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-gray-300">
          <FaSignOutAlt /> Logout
        </a>
      </nav>
    </aside>
  );
}
