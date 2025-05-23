"use client";

import { Bell, Mail } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="h-20 w-full bg-white flex justify-end items-center pr-7 shadow z-10 font-[Geist]">
      <div className="flex items-center gap-4">
        <Bell className="text-black hover:bg-gray-200 hover:rounded-full" />
        <Mail className="text-black hover:bg-gray-200 hover:rounded-full" />
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
