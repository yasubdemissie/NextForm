import { NextResponse } from "next/server";
import { getSession } from "./_lib/session";

export async function middleware(req, res) {
  // This is a middleware function
  // It will run before every API route
  const url = req.url;

  if (url !== "/") {
    const session = await getSession();
    if (!session) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  // This is where you can add custom logic
  // or headers to the request
  // or response
  // or handle errors
  // or anything else
  // You can also return a response to stop
  // the request from being passed to the route
  // For example, you can return a 404 response
  // to stop the request from being passed to the route
  // return new Response("Not Found", { status: 404 });
  // If you want to pass the request to the route
}
