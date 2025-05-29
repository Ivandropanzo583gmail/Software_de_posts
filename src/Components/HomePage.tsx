"use client";

import { DollarSign, ShoppingCart, Package, Users, LucideIcon } from "lucide-react";
import SalesActivity from "./SalesActivity";
import SalesSources from "./SalesSources";
import Products from "./Products";
import { motion } from "framer-motion";

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
        <h1 className="text-xl font-semibold text-black">Hello Ivandro,</h1>
        <p className="text-gray-500">Here's what's happening in your store</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 text-black">
        {[ 
          { title: "TOTAL SALES", value: "₦715,000", percentage: "+8%", icon: DollarSign },
          { title: "TODAY'S SALES", value: "₦45,000", percentage: "+12%", icon: ShoppingCart },
          { title: "TODAY'S ORDER", value: "29", percentage: "+12%", icon: Package },
          { title: "TODAY'S VISITOR", value: "100", percentage: "-20%", icon: Users, negative: true }
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card {...card} />
          </motion.div>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SalesActivity />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SalesSources />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Products />
        </motion.div>
      </section>
    </div>
  );
}

function Card({ title, value, percentage, negative, icon: Icon }: CardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
      <div>
        <Icon className={`w-6 h-6 ${negative ? "text-red-500" : "text-purple-600"}`} />
      </div>
      <div>
        <h2 className="text-sm text-gray-500 mb-1">{title}</h2>
        <div className="text-xl font-bold">{value}</div>
        <div className={`text-sm ${negative ? "text-red-500" : "text-green-500"}`}>{percentage}</div>
      </div>
    </div>
  );
}
