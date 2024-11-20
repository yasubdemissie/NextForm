import { verifySession } from "@/DAL/DataAccessLayer";
import { NextResponse } from "next/server";

export async function GET() {
  const user = {
    name: "John Doe",
    email: "ds@example.com",
    age: 25,
  };

  try {
    const response = await verifySession();
    return NextResponse.json(response);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ ...user, err: err.message });
  }
  // return NextResponse.json(user);
}
