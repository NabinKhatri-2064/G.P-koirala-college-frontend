"use client ";

import Caution from "@/app/Components/Caution";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function checkcookies({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookiestore = await cookies();

  const token = cookiestore.get("access_token")?.value;

  if (!token) {
    redirect("/admin/login");
  }

  const checkadmin = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/admin/verify`,
      {
        method: "GET",
        headers: {
          Cookie: `access_token=${token}`,
        },
        cache: "no-store",
      },
    );
    if (!response.ok) {
      redirect("/admin/login");
    }

    const user = await response.json();
    if (user.role !== "ADMIN") {
      redirect("/");
    }
  };

  return (
    <div>
      <Caution />
      {children}
    </div>
  );
}
