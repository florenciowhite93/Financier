import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey || supabaseUrl.includes("placeholder")) {
    const isAuthPage = request.nextUrl.pathname.startsWith("/auth");
    if (isAuthPage) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet: { name: string; value: string }[]) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
          response.cookies.set(name, value);
        });
      },
    },
  });

  const allowedEmail = process.env.ALLOWED_EMAIL;
  const { data: { user } } = await supabase.auth.getUser();

  const isAuthPage = request.nextUrl.pathname.startsWith("/auth");
  const isAccessDenied = request.nextUrl.pathname === "/access-denied";

  if (isAuthPage || isAccessDenied) {
    return response;
  }

  if (!user) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (allowedEmail && user.email?.toLowerCase() !== allowedEmail.toLowerCase()) {
    return NextResponse.redirect(new URL("/access-denied", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
