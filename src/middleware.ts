// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
// import { NextRequest } from 'next/server';

// const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

// export default clerkMiddleware(async (auth, req: NextRequest) => {
//   if (isProtectedRoute(req)) await auth.protect();
// });
// export default

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const authUrl = ['/signin', '/signup', '/forgot-password', '/reset-password'];

export function middleware(request: NextRequest) {
  // const { pathname } = request.nextUrl;

  // Allow the /validate-code route to pass through
  // if (pathname === '/validate-code') {
  //   return NextResponse.next();
  // }

  // Check for the cookie
  const hasToken = request.cookies.get('app_session');

  // If cookie exists, allow access
  if (hasToken) {
    if (authUrl.some((url) => request.nextUrl.pathname.startsWith(url))) {
      // If the user is authenticated and trying to access an auth route, redirect them to the dashboard
      const redirectUrl = new URL('/app', request.url);
      return NextResponse.redirect(redirectUrl);
    }
    return NextResponse.next();
  }

  // If the user is trying to access an auth route, allow them to proceed
  if (authUrl.some((url) => request.nextUrl.pathname.startsWith(url))) {
    return NextResponse.next();
  }

  // If not, redirect to the auth URL
  const redirectUrl = new URL('/signin', request.url);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)'
  ]
};
