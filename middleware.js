import { NextResponse } from "next/server";
import { getSession } from "./_lib/session";

export default async function middleware(req, res) {

  const isProtectedRoute = ['/home'];

  // It will run before every API route
  const url = "/" +  req.url.split('/').pop();

  console.log("middleware: " + url);

  if (isProtectedRoute.includes(url)) {

    const session = await getSession();

    console.log(`session: ${session}`);

    if (!session) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
