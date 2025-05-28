// Products.tsx
import axios from 'axios';
import { ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

type Prod = {
  id:number,
  title:string,
  price:number,
  category:string,
}

export default function Products() {

  const [products, setProducts ] = useState<Prod[]>([]);

  useEffect(() => {
    const Produtos = async() => {
      try{
        const response = await axios.get<Prod[]>("https://fakestoreapi.com/products");
        console.log("A resposta da API:",response.data)
        setProducts(response.data);
      }catch(error){
        console.error(error);
      }
    }
    Produtos();
  }, [])
  return (
    <div className="bg-white w-full max-w-6xl mx-auto h-auto rounded-lg shadow p-6">
      <h1 className="font-semibold text-2xl mb-4 text-gray-800">Top Selling Products</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-gray-500 text-sm">
              <th className="px-4 py-2">PRODUCTS</th>
              <th className="px-4 py-2">PRICE</th>
              <th className="px-4 py-2">ITEM SOLD</th>
              <th className="px-4 py-2">TOTAL SALES</th>
              <th className="px-4 py-2">STATUS</th>
            </tr>
          </thead>
          

          <tbody className="text-sm text-gray-700">
            {products.map((produtos) => (
            <tr key={produtos.id} className="bg-gray-50 rounded-md shadow-sm">
              <td className="flex items-center gap-2 px-4 py-3 font-medium">
                {produtos.title}
              </td>
              <td className="px-4 py-3">{produtos.price}</td>
              <td className="px-4 py-3">{produtos.category}</td>
              <td className="px-4 py-3">300,000.00</td>
              <td className="px-4 py-3">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">OPEN</span>
              </td>
              
            </tr>
            ))}
            {/* Exemplo de mais um item */}
            <tr className="bg-gray-50 rounded-md shadow-sm">
              <td className="flex items-center gap-2 px-4 py-3 font-medium">
               
                Manjuco
              </td>
              <td className="px-4 py-3">150,000.00</td>
              <td className="px-4 py-3">5</td>
              <td className="px-4 py-3">750,000.00</td>
              <td className="px-4 py-3">
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">PENDING</span>
              </td>
            </tr>
             
          </tbody>
        </table>
      </div>
    </div>
  );
}
//https://fakestoreapi.com/docs