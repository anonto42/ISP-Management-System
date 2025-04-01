import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './lib/session';
 
export default async function middleware(req: NextRequest) {

  const session = await verifyToken();
  const isAdmin = session? session.role === "admin" : false;
  const user = session? session.role === "user" : false;

  if (req.nextUrl.pathname.startsWith('/admin') && !isAdmin) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  };

  if (req.nextUrl.pathname.startsWith('/user') && !user) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  };
 
  return NextResponse.next();
};
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};