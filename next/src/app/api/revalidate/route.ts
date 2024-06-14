import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {

  const path = request.nextUrl.searchParams.get('path');
  const secret = request.nextUrl.searchParams.get('secret');

  if (secret !== process.env.NEXT_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  console.log('Revalidating path:', path);

  if (path) {
    const _path = path.replace('/posts/', '/blog/');
    revalidatePath(_path);
    return Response.json({ revalidated: true, now: Date.now() });
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: 'Missing path to revalidate',
  });
}
