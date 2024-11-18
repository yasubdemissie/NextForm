import { getUser, verifySession } from "@/DAL/DataAccessLayer";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const verified = await verifySession();

    if (!verified)
      return NextResponse.json({ error: "Unauthorized", verified: false }, { status: 401 });
    else return NextResponse.json({ Success: true }, { status: 200 });

    // if (!verified) {
    //   console.log("Session not verified:", verified);
    //   return NextResponse.redirect(new URL("/", req.url));
    // }

    // const user = await getUser();

    // return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
