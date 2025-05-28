"use client";

import { DollarSign, ShoppingCart, Package, Users, LucideIcon } from "lucide-react";
import SalesActivity from "./SalesActivity";
import SalesSources from "./SalesSources"; 
import Products from "./Products";



interface CardProps {
  title: string;
  value: string;
  percentage: string;
  negative?: boolean;
  icon: LucideIcon;
}

export default function HomePage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen font-[Geist]">
      <header className="mb-6">
        <h1 className="text-xl font-semibold">Hello Ivandro,</h1>
        <p className="text-gray-500">Here's what's happening in your store</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card title="TOTAL SALES" value="₦715,000" percentage="+8%" icon={DollarSign} />
        <Card title="TODAY'S SALES" value="₦45,000" percentage="+12%" icon={ShoppingCart} />
        <Card title="TODAY'S ORDER" value="29" percentage="+12%" icon={Package} />
        <Card title="TODAY'S VISITOR" value="100" percentage="-20%" negative icon={Users} />
      </section>

      <section className="grid grid-cols-1 gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          <SalesActivity />
          <SalesSources />
        </div>

        <div className="flex justify-center">
          <Products />
        </div>
      </section>

    </div>
  );
}

function Card({ title, value, percentage, negative, icon: Icon }: CardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
      <div><Icon className={`w-6 h-6 ${negative ? 'text-red-500' : 'text-purple-600'}`} /></div>
      <div>
        <h2 className="text-sm text-gray-500 mb-1">{title}</h2>
        <div className="text-xl font-bold">{value}</div>
        <div className={`text-sm ${negative ? 'text-red-500' : 'text-green-500'}`}>{percentage}</div>
      </div>

    
    </div>
  );


















































































































































}
{/*     <div className="w-full h-screen bg-gray-200 font-[Geist]">
        <div className="md: ml-20 pt-20">
            <h1 className="font-bold text-xl ">Olá, Ivandro Panzo</h1>
            <p className="text-gray-400 text-sm ">Bem-vindo ao sistema de posts</p>
        </div>
        <div className="pt-20 flex flex-wrap justify-center gap-6 px-4">
        
          <div className="w-60 h-24 bg-white rounded-md flex flex-col items-center justify-center shadow-md">
            <DollarSign className="text-green-500 w-6 h-6 mb-1" />
            <p className="text-gray-400 text-sm">Total Sales</p>
            <h1 className="font-bold text-black text-xl">715,000</h1>
          </div>
  
          <div className="w-60 h-24 bg-white rounded-md flex flex-col items-center justify-center shadow-md">
            <ShoppingCart className="text-blue-500 w-6 h-6 mb-1" />
            <p className="text-gray-400 text-sm">Today&apos;s Sales</p>
            <h1 className="font-bold text-black text-xl">45,000</h1>
          </div>
  
        
          <div className="w-60 h-24 bg-white rounded-md flex flex-col items-center justify-center shadow-md">
            <ClipboardList className="text-yellow-500 w-6 h-6 mb-1" />
            <p className="text-gray-400 text-sm">Today&apos;s Orders</p>
            <h1 className="font-bold text-black text-xl">29</h1>
          </div>
  
         
          <div className="w-60 h-24 bg-white rounded-md flex flex-col items-center justify-center shadow-md">
            <Users className="text-purple-500 w-6 h-6 mb-1" />
            <p className="text-gray-400 text-sm">Today&apos;s Visitors</p>
            <h1 className="font-bold text-black text-xl">100</h1>
          </div>
        </div>
      </div> */}