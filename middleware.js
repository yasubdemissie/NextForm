export default async function middleware(req, res, next) {
  const url = req.nextUrl.pathname;
  console.log("Middleware ", url);
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
