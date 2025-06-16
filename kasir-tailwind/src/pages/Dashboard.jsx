import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/header";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1">
        <Header />
        <main className="p-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Selamat datang di dashboard!</h2>
            <p className="text-gray-600">Di sini kamu bisa melihat ringkasan transaksi atau menu kasir.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
