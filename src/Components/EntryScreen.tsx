"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import HomePage from "./HomePage"; // ajuste o caminho conforme sua estrutura

export default function EntryScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 segundos

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <Image
          src="/logo.png" // coloque sua logo aqui (em public/logo.png)
          alt="Logo"
          width={160}
          height={160}
          priority
          className="animate-fade-in"
        />
      </div>
    );
  }

  return <HomePage />;
}
