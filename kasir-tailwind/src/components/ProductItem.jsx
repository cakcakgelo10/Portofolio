import React from "react";

export default function ProductItem({ product, onAdd }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-md">
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-500">Rp {product.price.toLocaleString()}</p>
      <button
        onClick={() => onAdd(product)}
        className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
      >
        Tambah
      </button>
    </div>
  );
}
