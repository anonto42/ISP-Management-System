import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth({
    callbacks: {
        authorized: ({ token, req }) => {
            const pathname = req.nextUrl.pathname;

            // Allow unauthenticated access to auth-related routes
            if (
                pathname.startsWith("/api/auth") ||
                pathname === "/auth" ||
                pathname === "/register"
            ) {
                return true;
            }

            // Allow unauthenticated access to the homepage and video APIs
            if (pathname === "/" || pathname.startsWith("/api/videos")) {
                return true;
            }

            // Otherwise, require authentication
            return !!token;
        }
    }
});

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico|public).*)"]
};
