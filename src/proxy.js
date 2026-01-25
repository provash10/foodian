import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function proxy(request) {
    const { pathname } = request.nextUrl;

    // Allow /api/food requests to pass through
    if (pathname.startsWith("/api/food")) {
      const response = NextResponse.next();
      response.headers.set("x-proxy-status", "active");
      return response;
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        // Protect /add route
        if (pathname.startsWith("/add")) {
          return !!token;
        }

        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/add", "/api/:path*"],
};