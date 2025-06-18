import React, { useState } from "react";
import ProductItem from "../components/ProductItem";
import Sidebar from "../components/Sidebar";
import Header from "../components/header";

// Produk dummy (bisa diganti nanti dengan data dari backend)
const mockProducts = [
  { id: 1, name: "Es Teh", price: 5000 },
  { id: 2, name: "Nasi Goreng", price: 15000 },
  { id: 3, name: "Mie Ayam", price: 12000 },
];

export default function Transaksi() {
  const [cart, setCart] = useState([]);

  // Tambahkan produk ke keranjang
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      return existing
        ? prevCart.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          )
        : [...prevCart, { ...product, qty: 1 }];
    });
  };

  // Hapus produk dari keranjang
  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Hitung total harga
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1">
        <Header />
        <main className="p-6">
          <h2 className="text-2xl font-bold mb-4">Transaksi Kasir</h2>

          {/* List Produk */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {mockProducts.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                onAdd={handleAddToCart}
              />
            ))}
          </div>

          {/* Keranjang */}
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="text-xl font-semibold mb-4">Keranjang</h3>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th>Produk</th>
                  <th>Qty</th>
                  <th>Harga</th>
                  <th>Total</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2">{item.name}</td>
                    <td>{item.qty}</td>
                    <td>Rp {item.price.toLocaleString()}</td>
                    <td>Rp {(item.price * item.qty).toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => {
                          if (window.confirm("Yakin hapus item ini?")) {
                            handleRemoveFromCart(item.id);
                          }
                        }}
                        className="text-red-500 hover:text-red-700"
                      >
                        ❌
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Total dan Tombol Bayar */}
            <div className="text-right font-bold mt-4">
              Total: Rp {total.toLocaleString()}
            </div>
            <button
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              disabled={cart.length === 0}
            >
              Bayar
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
