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

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r px-4 py-6 flex flex-col justify-between font-[Geist]">
      <div>
        {/* Navegação principal */}
        <nav className="space-y-2">
          <SidebarItem icon={<Home size={18} />} label="Dashboard" active />
          <SidebarItem icon={<ShoppingCart size={18} />} label="Order" />
          <SidebarItem icon={<Users size={18} />} label="Customer" />
          <SidebarItem icon={<Boxes size={18} />} label="Inventory" />
          <SidebarItem icon={<FileText size={18} />} label="Accounting" />
          <SidebarItem icon={<BarChart size={18} />} label="Report" />
        </nav>

        {/* Canais vinculados */}
        <div className="mt-8">
          <p className="text-xs text-gray-500 mb-2">LINKED CHANNELS</p>
          <nav className="space-y-2">
            <SidebarItem icon={<Facebook size={18} className="text-blue-600" />} label="Facebook" />
            <SidebarItem icon={<Instagram size={18} className="text-pink-600" />} label="Instagram" />
            <button className="flex items-center gap-2 text-sm text-white bg-purple-600 px-3 py-1.5 rounded-md w-full mt-2 hover:bg-purple-700">
              <Plus size={16} />
              Add channel
            </button>
          </nav>
        </div>
      </div>

      {/* Configurações */}
      <div className="space-y-2">
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
    <button
      className={`flex items-center gap-3 text-sm w-full px-3 py-2 rounded-md hover:bg-gray-100 transition ${
        active
          ? "bg-purple-100 text-purple-700 border-l-2 border-purple-600"
          : "text-gray-700"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
