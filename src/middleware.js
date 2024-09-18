import { withAuth } from "next-auth/middleware";

// middleware is applied to all routes, use conditionals to select
export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ req, token }) => {
      if (req.nextUrl.pathname.startsWith("/app") && token === null) {
        return false;
      }
      return true;
    },
  },
});

// export function middleware(request) {
//   return NextResponse.redirect(new URL("/home", request.url));
// }

export const config = {
  matcher: "/app/:page*",
};
