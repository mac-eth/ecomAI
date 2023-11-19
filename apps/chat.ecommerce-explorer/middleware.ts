import { NextResponse } from "next/server";

import { auth } from "@ecomai/auth";

export default auth((req) => {
  if (!req.auth?.user?.id && req.nextUrl.pathname !== "/sign-in") {
    return NextResponse.redirect("/sign-in");
  }
  if (req.nextUrl.pathname === "" || req.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/chat", req.nextUrl));
  }
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
