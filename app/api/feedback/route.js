import { NextResponse } from "next/server";

export async function GET() {
  //   const feedback = await req.json();
  return NextResponse.status(200).json({ message: "Feedback received" });
}
