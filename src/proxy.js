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
          if (!token) {
            // Instead of auto redirecting → return false will redirect to /api/auth/signin automatically
            // OR you can rewrite to a custom page
            const url = req.nextUrl.clone();
            url.pathname = "/auth/signin"; // Custom login page
            return NextResponse.redirect(url);
          }
          return true;
        }

        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/add", "/api/food"],
};

