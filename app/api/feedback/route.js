import { NextResponse } from "next/server";

export async function POST(req, res) {
  const feedback = await req.json();
  return NextResponse.json({ ...feedback, message: "Feedback received" });
}
