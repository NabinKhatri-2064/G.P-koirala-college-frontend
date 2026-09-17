import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const credentials = await req.json();
  console.log(credentials);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/login`,
    {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Api Error:${response.statusText}`);
  }

  const data = await response.json();
  console.log(data);


  const nextResponse = NextResponse.json("Logged in Successfully");

  nextResponse.cookies.set("access_token", data.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV ==="production",
    sameSite: "lax",
    maxAge: 15*60,
    path: "/"
  });

  return nextResponse;
}
