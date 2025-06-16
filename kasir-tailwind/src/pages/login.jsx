// src/pages/Login.jsx
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form login:", form);
    // TODO: Kirim ke API login di backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-md w-full max-w-4xl flex">
        {/* Gambar kiri */}
        <div className="hidden md:flex w-1/2 bg-blue-500 items-center justify-center text-white p-6 rounded-l-lg">
          <h2 className="text-2xl font-bold">Kasir App</h2>
        </div>

        {/* Form login */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-2xl font-bold mb-6">Login</h1>
          <form onSubmit={handleSubmit}>
            <Input
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Masukkan email"
            />
            <Input
              label="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Masukkan password"
            />
            <Button type="submit" text="Login" />
          </form>

          <p className="mt-4 text-sm">
            Belum punya akun?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Daftar di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
