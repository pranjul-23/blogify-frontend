import { NextResponse } from "next/server";
export function middleware(request) {
  const token = request.cookies.get("token");
  if (!token) {
    NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/blogs/create", "/blogs/edit/:path*"],
};
