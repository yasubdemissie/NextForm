import { getUser, verifySession } from "@/DAL/DataAccessLayer";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const verified = await verifySession();

    if (!verified) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // const user = await getUser();

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
