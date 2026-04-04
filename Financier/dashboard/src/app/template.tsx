"use client";

import { Sidebar } from "@/components/Sidebar";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname.startsWith("/auth") || pathname === "/access-denied") {
    return <>{children}</>;
  }

  return (
    <>
      <Sidebar />
      <main className="flex-1 lg:ml-64">
        {children}
      </main>
    </>
  );
}
