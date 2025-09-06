"use client";
import Image from "next/image";

export default function LoadingScreen({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <Image
        src="/gkologo.png"
        alt="GKO Logo"
        width={80}
        height={80}
        className="animate-pulse"
      />
    </div>
  );
}
