"use client";

import Caution from "@/app/Components/Caution";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Adminpanelskeleton from "./components/Adminpanelskeleton";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    async function verifyAdmin() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/verify`,
          {
            credentials: "include",
          },
        );

        if (!response.ok) {
          router.replace("/admin/login");
          return;
        }

        setChecking(false);
      } catch {
        router.replace("/admin/login");
      }
    }

    verifyAdmin();
  }, [router]);

  if (checking) return <Adminpanelskeleton/>
    

  return (
    <div>
      <div>
        <Caution />
        {children}
      </div>
    </div>
  );
}
