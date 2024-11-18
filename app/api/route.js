import { getUser, verifySession } from "@/DAL/DataAccessLayer";
import { NextResponse } from "next/server";

export async function GET(req, res, next) {
  const verified = await verifySession();

  if (!verified) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  const user = await getUser();

  return NextResponse.json(user);
}
