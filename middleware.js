
import { NextResponse } from 'next/server';

// Define protected routes that require authentication
const protectedRoutes = [
  '/RoadmapPage',
  '/Courses',
  '/CareerGuidance',
  '/Docs',
  '/TOOLS',
  '/Blogs',
  '/Profile',
  '/Logout',
  '/Bookmarks',
  '/Downloads',
  '/Notification',
  // Roadmap sub-routes
  '/Roadmaps',
];

// Define routes that should redirect authenticated users (login/signup pages)
const authRoutes = ['/Login', '/Signup'];

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Get authentication token from cookies
  const authToken = request.cookies.get('authToken')?.value;
  const userEmail = request.cookies.get('userEmail')?.value;
  
  // Check if user is authenticated (has both token and email)
  const isAuthenticated = !!(authToken && userEmail);
  
  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );
  
  // Check if the current path is an auth route (login/signup)
  const isAuthRoute = authRoutes.some(route => 
    pathname.startsWith(route)
  );
  
  // If user is not authenticated and trying to access protected route
  if (!isAuthenticated && isProtectedRoute) {
    // Store the intended destination for redirect after login
    const redirectUrl = new URL('/Login', request.url);
    redirectUrl.searchParams.set('redirect', pathname);
    
    return NextResponse.redirect(redirectUrl);
  }
  
  // If user is authenticated and trying to access auth routes, redirect to home
  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  // Allow the request to continue
  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
