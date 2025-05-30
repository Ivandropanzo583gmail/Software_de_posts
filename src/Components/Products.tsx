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
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Prod[]>("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-white w-full max-w-6xl mx-auto h-auto rounded-lg shadow p-6 overflow-x-auto">
      <h1 className="font-semibold text-2xl mb-4 text-gray-800">Top Selling Products</h1>

      <div className="min-w-[640px]">
        <table className="w-full text-left border-collapse table-auto">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="px-4 py-2 whitespace-nowrap">PRODUCTS</th>
              <th className="px-4 py-2 whitespace-nowrap">PRICE</th>
              <th className="px-4 py-2 whitespace-nowrap">CATEGORY</th>
              <th className="px-4 py-2 whitespace-nowrap">TOTAL SALES</th>
              <th className="px-4 py-2 whitespace-nowrap">STATUS</th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-700">
            {products.map((produtos) => (
              <tr key={produtos.id} className="bg-gray-50 border-b">
                <td
                  className="flex items-center gap-2 px-4 py-3 font-medium max-w-[500px] break-words whitespace-normal"
                  title={produtos.title}
                >
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
            <tr className="bg-gray-50 border-b">
              <td
                className="flex items-center gap-2 px-4 py-3 font-medium max-w-[300px] truncate"
                title="Manjuco masculina"
              >
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
