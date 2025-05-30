"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function RedirectPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const destination = searchParams.get("to") || "/";

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(destination);
    }, 5000);

    return () => clearTimeout(timer);
  }, [destination, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Image
        src="/logo.png"
        alt="Logo"
        width={160}
        height={160}
        priority
        className="animate-fade-in"
      />
    </div>
  );
}
