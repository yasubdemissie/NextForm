import { NextResponse } from "next/server";
import { verifySession } from "./DAL/DataAccessLayer";
export { auth as middleware } from "@/auth";
export default async function middleware(req) {
  const ProtectedRoutes = ["/home", "/profile", "/feedback"];
  const PublicRoutes = ["/", "/login", "/register"];

  const baseUrl = req.nextUrl.origin;
  const url = req.nextUrl.pathname;
  console.log("URL ", url);
  if (PublicRoutes.includes("/")) {
    const verified = await verifySession();
    if (verified) NextResponse.redirect(`${baseUrl}/home`);
  };

  if (ProtectedRoutes.includes(url)) {
    const verified = await verifySession();

    if (!verified) NextResponse.redirect(baseUrl);
    console.log(baseUrl);
  } else console.log("Public Route ", url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|userImage|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
