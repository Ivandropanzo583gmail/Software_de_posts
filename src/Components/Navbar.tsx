"use client";

import { Bell, Mail } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="h-20 w-full bg-white flex items-center justify-between px-7 shadow z-10 font-[Geist]">
      {/* Título fixo à esquerda */}
      <p className="font-semibold text-xl">Gestão Empresarial</p>

      {/* Ícones e avatar à direita */}
      <div className="flex items-center gap-4">
        <Bell className="text-black hover:bg-gray-200 p-1 rounded-full w-8 h-8 cursor-pointer" />
        <Mail className="text-black hover:bg-gray-200 p-1 rounded-full w-8 h-8 cursor-pointer" />
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <Image
            src="/perfil.png"
            alt="Foto do perfil"
            width={32}
            height={32}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </header>
  );
}
