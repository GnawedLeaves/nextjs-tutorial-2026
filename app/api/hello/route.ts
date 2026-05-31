import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ message: "HELLO BITCH HAYDEN" });
};

export const POST = async (req: Request) => {
  //fake api req for now
  const data = await req.json();
  const { name } = data;
  return NextResponse.json({ message: `POST RES ${name}` });
};
