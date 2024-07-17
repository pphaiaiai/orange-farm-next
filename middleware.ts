import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { Router } from 'next/router';
// This function can be marked `async` if using `await` inside

export async function middleware(request: NextRequest) {
  try {
    const jwt = request.cookies.get('jwt')?.value


    if (request.nextUrl.pathname !== '/' && !jwt) {
      return NextResponse.redirect(new URL('/', request.url))
    } else if (request.nextUrl.pathname === '/' && jwt) {
      return NextResponse.redirect(new URL('/orange', request.url))
    }

    return NextResponse.next()
  } catch (error) {
    console.error('Middleware error:', error)
    return NextResponse.redirect(new URL('/', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/orange/:path*', '/farm/:path*'],
}