import { NextRequest } from "next/server"
import getSession from "./lib/session"
import { AUTH_ROUTES, PROFILE_ROUTE } from "./lib/constants"

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const session = await getSession()
  const isLoggedIn = !!session?.id
  console.log(
    "middleware ",
    pathname,
    isLoggedIn ? "(Logged in user)" : "(guest)"
  )

  // Protect private routes
  const isPrivatePage = !AUTH_ROUTES[pathname]
  if (isPrivatePage) {
    if (isLoggedIn) {
      // Allow logged in users to access private routes
      return null
    }
    // Redirect unauthenticated users to the login page
    return Response.redirect(new URL("/", request.nextUrl.origin))    
  }

  // Redirect Public routes logged in users to the profile page
  if (isLoggedIn) {
    return Response.redirect(new URL(PROFILE_ROUTE, request.nextUrl.origin))
  }
  
  // Allow public routes to be accessed without authentication
  return null
}

// Don't invoke Middleware on some paths
// https://clerk.com/docs/references/nextjs/auth-middleware
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
}
