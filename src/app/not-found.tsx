// app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-6xl font-bold mb-4 text-gray-800">404</h1>
      <p className="text-xl mb-6 text-gray-600">Oops! Página não disponível de momento.</p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
      >
        Voltar para Home
      </Link>
    </div>
  );
}
