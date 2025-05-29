"use client";

import {
  Home,
  ShoppingCart,
  Users,
  Boxes,
  FileText,
  BarChart,
  Facebook,
  Instagram,
  Plus,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Sidebar() {
  const pathname = usePathname();

  const mainLinks = [
    { href: "/", icon: <Home size={18} />, label: "Dashboard" },
    { href: "/order", icon: <ShoppingCart size={18} />, label: "Order" },
    { href: "/Client", icon: <Users size={18} />, label: "Customer" },
    { href: "/inventory", icon: <Boxes size={18} />, label: "Inventory" },
    { href: "/accounting", icon: <FileText size={18} />, label: "Accounting" },
    { href: "/report", icon: <BarChart size={18} />, label: "Report" },
  ];

  return (
    <aside className="bg-white border-t md:border-r md:border-t-0 w-full md:w-64 h-16 md:h-screen px-4 py-2 md:py-6 flex md:flex-col justify-between fixed bottom-0 md:static z-50 font-[Geist]">
      {/* Conteúdo principal */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex md:flex-col w-full justify-around md:justify-start md:items-stretch md:space-y-1"
      >
        {mainLinks.map((link) => (
          <Link key={link.href} href={link.href} className="w-full">
            <SidebarItem
              icon={link.icon}
              label={link.label}
              active={pathname === link.href}
            />
          </Link>
        ))}
      </motion.div>

      {/* Canais vinculados - só visíveis em telas médias para cima */}
      <div className="hidden md:block mt-8">
        <p className="text-xs text-gray-500 mb-2">LINKED CHANNELS</p>
        <nav className="space-y-2">
          <SidebarItem
            icon={<Facebook size={18} className="text-blue-600" />}
            label="Facebook"
          />
          <SidebarItem
            icon={<Instagram size={18} className="text-pink-600" />}
            label="Instagram"
          />
          <button className="flex items-center gap-2 text-sm text-white bg-purple-600 px-3 py-1.5 rounded-md w-full mt-2 hover:bg-purple-700">
            <Plus size={16} />
            Add channel
          </button>
        </nav>
      </div>

      {/* Configurações - só visíveis em telas médias para cima */}
      <div className="hidden md:block space-y-2 mt-8">
        <SidebarItem icon={<Settings size={18} />} label="Settings" />
        <SidebarItem icon={<LogOut size={18} />} label="Log out" />
      </div>
    </aside>
  );
}

function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-1.5 md:gap-3 text-xs md:text-sm w-full px-1 md:px-3 py-2 rounded-md transition cursor-pointer
        ${
          active
            ? "text-purple-700 bg-purple-100 border-l-0 md:border-l-2 border-purple-600"
            : "text-gray-700 hover:bg-gray-100"
        }`}
    >
      {icon}
      <span className="md:inline">{label}</span>
    </div>
  );
}
