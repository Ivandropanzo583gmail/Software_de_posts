"use client";

import axios from "axios";
import { useEffect, useState } from "react";

type Prod = {
  id: number;
  title: string;
  price: number;
  category: string;
};

export default function Products() {
  const [products, setProducts] = useState<Prod[]>([]);

  useEffect(() => {
    const Produtos = async () => {
      try {
        const response = await axios.get<Prod[]>("https://fakestoreapi.com/products");
        console.log("A resposta da API:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    Produtos();
  }, []);

  return (
    <div className="bg-white w-full max-w-6xl mx-auto h-auto rounded-lg shadow p-6 overflow-x-auto">
      <h1 className="font-semibold text-2xl mb-4 text-gray-800">Top Selling Products</h1>

      <div className="min-w-[640px]">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-gray-500 text-sm">
              <th className="px-4 py-2">PRODUCTS</th>
              <th className="px-4 py-2">PRICE</th>
              <th className="px-4 py-2">CATEGORY</th>
              <th className="px-4 py-2">TOTAL SALES</th>
              <th className="px-4 py-2">STATUS</th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-700">
            {products.map((produtos) => (
              <tr key={produtos.id} className="bg-gray-50 rounded-md shadow-sm">
                <td className="flex items-center gap-2 px-4 py-3 font-medium max-w-[200px] truncate">
                  {produtos.title}
                </td>
                <td className="px-4 py-3">kz {produtos.price.toFixed(2)}</td>
                <td className="px-4 py-3 capitalize">{produtos.category}</td>
                <td className="px-4 py-3">300,000.00</td>
                <td className="px-4 py-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                    IN STOCK
                  </span>
                </td>
              </tr>
            ))}

            {/* Item fixo */}
            <tr className="bg-gray-50 rounded-md shadow-sm">
              <td className="flex items-center gap-2 px-4 py-3 font-medium max-w-[200px] truncate">
                Manjuco masculina
              </td>
              <td className="px-4 py-3">kz 150,000.00</td>
              <td className="px-4 py-3">roupas masculinas</td>
              <td className="px-4 py-3">750.000.00</td>
              <td className="px-4 py-3">
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                  OUT OF STOCK
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
